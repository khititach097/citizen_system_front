import React from "react";
// import type { DatePickerProps } from 'antd';
import { DatePicker, DatePickerProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import locale from "antd/lib/date-picker/locale/th_TH";
import ErrorIcon from "@/components/icons/ErrorIcon";
import "moment/locale/th";
interface Props {
  label?: string | React.ReactNode;
  id: string;
  name: string;
  classnamediv?: string;
  classnamefield?: string;
  placeholder?: string;
  size?: SizeType;
  error?: React.ReactNode;
}

export type PropsDatePickerAntd = DatePickerProps & Props;

const Datepicker: React.FC<PropsDatePickerAntd> = (props) => {
  const {
    label,
    id,
    name,
    classnamediv,
    classnamefield,
    error,
    inputReadOnly = true,
  } = props;
  return (
    <div className={`${classnamediv} ${error ? "input-error" : ""}`}>
      {label ? <div className="mb-2">{label}</div> : null}
      <DatePicker
        {...props}
        className={`${classnamefield}`}
        id={id || name}
        name={name}
        format={(current) => {
          return current.clone().add(543, "year").format("DD/MM/YYYY");
        }}
        locale={locale}
      />
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}
        </div>
      ) : null}
    </div>
  );
};

// Datepicker.defaultProps = {
//   inputReadOnly: true,
// };

export default Datepicker;
