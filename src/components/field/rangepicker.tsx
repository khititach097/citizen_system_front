import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React from "react";

import "moment/locale/th";

import generatePicker from "antd/lib/date-picker/generatePicker";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import { noteOnce } from "rc-util/lib/warning";

import dayjs, { Dayjs } from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import localeData from "dayjs/plugin/localeData";

import th from "antd/es/date-picker/locale/th_TH";

dayjs.extend(localeData);
dayjs.extend(buddhistEra);

import ErrorIcon from "@/components/icons/ErrorIcon";

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

const buddhistLocale: typeof th = {
  ...th,
  lang: {
    ...th.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

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
      <DatePicker.RangePicker
        {...props}
        locale={buddhistLocale}
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
        format="DD/MM/BBBB"
      />
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}
        </div>
      ) : null}
    </div>
  );
};

export default Datepicker;
