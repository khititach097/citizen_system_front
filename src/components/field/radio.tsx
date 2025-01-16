import { Radio as RadioAntd, RadioChangeEvent, Space } from "antd";
import type { RadioGroupProps, RadioProps } from 'antd'
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { useMemo } from "react";

interface Props extends RadioGroupProps {
  label?: string | React.ReactNode
  classnamediv?: string;
  classNameRadio?: string;
  id: string;
  name?: string;
  listRadio: IRadio[] | [];
  size?: SizeType;
  onChange: ((e: RadioChangeEvent) => void) | undefined;
  direction?: "horizontal" | "vertical"
  classnameRadioDivButton?: string;
}

interface IRadio extends RadioProps {
  children: string | React.ReactNode
  value: string | number | boolean
  style?: any;
  classNameRadioButton?: string;
}

const Radio: React.FC<Props> = (props) => {
  const { label, classnamediv, classNameRadio, classnameRadioDivButton, id, name, size, listRadio, optionType = "button", onChange, direction, ...radioProps } = props

  const _direction = useMemo(() => {
    return `flex flex-wrap ${direction === "vertical" ? "flex-col" : "flex-row"} ${classnameRadioDivButton}`
  }, [direction, classnameRadioDivButton]);

  return (
    (<div className={classnamediv || ''}>
      {label ? (label) : null}
      <RadioAntd.Group
        className={`${classNameRadio || ''} `}
        id={name}
        name={name || id}
        size={size}
        onChange={onChange}
        {...radioProps}
      >
        <div className={_direction}>
          {listRadio.map((item, index) => {
            if (optionType === "button")
              return (
                (<RadioAntd.Button {...item} style={{ borderRadius: (index == 0 ? '6px 0px 0px 6px' : index == listRadio.length - 1 ? '0px 6px 6px 0px ' : ''), ...(item?.style || {}) }} key={`option-${name}-${index}`} className={`${item.classNameRadioButton || ''}`} value={item.value}>
                  {item.children}
                </RadioAntd.Button>)
              );
            else
              return (
                (<RadioAntd {...item} style={{ ...(item?.style || {}) }} key={`option-${name}-${index}`} className={`${item.classNameRadioButton || ''}`} value={item.value}>
                  {item.children}
                </RadioAntd>)
              );
          })}
        </div>
      </RadioAntd.Group>
    </div>)
  );
}

// Radio.defaultProps = {
//   optionType: "button"
// }

export default Radio