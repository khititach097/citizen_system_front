import { DatePickerProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React from "react";

import "moment/locale/th";

import generatePicker from "antd/lib/date-picker/generatePicker";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import { noteOnce } from "rc-util/lib/warning";

import dayjs, { Dayjs } from "dayjs";
import th from "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import localeData from "dayjs/plugin/localeData";

dayjs.locale(
  {
    ...th,
    formats: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/BBBB",
      LL: "D MMMM BBBB",
      LLL: "D MMMM BBBB เวลา H:mm",
      LLLL: "วันddddที่ D MMMM BBBB เวลา H:mm",
    },
  },
  {},
  true,
);

dayjs.extend(localeData);
dayjs.extend(buddhistEra);

import moment from "moment";
import ErrorIcon from "@/components/icons/ErrorIcon";
//import { Moment } from 'moment';

const parseLocale = (_: string) => {
  return "th";
};

const parseNoMatchNotice = () => {
  /* istanbul ignore next */
  noteOnce(
    false,
    "Not match any format. Please help to fire a issue about this.",
  );
};

const config = {
  va: 1,
  ...dayjsGenerateConfig,
  getFixedDate: (string: any) => dayjs(string, ["BBBB-M-DD", "BBBB-MM-DD"]),
  setYear: (date: any, year: any) => {
    return date.year(year - 543);
  },
  getYear: (date: any) => Number(date.format("BBBB")),
  locale: {
    getWeekFirstDay: (locale: any) =>
      dayjs().locale(parseLocale(locale)).localeData().firstDayOfWeek(),
    getWeekFirstDate: (locale: any, date: any) =>
      date.locale(parseLocale(locale)).weekday(0),
    getWeek: (locale: any, date: any) =>
      date.locale(parseLocale(locale)).week(),
    getShortWeekDays: (locale: any) =>
      dayjs().locale(parseLocale(locale)).localeData().weekdaysMin(),
    getShortMonths: (locale: any) =>
      dayjs().locale(parseLocale(locale)).localeData().monthsShort(),
    format: (locale: any, date: any, format: any) => {
      const convertFormat = format.replace("YYYY", "BBBB");
      return date.locale(parseLocale(locale)).format(convertFormat);
    },
    parse: (locale: any, text: any, formats: any) => {
      const localeStr = parseLocale(locale);
      for (let i = 0; i < formats.length; i += 1) {
        const format = formats[i];
        const formatText = text;
        if (format.includes("wo") || format.includes("Wo")) {
          // parse Wo
          const year = formatText.split("-")[0];
          const weekStr = formatText.split("-")[1];
          const firstWeek = dayjs(year, "BBBB")
            .startOf("year")
            .locale(localeStr);
          for (let j = 0; j <= 52; j += 1) {
            const nextWeek = firstWeek.add(j, "week");
            if (nextWeek.format("Wo") === weekStr) {
              return nextWeek;
            }
          }
          parseNoMatchNotice();
          return null;
        }
        const date = dayjs(formatText, format, true).locale(localeStr);
        if (date.isValid()) {
          return date;
        }
      }

      if (text) {
        parseNoMatchNotice();
      }
      return null;
    },
  },
};

const DatePickerCustom = generatePicker<Dayjs>(config);

interface Props {
  label?: string | React.ReactNode;
  id: string;
  name: string;
  classnamediv?: string;
  classnamefield?: string;
  placeholder?: string | string[];
  size?: SizeType;
  onChange: (value1: any, value2?: any) => void;
  value?: [any, any];
  inputReadOnly?: boolean;
  error?: React.ReactNode;
  picker?: "date" | "week" | "month" | "quarter" | "year";
  disabledDate?: (date: dayjs.Dayjs) => boolean;
  allowClear?: boolean;
  getContainer?: React.RefObject<HTMLDivElement>;
}

export type PropsDatePickerAntd = DatePickerProps & Props;

const Datepicker: React.FC<Props> = (props) => {
  const {
    value,
    label,
    id,
    name,
    classnamediv,
    classnamefield,
    onChange,
    error,
    inputReadOnly = true,
    placeholder = "วว/ดด/ปปปป",
    picker = "date",
    disabledDate,
    allowClear,
    getContainer,
  } = props;
  return (
    <div className={`${classnamediv} ${error ? "input-error" : ""}`}>
      {label ? <div className="mb-2">{label}</div> : null}
      <DatePickerCustom.RangePicker
        {...props}
        picker={picker}
        disabledDate={disabledDate}
        allowClear={allowClear}
        getPopupContainer={() =>
          getContainer?.current ? getContainer?.current : document.body
        }
        value={
          value && value[0] && value[1]
            ? [dayjs(value[0]), dayjs(value[1])]
            : undefined
        }
        onCalendarChange={(valuesMoment) => {
          if (valuesMoment && valuesMoment![1])
            onChange(valuesMoment![0]?.format(), valuesMoment![1]?.format());
        }}
        onChange={(valuesMoment) => {
          if (!valuesMoment) onChange(null, null);
        }}
        placeholder={
          Array.isArray(placeholder)
            ? [placeholder[0], placeholder[1]]
            : [placeholder!, placeholder!]
        }
        className={`${classnamefield}`}
        id={id || name}
        name={name}
        format="DD/MM/YYYY"
      />
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}
        </div>
      ) : null}

      {/* <DatePicker.RangePicker
          {...props}
          value={value && value[1] ? [moment(value[0]) , moment(value[1])] : undefined}
          onCalendarChange={(valuesMoment)=>{
            if(valuesMoment && valuesMoment![1])
              onChange(valuesMoment![0]?.format() , valuesMoment![1]?.format())
          }}
          onChange={(valuesMoment , valueString)=>{
            if(!valuesMoment)
              onChange(null , null)
          }}
          placeholder={[placeholder!,placeholder!]}
          className={`${classnamefield}`}
          id={id || name}
          name={name}
          format={(current)=>{
            if(current)
              return current?.clone().add(543,'y').format('DD/MM/YYYY')
            return 'DD/MM/YYYY'
          }}
        /> */}
    </div>
  );
};

// Datepicker.defaultProps = {
//   inputReadOnly: true,
//   placeholder: "วว/ดด/ปปปป"
// };

export default Datepicker;
