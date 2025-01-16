import { Select as SelectAntd } from "antd";
import type { SelectProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import ErrorIcon from "@/components/icons/ErrorIcon";
import React from "react";

const { Option } = SelectAntd;

export interface Props extends SelectProps {
  classnamediv?: string;
  classnamefield?: string;
  id: string;
  name?: string;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (value: any, option: any) => void;
  value?: any;
  defaultValue?: any;
  width?: string | number;
  label?: string | React.ReactNode | "";
  error?: React.ReactNode;
  size?: SizeType;
  required?: boolean;
  keys?: string[];
  options: any[];
  classNameOption?: string;
  disabledErrorIcon?: boolean;
  disabledErrorHelper?: boolean;
}

export interface SelectCustomOption {
  children?: React.ReactNode;
  className?: string;
  value?: any;
  label?: string;
  disabled?: boolean;
}

const Select: React.FC<Props> = (props) => {
  const {
    classnamediv,
    defaultValue,
    value,
    width,
    label,
    size,
    onChange,
    error,
    required,
    keys,
    classNameOption,
    filterOption,
    disabledErrorIcon,
    disabledErrorHelper,
    id = "test",
    name = "test",
    options = [],
    classnamefield = "w-[100%] h-12",
    ...propsSelect
  } = props;

  const _keys = keys || ["value", "label"];

  const selectId = `select-body-${id || name}`;

  // const handleChange = React.useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     if (typeof onChange === "function") {
  //       onChange(event);
  //     }
  //     // else formContext.handlerChange(event.target.name, event.target.value)
  //   },
  //   [onChange]
  // );
  const withLabelOptions = React.useMemo(() => {
    if (options.length > 0) {
      return options[0]?.label;
    }
    return false;
  }, [options]);

  const handleChange = React.useCallback(
    (value: any, option: any) => {
      if (typeof onChange === "function") {
        onChange(value, option);
      }
    },
    [onChange],
  );

  const handleFilterOptions = React.useCallback(
    (input: string, option?: any) => {
      if (typeof filterOption === "function") {
        return filterOption(input, option);
      }

      if (withLabelOptions) {
        return (
          String(option?.label)?.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      } else {
        return (
          String(option?.label).toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      }
    },
    [filterOption, withLabelOptions],
  );

  return (
    <div
      className={` ${classnamediv} ${error ? "input-error" : ""}`}
      id={selectId}
    >
      {label ? (
        <div id="inputHeader" className="flex mb-2">
          {label} {required && <div className="pl-2 text-red-600">*</div>}
        </div>
      ) : null}

      <SelectAntd
        className={`${classnamefield ? classnamefield : ""} w-${width} ${error ? " required-error" : ""}`}
        id={id || name}
        // options={options}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        size={size}
        options={withLabelOptions ? options : undefined}
        //getPopupContainer={trigger => trigger.parentElement}
        //optionFilterProp='children'
        // filterOption={propsSelect.onSearch ? false : (input, option) => String(option?.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}
        filterOption={propsSelect.onSearch ? false : handleFilterOptions}
        {...propsSelect}
      >
        {!withLabelOptions &&
          options?.length > 0 &&
          options.map((item, index) => (
            <CustomOption
              className={classNameOption || ""}
              key={index}
              value={item[_keys[0]]}
              label={item[_keys[1]]}
              disabled={item?.disabled || false}
            >
              {typeof item?.render === "function"
                ? item?.render(item[_keys[1]], index, item)
                : item[_keys[1]] || " "}
            </CustomOption>
          ))}
      </SelectAntd>
      {error && !disabledErrorHelper ? (
        <div className={`text-[#E14942] pt-1`}>
          {!disabledErrorIcon && <ErrorIcon />} {error}
        </div>
      ) : null}
      {/* </div> */}
    </div>
  );
};

function CustomOption(props: SelectCustomOption) {
  const { children, ...optionProps } = props;
  return <Option {...optionProps}>{children}</Option>;
}

// Select.defaultProps = {
//   id: "test",
//   name: "test",
//   options: [],
//   classnamefield: "w-[100%] h-12"
// };

export default Select;
