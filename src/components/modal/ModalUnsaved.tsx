import * as React from "react";
import Modal, { ModalProps } from "antd/lib/modal";
import { H3, P1 } from "components/text";
// import InfoCircle from "components/icons/InfoCircle";
import Button from "components/buttons/Button";

interface Props extends Omit<ModalProps, "onCancel"> {
  title: React.ReactNode;
  desc?: React.ReactNode;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  txtBtnConfirm: React.ReactNode;
  txtBtnCancel: React.ReactNode;
}

const ModalConfirm: React.FC<Props> = (props) => {
  const {
    children,
    title,
    onCancel,
    desc,
    txtBtnConfirm,
    txtBtnCancel,
    onConfirm,
    ...propsModal
  } = props;
  return (
    <Modal maskClosable={false} closable={false} footer={false} destroyOnClose {...propsModal}>
      <div
        className="flex column gap1"
        style={{ padding: "0 2rem", textAlign: "center" }}
      >
        {/* <InfoCircle  fill="#F0F0F0"  style={{  alignSelf:"center" ,width:"auto",height:"50px" }}/> */}
        <H3>{title}</H3>
        {!!desc && <P1 gray>{desc}</P1>}
        <Button
          // type="button"
          // startIcon={<Delete fill="#fff" />}
          onClick={onCancel}
        >
          {txtBtnCancel}
        </Button>

        {txtBtnConfirm && <Button onClick={onConfirm}>
          {txtBtnConfirm}
        </Button>}
       
      </div>
    </Modal>
  );
};

export default React.memo(ModalConfirm);
