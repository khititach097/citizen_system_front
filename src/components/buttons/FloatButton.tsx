import { Button, ButtonProps } from 'antd'
import React, { useMemo } from 'react'

export type FloatButtonProps = ButtonProps & {
  position?: "bottom-right"
}

type FloatPosition = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}

const FloatButton: React.FC<FloatButtonProps> = (props) => {
  const {
    position,
    shape = "circle",
    children,
    style,
    // top,
    // bottom,
    // left,
    // right,
    ...buttonProps
  } = props;

  const floatPosition = useMemo((): FloatPosition => {
    switch (position) {
      case "bottom-right": {
        return { bottom: 10, right: 10 }
      }

      default: {
        return { bottom: 100, right: 50 }
      }
    }
  }, [position]);

  return (
    <Button
      {...buttonProps}
      shape={shape}
      style={{
        ...style,
        ...floatPosition,
        // top,
        // left,
        // right,
        // bottom,
        height: "32px",
        borderRadius: "50%",
        position: "absolute",
        zIndex: "99999",
      }}
    >
      {children}
    </Button>
  )
}

export default React.memo(FloatButton)