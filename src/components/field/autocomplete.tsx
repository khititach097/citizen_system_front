import {
  AutoComplete as AutoCompleteAntd,
  AutoCompleteProps,
  Input as InputAntd,
} from "antd";
import ErrorIcon from "@/components/icons/ErrorIcon";
import React from "react";

export interface Props extends AutoCompleteProps {
  type?: string | undefined;
  label?: string | React.ReactNode;
  labelRight?: string | React.ReactNode;
  classnamediv?: string;
  classnamefield?: string;
  placeholder?: string;
  // onSelect?: (value: string) => void;
  onSelect?: (value: string, option?: any) => void;
  onSearch: (value: string) => void;
  required?: boolean;
  error?: React.ReactNode;
  name?: string;
}

const AutoComplete: React.FC<Props> = (props) => {
  const {
    label,
    name,
    labelRight,
    classnamediv,
    classnamefield,
    placeholder,
    size,
    required = false,
    options,
    onSelect,
    onSearch,
    error,
  } = props;

  // mock option autocomplete

  return (
    <div className={`${classnamediv} ${error ? "input-error" : ""}`}>
      {label ? (
        <div className="flex justify-between mb-2">
          <div className="flex">
            {label} {required && <div className="pl-2 text-red-600">*</div>}
          </div>
          <div className="flex">{labelRight}</div>
        </div>
      ) : null}
      <AutoCompleteAntd
        {...props}
        className={classnamefield}
        placeholder={false}
        // style={{ width: "100%" }}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        // size={size}
      >
        <InputAntd size={size} placeholder={placeholder} />
      </AutoCompleteAntd>

      {/* <AutoCompleteAntd
        {...props}
        className={classnamefield}
        // style={{ width: "100%" }}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        size={size}
      /> */}

      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}
        </div>
      ) : null}
    </div>
  );
};

// AutoComplete.defaultProps = {
//   required: false
// }

export default React.memo(AutoComplete);
