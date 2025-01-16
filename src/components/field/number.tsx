import { InputNumber as InputNumberAntd, InputNumberProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import ErrorIcon from "@/components/icons/ErrorIcon";
import { useRef } from "react";

export interface Props extends InputNumberProps {
  type?: string | undefined;
  label?: string | React.ReactNode;
  labelRight?: string | React.ReactNode;
  classnamediv?: string;
  classnamefield?: string;
  id: string;
  name: string;
  maxLength?: number;
  addonAfter?: string;
  placeholder?: string;
  size?: SizeType;
  onChange?: ((value: any) => void) | undefined;
  hideComma?: true;
  error?: React.ReactNode;
  numberOnly?: boolean;
}

const MNumber: React.FC<Props> = (props) => {
  const {
    type = "number",
    label,
    labelRight,
    classnamediv,
    classnamefield,
    id,
    name,
    maxLength,
    addonAfter,
    placeholder,
    size,
    required,
    onChange,
    error,
    hideComma,
    numberOnly = false,
    ...propsNumber
  } = props;

  const ref = useRef<any>();

  /* const formatComma = useMemo(()=>{
    if(hideComma) return {
        formatter:undefined,
        parser:undefined,
        decimalSeparator:undefined
    };
    return {
        formatter:(value:any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        parser:(value:any) => value!.replace(/\$\s?|(,*)/g, ''),
        decimalSeparator:","
    }
   },[hideComma]) */

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Block '-' and '+' keys
    if (event.key === "-" || event.key === "+") {
      event.preventDefault();
    }
  };

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
      <InputNumberAntd
        ref={ref}
        type={type}
        maxLength={maxLength}
        className={`${classnamefield ?? ""}`}
        onChange={onChange}
        onKeyDown={numberOnly ? handleKeyDown : undefined}
        addonAfter={addonAfter}
        keyboard={true}
        size={size}
        onWheel={() => {
          ref.current.blur();
        }}
        placeholder={placeholder}
        /* 
                    formatter={formatComma.formatter}
                    parser={formatComma.parser} 
                    decimalSeparator={formatComma.decimalSeparator}
                */
        {...propsNumber}
      />
      {error ? (
        <div className={`text-[#E14942] pt-1`}>
          {<ErrorIcon />} {error}
        </div>
      ) : null}
    </div>
  );
};

// MNumber.defaultProps = {
//     type:'number'
// }

export default MNumber;
