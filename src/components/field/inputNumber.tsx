/* eslint-disable react-hooks/exhaustive-deps */

import React, { memo, useCallback, useMemo, useRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
// import styles from "styles/components/form/Input.module.css";
import styles from "@/styles/components/form/Input.module.css";

export interface IProps extends NumericFormatProps {
  error?: React.ReactNode;
  classField?: string;
  unit?: string;
  id: string;
  name?: string;
  onChange: (objectValue: Record<string, any>, name?: string) => void;
  comma?: boolean | string;
  maxDecimal?: number;
  showDecimal?: boolean;
  style?: React.CSSProperties;
  allowInteger?: number;
  label: React.ReactNode;
  labelRight?: string;
}

const InputNumber: React.FC<IProps> = (props) => {
  const {
    error,
    unit,
    id,
    type,
    name,
    onChange,
    style,
    label,
    required,
    labelRight,
    classField = "",
    comma = true,
    maxDecimal = 2,
    showDecimal = false,
    allowInteger = 999999999999.99,
    ...propsInput
  } = props;

  const value = useRef({});

  const classText = useMemo(() => {
    return `input_number_format ${styles.input} ${error ? styles.input_error : ""} ${classField}`;
  }, [error, classField]);

  const stylesInput = useMemo(() => {
    const refStyle = { ...(style || {}) };
    if (!unit) return { ...refStyle };
    if (unit === "บาท") {
      return {
        ...refStyle,
        paddingRight: `calc(${unit.length + 1}ch + 6px)`,
        textAlign: "right",
      };
    } else if (unit === "บาท/ตร.ว.") {
      return {
        ...refStyle,
        paddingRight: `calc(${unit.length - 1}ch + 4px)`,
        textAlign: "right",
      };
    } else if (unit === "ปี") {
      return {
        ...refStyle,
        paddingRight: `calc(${unit.length + 1}ch + 4px)`,
        textAlign: "right",
      };
    } else if (unit === "เดือน") {
      return {
        ...refStyle,
        paddingRight: `calc(${unit.length + 1}ch + 4px)`,
        textAlign: "right",
      };
    } else if (unit === "%") {
      return {
        ...refStyle,
        paddingRight: `calc(${unit.length + 1}ch + 12px)`,
        textAlign: "right",
      };
    }
    return { ...refStyle };
  }, [unit, style]) as React.CSSProperties;

  const setShowDeciamal = useMemo(() => {
    if (
      showDecimal ||
      (typeof unit === "string" && unit?.includes("บาท")) ||
      (typeof unit === "string" && unit?.includes("%"))
    ) {
      return true;
    } else {
      return false;
    }
  }, [unit, showDecimal]);

  const isAllowedFunc = useCallback(
    (val: any) => {
      if (typeof props.isAllowed === "function") {
        return props.isAllowed(val);
      } else {
        const { floatValue, value } = val;
        return (
          (floatValue >= 0 && floatValue <= (allowInteger || 0)) || value === ""
        );
      }
    },
    [props.isAllowed, allowInteger, props],
  );

  const handlerValueChange = useCallback(
    ($value: any) => (value.current = $value),
    [],
  );
  const handlerChange = useCallback(
    () =>
      typeof onChange === "function" &&
      onChange(value.current || {}, name || id),
    [onChange, value.current, name, id],
  );

  return (
    <div>
      {label ? (
        <div className="flex justify-between mb-2">
          <div className="flex">
            {label} {required && <div className="pl-2 text-red-600">*</div>}
          </div>
          <div className="flex">{labelRight}</div>
        </div>
      ) : null}
      <div className={styles.container}>
        <NumericFormat
          className={classText}
          id={id || name}
          name={name}
          onValueChange={handlerValueChange}
          //customInput={Input}
          thousandSeparator={comma}
          decimalScale={maxDecimal}
          fixedDecimalScale={setShowDeciamal}
          isAllowed={isAllowedFunc}
          {...propsInput}
          onChange={handlerChange}
          style={stylesInput}
        />
        {unit && (
          <label
            htmlFor={id || name}
            className={`${styles.unit} h-s`}
            onClick={(event) => event.preventDefault()}
          >
            {unit}
          </label>
        )}
      </div>
    </div>
  );
};

// InputNumber.defaultProps = {
//   classField: "",
//   comma: true,
//   maxDecimal: 2,
//   showDecimal: false,
//   allowInteger: 999999999999.99,
// };

export default memo(InputNumber);
