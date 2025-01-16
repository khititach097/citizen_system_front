import * as React from "react";
import Modal, { ModalProps } from "antd/lib/modal";
import Footer, { Props as FooterProps } from "./Footer";

export interface Props extends Omit<ModalProps, "children"> {
  footerProps?: FooterProps & { danger?: true };
  children?: React.ReactNode;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  showBtnOk?: boolean;
  showBtnCancel?: boolean;
  idconfirm?: string;
  idcancel?: string;
  txtBtnCancel?: string;
  txtBtnOK?: string;
}

const ModalBasic: React.FC<Props> = props => {
  const {
    children,
    footerProps,
    footer,
    onCancel,
    onOk,
    idconfirm,
    idcancel,
    txtBtnCancel,
    txtBtnOK,
    showBtnOk= true,
    showBtnCancel= true,
    ...propsModal
  } = props;

  return (
    <Modal
      maskClosable={false}
      onCancel={onCancel}
      footer={
        footer !== false
          ? footer || (
              <Footer
                {...footerProps}
                propsBtnCancel={{
                  onClick: onCancel,
                  ...footerProps?.propsBtnCancel
                }}
                propsBtnOK={{ onClick: onOk, ...footerProps?.propsBtnOK }}
                showBtnOk={showBtnOk}
                showBtnCancel={showBtnCancel}
                idconfirm={idconfirm}
                idcancel={idcancel}
                txtBtnCancel={txtBtnCancel}
                txtBtnOK={txtBtnOK}
              />
            )
          : false
      }
      {...propsModal}
    >
      {children ? children : null}
    </Modal>
  );
};

// ModalBasic.defaultProps = {
//   showBtnOk: true,
//   showBtnCancel: true
// };

export default React.memo(ModalBasic);
