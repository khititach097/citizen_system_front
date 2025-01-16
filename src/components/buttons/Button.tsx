import * as React from 'react'
import { Button , ButtonProps } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


export interface Props extends ButtonProps {
  primary?:"link" | "text" | "ghost" | "primary" | "default" | "dashed" | undefined;
  children: React.ReactNode;
  loading?: boolean;
  height?:string | number | undefined;
  width?:string | number | undefined;
  size?:any;
  style?:Record<string,any> ;
  disabled?:boolean | undefined ;
}

const ButtonComponent: React.FC<Props> = props => {
  const { primary = "primary", children, size = "middle", width = "fit-content", height ="fit-content" , style } = props
  
  const disabledBtn = React.useMemo(()=>{
    if(props.loading === true) return true;
    return props.disabled || false;
  },[props.disabled , props.loading])

  return (
    <Button type={primary} {...props} style={{...style , height:height , width:width}} size={size} disabled={disabledBtn} loading={false} >
      {props.loading === true ? <Spin indicator={<LoadingOutlined style={{ fontWeight: "bold", color: "var(--color-primary-1)" }}  />}  /> :  children}
    </Button>
  )
}

// ButtonComponent.defaultProps = {
//   // variant: 'contained',
//   primary:"primary",
//   size: 'middle',
//   height:"fit-content",
//   width:"fit-content"
// }

export default React.memo(ButtonComponent)
