import { Checkbox } from "antd";
import type { CheckboxGroupProps } from "antd/lib/checkbox";
import ErrorIcon from "@/components/icons/ErrorIcon";
import React from "react";

export interface Props extends CheckboxGroupProps {
  id: string;
  name?: string;
  label?: React.ReactNode;
  labelRight?: React.ReactNode;
  classnamediv?: string;
  classnamefield?: string;
  error?: React.ReactNode;
  required?: boolean;
}

const CheckboxGroup: React.FC<Props> = (props) => {
  const {
    label,
    classnamediv,
    classnamefield,
    error,
    required,
    labelRight,
    options,
    children,
    ...otherProps
  } = props;

  const classnameField = React.useMemo(() => {
    return `${classnamefield}`;
  }, [classnamefield]);

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
      {options ? (
        // with options
        <Checkbox.Group
          className={classnameField}
          options={options}
          {...otherProps}
        />
      ) : (
        // with children
        <Checkbox.Group className={classnamefield} {...otherProps}>
          {children}
        </Checkbox.Group>
      )}
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(CheckboxGroup);
