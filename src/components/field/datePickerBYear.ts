import dayjs, { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import { noteOnce } from 'rc-util/lib/warning';

import buddistEra from 'dayjs/plugin/buddhistEra';
import weekday from 'dayjs/plugin/weekday'; 
import weekOfYear from 'dayjs/plugin/weekOfYear';

import th from 'dayjs/locale/th';

dayjs.locale(
  {
    ...th,
    formats: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/BBBB',
      LL: 'D MMMM BBBB',
      LLL: 'D MMMM BBBB เวลา H:mm',
      LLLL: 'วันddddที่ D MMMM BBBB เวลา H:mm',
    },
  },
  undefined,
  true
);

dayjs.extend(buddistEra);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

// type IlocaleMapObject = Record<string, string>;
// const localeMap: IlocaleMapObject = {
//   bn_BD: 'bn-bd',
//   by_BY: 'be',
//   en_GB: 'en-gb',
//   en_US: 'en',
//   fr_BE: 'fr', // todo: dayjs has no fr_BE locale, use fr at present
//   fr_CA: 'fr-ca',
//   hy_AM: 'hy-am',
//   kmr_IQ: 'ku',
//   nl_BE: 'nl-be',
//   pt_BR: 'pt-br',
//   th_TH: 'th',
//   zh_CN: 'zh-cn',
//   zh_HK: 'zh-hk',
//   zh_TW: 'zh-tw',
// };

const parseLocale = (_: string): string => {
  return 'th'; // Hardcoded 'th' for now, replace it with actual logic if needed.
};

const parseNoMatchNotice = (): void => {
  /* istanbul ignore next */
  noteOnce(
    false,
    'Not match any format. Please help to fire a issue about this.'
  );
};

const config = {
  ...dayjsGenerateConfig,
  getFixedDate: (string: string): Dayjs => dayjs(string, ['BBBB-M-DD', 'BBBB-MM-DD']),
  setYear: (date: Dayjs, year: number): Dayjs => {
    return date.year(year - 543);
  },
  getYear: (date: Dayjs): number => Number(date.format('BBBB')),
  locale: {
    getWeekFirstDay: (locale: string): number =>
      dayjs().locale(parseLocale(locale)).localeData().firstDayOfWeek(),
    getWeekFirstDate: (locale: string, date: Dayjs): Dayjs =>
      date.locale(parseLocale(locale)).weekday(0),
    getWeek: (locale: string, date: Dayjs): number =>
      date.locale(parseLocale(locale)).week(),
    getShortWeekDays: (locale: string): string[] =>
      dayjs().locale(parseLocale(locale)).localeData().weekdaysMin(),
    getShortMonths: (locale: string): string[] =>
      dayjs().locale(parseLocale(locale)).localeData().monthsShort(),
    format: (locale: string, date: Dayjs, format: string): string => {
      const convertFormat = format.replace('YYYY', 'BBBB');
      return date.locale(parseLocale(locale)).format(convertFormat);
    },
    parse: (locale: string, text: string, formats: string[]): Dayjs => {
      const localeStr = parseLocale(locale);
      for (let i = 0; i < formats.length; i += 1) {
        const format = formats[i];
        const formatText = text;
        if (format.includes('wo') || format.includes('Wo')) {
          // parse Wo
          const year = formatText.split('-')[0];
          const weekStr = formatText.split('-')[1];
          const firstWeek = dayjs(year, 'BBBB').startOf('year').locale(localeStr);
          for (let j = 0; j <= 52; j += 1) {
            const nextWeek = firstWeek.add(j, 'week');
            if (nextWeek.format('Wo') === weekStr) {
              return nextWeek;
            }
          }
          parseNoMatchNotice();
          return null as any;
        }
        const date = dayjs(formatText, format, true).locale(localeStr);
        if (date.isValid()) {
          return date;
        }
      }

      if (text) {
        parseNoMatchNotice();
      }
      return null as any;
    },
  },
};

const DatePicker = generatePicker<Dayjs>(config);

export default DatePicker;
