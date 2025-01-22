import React from "react";
import { Empty } from "antd";

type EmptyProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> | any


const ComponentEmpty: React.FC<EmptyProps> = (props) => {
  const { className = "", ...otherProps } = props;
  return (
    <Empty 
    className={`${className}`}
    {...otherProps} 
    />
  )
}

export default React.memo(ComponentEmpty);