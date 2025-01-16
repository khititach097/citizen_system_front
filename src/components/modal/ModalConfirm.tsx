import * as React from "react";
import Modal, { ModalProps } from "antd/lib/modal";
import { QuestionCircleTwoTone } from "@ant-design/icons";
// import Delete from 'components/icons/Delete'
import Button from "components/buttons/Button";
import DrawerComponent from "components/drawer/drawer";
import { useAppSelector } from "store/hooks";
import { selectorIsMobile } from "store/selectors";

export interface Props extends Omit<ModalProps, "onCancel"> {
  title: React.ReactNode;
  desc?: React.ReactNode;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
  onCancel:  React.MouseEventHandler<HTMLDivElement>;
  txtBtnConfirm?: React.ReactNode;
  txtBtnCancel?: React.ReactNode;
  idconfirm?: string;
  idcancel?: string;
  icon?: React.ReactNode;
  BtnConfirmProps?:Record<string,any>
  BtnCancelProps?:Record<string,any>
}

const ModalConfirm: React.FC<Props> = (props) => {
  const {
    children,
    title,
    onCancel,
    desc,
    onConfirm,
    idcancel,
    idconfirm,
    BtnConfirmProps,
    BtnCancelProps,
    icon= <QuestionCircleTwoTone twoToneColor="#FFC744"  />,
    txtBtnCancel='ยกเลิก',
    txtBtnConfirm='ตกลง',
    ...propsModal
  } = props;

  // const {  isMobile } = useAppSelector((state) => ({
  //   isMobile: state.root.layout.isMobile,
  // }));

  const isMobile = useAppSelector(selectorIsMobile);

  if (isMobile) {
    return (
      <DrawerComponent
      placement="bottom"
      open={propsModal.open}
      // onClose={(prev:any) => onCancel(prev)}
      width={"100%"}
      height={'inherit'}
      // , zIndex:'1000' , height:'-webkit-fill-available'
      CloseBtnProps={{
        showClose:true,
        position:'end',
        OnClick:onCancel
      }}
      
      hideHeader={true}
      style={{ borderTopRightRadius: "1rem", borderTopLeftRadius: "1rem" }}
      footer={
        <div className="modal-footer-sticky w-full justify-end">
          <div className="flex  w-full ">
          <Button {...BtnConfirmProps}  width={'100%'} id={idconfirm || ""} onClick={onConfirm}>
              {txtBtnConfirm}
            </Button>
          </div>
          <div className="my-2">
          <Button {...BtnCancelProps}  width={'100%'} primary="default" id={idcancel || ""} onClick={onCancel}>
              {txtBtnCancel}
            </Button>
          </div>
        </div>
      }
    >
      <div className={`flex flex-col items-center w-full h-fit`}>
        <div className="text-xl font-semibold">
            {icon ? <span className="inline-flex mr-2">{icon}</span> : null}
          </div>
          <div className="flex grow column items-center w-full" style={{}}>
            <div className="text-xl font-semibold">
              <div>{title}</div>
            </div>
            {!!desc && <div className="text-sm w-full">{desc}</div>}
          </div>
      </div>
    </DrawerComponent>
    )
  } else {
  return (
    <Modal
      bodyStyle={{ borderRadius: "10px" }}
      maskClosable={false}
      closable={false}
      footer={false}
      destroyOnClose={true}
      {...propsModal}
    >
      <div className="flex">
        <div className="text-xl font-semibold">
          {icon ? <span className="inline-flex mr-2">{icon}</span> : null}
        </div>
        <div className="flex grow column" style={{}}>
          <div className="text-xl font-semibold">
            <div>{title}</div>
          </div>
          {!!desc && <div>{desc}</div>}
          <div className="flex justify-end gap-1 mt-[10px]">
            <Button {...BtnCancelProps} primary="default" id={idcancel || ""} onClick={onCancel}>
              {txtBtnCancel}
            </Button>
            <Button {...BtnConfirmProps} id={idconfirm || ""} onClick={onConfirm}>
              {txtBtnConfirm}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
    
  );
}

};

// ModalConfirm.defaultProps = {
//   icon: <QuestionCircleTwoTone twoToneColor="#FFC744"  />,
//   txtBtnCancel:'ยกเลิก',
//   txtBtnConfirm:'ตกลง'
// };

export default React.memo(ModalConfirm);