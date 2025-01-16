import { SizeType } from "antd/lib/config-provider/SizeContext";
import React from "react";
import { Input } from "antd";
import ErrorIcon from "@/components/icons/ErrorIcon";
import type { TextAreaProps } from "antd/lib/input";

const { TextArea: TextAreaAntd } = Input;

export interface Props extends TextAreaProps {
  type?: string | undefined;
  label?: string | React.ReactNode;
  labelRight?: string | React.ReactNode;
  classnamediv?: string;
  classnamefield?: string;
  id?: string;
  name?: string;
  maxLength?: number;
  addonAfter?: string;
  placeholder?: string;
  size?: SizeType;
  error?: React.ReactNode;
  value?: string;
}

const TextArea: React.FC<Props> = (props) => {
  const {
    type,
    label,
    labelRight,
    classnamediv,
    classnamefield,
    disabled,
    id,
    name,
    maxLength,
    addonAfter,
    placeholder,
    size,
    required,
    error,
    onChange,
    value,
    ...textAreaProps
  } = props;

  const onChangeValueTextArea = (e: any) => {
    if (typeof onChange == "function") {
      return onChange(e);
    }
  };

  return (
    <div className={`${classnamediv} ${error ? "input-error" : ""}`}>
      {label ? (
        <div id="inputHeader" className="flex justify-between mb-2">
          <div className="flex">
            {label} {required && <div className="pl-2 text-red-600">*</div>}
          </div>
          <div className="flex">{labelRight}</div>
        </div>
      ) : null}

      <TextAreaAntd
        {...textAreaProps}
        className={`${classnamefield} `}
        placeholder={placeholder}
        id={id}
        name={name || id}
        maxLength={maxLength}
        size={size}
        value={value}
        onChange={onChangeValueTextArea}
        style={textAreaProps.style}
        disabled={disabled}
      />
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}{" "}
        </div>
      ) : null}
    </div>
  );
};

export default TextArea;
