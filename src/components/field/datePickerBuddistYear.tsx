import React, { useMemo } from "react";
// import './index.css';
import { ConfigProvider, DatePickerProps } from "antd";
import thTH from "antd/lib/locale/th_TH";
import DatePicker from "./datePickerBYear";
// import { DatePickerValue } from 'antd/lib/date-picker/interface';
// import React from 'react';
// import './index.css';
// import { ConfigProvider, DatePickerProps } from 'antd';
// import { Space } from 'antd';
// import DatePicker from './DatePicker';
// import thTH from 'antd/lib/locale/th_TH';

import { SizeType } from "antd/lib/config-provider/SizeContext";
import locale from "antd/lib/date-picker/locale/th_TH";
import dayjs, { Dayjs } from "dayjs";
import ErrorIcon from "@/components/icons/ErrorIcon";

const datePickerTh = {
  ...locale,
  lang: {
    ...locale.lang,
    yearFormat: "BBBB",
    dateFormat: "M/D/BBBB",
    dateTimeFormat: "M/D/BBBB HH:mm:ss",
  },
  dateFormat: "BBBB-MM-DD",
  dateTimeFormat: "BBBB-MM-DD HH:mm:ss",
  weekFormat: "BBBB-wo",
  monthFormat: "BBBB-MM",
};

// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };

// const App: React.FC = () => (
//   <ConfigProvider locale={thTH}>
//     <Space direction="vertical">
//       <DatePicker
//         locale={datePickerTh}
//         format="BBBB-MM-DD"
//         onChange={onChange}
//       />
//     </Space>
//   </ConfigProvider>
// );

// export default App;

interface Props {
  label?: string | React.ReactNode;
  id: string;
  name: string;
  classnamediv?: string;
  classnamefield?: string;
  placeholder?: string;
  size?: SizeType;
  value?: any; // Update the type to Moment or null
  onChange?: any;
  error?: React.ReactNode;
  required?: boolean;
  labelRight?: React.ReactNode;
  disabled?: boolean;
  disabledDate?: (date: Dayjs) => boolean;
  getContainer?: React.RefObject<HTMLDivElement>;
}

export type PropsDatePickerAntd = Omit<DatePickerProps, "disabledDate"> & Props;

const Datepicker: React.FC<PropsDatePickerAntd> = (props) => {
  const {
    label,
    id,
    name,
    classnamediv,
    classnamefield,
    value,
    onChange,
    style,
    placeholder,
    size,
    error,
    required,
    labelRight,
    disabled,
    picker,
    disabledDate,
    inputReadOnly = true,
    getContainer,
  } = props;

  const values = useMemo(() => {
    if (value) {
      return dayjs(value).startOf("day");
    } else {
      return null;
    }
  }, [value]);

  return (
    <ConfigProvider locale={thTH}>
      <div className={`${classnamediv} ${error ? "input-error" : ""}`}>
        {label ? (
          <div className="flex justify-between mb-2">
            <div className="flex">
              {label} {required && <div className="pl-2 text-red-600">*</div>}
            </div>
            <div className="flex">{labelRight}</div>
          </div>
        ) : null}

        <DatePicker
          // {...props}
          value={values}
          style={style}
          locale={datePickerTh}
          placeholder={placeholder}
          className={`${classnamefield}`}
          id={id || name}
          name={name}
          format={picker === "month" ? "MM/BBBB" : "DD/MM/BBBB"}
          onChange={onChange}
          size={size}
          disabled={disabled}
          picker={picker ? picker : undefined}
          disabledDate={disabledDate}
          getPopupContainer={() =>
            getContainer?.current ? getContainer?.current : document.body
          }
        />
        {/* <DatePicker
        locale={datePickerTh}
        // format="BBBB-MM-DD"
        format={'DD/MM/BBBB'}
        onChange={props.onChange}
        value={dayjs(value) }
      /> */}
        {error ? (
          <div className={`text-[#E14942] pt-1`}>
            {<ErrorIcon />} {error}
          </div>
        ) : null}
      </div>
    </ConfigProvider>
  );
};

// Datepicker.defaultProps = {
//   inputReadOnly: true,
// };

export default Datepicker;
