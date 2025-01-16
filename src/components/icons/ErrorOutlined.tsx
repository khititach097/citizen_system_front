import React from 'react'
import { MaterialIconProps } from './types'

const ErrorOutlined = (props: MaterialIconProps) => {
  const { className, ...iconProps } = props;

  return (
    <span className={`material-icons-outlined ${className}`} {...iconProps}>error_outlined</span>
  )
}

export default React.memo(ErrorOutlined)