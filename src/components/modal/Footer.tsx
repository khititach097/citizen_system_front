import * as React from 'react'
import Button, { Props as BtnProps } from '../buttons/Button'

export interface Props {
  footerClassname?: string
  txtBtnCancel?: string
  txtBtnOK?: string
  propsBtnCancel?: Omit<BtnProps, 'children'>
  propsBtnOK?: Omit<BtnProps, 'children'>
  showBtnOk?: boolean
  showBtnCancel?: boolean
  idconfirm?:string
  idcancel?:string
  type?:"default" | "primary" | "dashed" | "text" | "link"
}

const Footer: React.FC<Props> = props => {
  const {
    footerClassname,
    propsBtnCancel,
    propsBtnOK,
    idconfirm,
    idcancel,
    txtBtnCancel= 'Cancel',
    txtBtnOK= 'Save',
    showBtnOk= true,
    showBtnCancel= true,
  } = props;
  return (
    <div className={`flex ${footerClassname ? footerClassname : 'align-center justify-end'} `}>
      {showBtnCancel && (
        <Button 
          id={idcancel || ""}
          // variant='outlined'
          {...propsBtnCancel}
        >
          {txtBtnCancel}
        </Button>
      )}
      {showBtnOk && (
        <Button
        id={idconfirm || ""}
          {...propsBtnOK}
        >
          {txtBtnOK}
        </Button>
      )}
    </div>
  )
}

// Footer.defaultProps = {
//   txtBtnCancel: 'Cancel',
//   txtBtnOK: 'Save',
//   showBtnOk: true,
//   showBtnCancel: true,
// }

export default React.memo(Footer)
