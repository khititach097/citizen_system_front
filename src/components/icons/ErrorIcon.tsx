import React from 'react'
import { MaterialIconProps } from './types'

const ErrorIcon = (props: MaterialIconProps) => {
  const { className, ...iconProps } = props;

  return (
    <span className={`material-icons ${className}`} {...iconProps}>error</span>
  )
}

export default React.memo(ErrorIcon)