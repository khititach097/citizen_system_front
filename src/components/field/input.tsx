import type { InputProps } from "antd";
import { Input as InputAntd } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import ErrorIcon from "@/components/icons/ErrorIcon";
import React, { useEffect } from "react";

const { Search } = InputAntd;

export interface Props extends InputProps {
  type?: string | undefined;
  label?: string | React.ReactNode;
  labelRight?: string | React.ReactNode;
  classnamediv?: string;
  classnamefield?: string;
  id: string;
  name?: string;
  maxLength?: number;
  addonAfter?: string;
  placeholder?: string;
  size?: SizeType;
  error?: React.ReactNode | "";
}

const Input: React.FC<Props> = (props) => {
  const {
    type = "input",
    label,
    labelRight,
    classnamediv,
    classnamefield,
    id,
    name,
    maxLength = 255,
    addonAfter,
    placeholder,
    size,
    required,
    error,
    // allowClear,
    ...inputProps
  } = props;

  const RenderInput = (type: string) => {
    switch (type) {
      case "search":
        return (
          <Search {...props} placeholder="input search; text" enterButton />
        );
      default:
        return (
          <InputAntd
            className={`${classnamefield ? classnamefield : ""} `}
            addonAfter={addonAfter}
            placeholder={placeholder}
            id={id}
            name={name || id}
            maxLength={maxLength}
            size={size}
            title={inputProps.value?.toString()}
            {...inputProps}
          />
        );
    }
  };

  return (
    <div
      className={`${classnamediv ? classnamediv : ""} ${error ? "input-error" : ""}`}
    >
      {label ? (
        <div id="inputHeader" className="flex justify-between mb-2">
          <div className="flex">
            {label} {required && <div className="pl-2 text-red-600">*</div>}
          </div>
          <div className="flex">{labelRight}</div>
        </div>
      ) : null}
      {RenderInput(props.type!)}
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          <ErrorIcon /> {error}
        </div>
      ) : null}
    </div>
  );
};

// Input.defaultProps = {
//   type: "input",
//   maxLength: 255
// };

export default React.memo(Input);
