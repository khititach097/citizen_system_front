import { CloseOutlined, ExclamationCircleFilled, QuestionOutlined } from "@ant-design/icons";
import { ModalBasic } from "components/modal";
import { Textmodified } from "components/textmodified";
import React from "react";


interface ModalCancelProps {
  open: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  title:string;
  subTitle:string | React.ReactNode;
  containerRef?: React.RefObject<HTMLElement>;
}

const ModalCancel: React.FC<ModalCancelProps> = ({
  open,
  onSubmit,
  onCancel,
  title,
    subTitle,
  containerRef
}) => {

  return (
    <div>
      <ModalBasic
        open={open}
        className="bg-white modal-confrimreq"
        onCancel={onCancel}
        onOk={onSubmit}
        showBtnOk={true}
        showBtnCancel={true}
        zIndex={2001}
        // showBtnCancel={!progress.loading}
        txtBtnCancel={"ยกเลิก"}
        txtBtnOK={"ยืนยัน"}
        footerProps={{
          // footerClassname: progress.success ? "grid grid-cols-2" : "",
          propsBtnOK: {
            disabled: false,
            danger:true
          },
          propsBtnCancel: {
            primary: "default",
          },
        }}
        width={"100%"}
        style={{ maxWidth: "37.5rem" ,background:'transparent' }}
        closable={true}
        centered
        getContainer={() => containerRef?.current ? containerRef?.current : document.body}

      >
         <Textmodified
            spaceSize={2}
            preFixText={( <CloseOutlined className="bg-[#FFE5E6] rounded-full p-4" style={{ color: '#CC0004', fontSize: '13px' }}   />)}
            middleText={
              <div className={`flex flex-col px-2 `}>
                <span className={`text-lg font-semibold`}>
               {title}
                {/* ยืนยันผลสำรวจ */}
                </span>
                <div className={`flex font-normal text-xs items-center`}>
                  <span className="pr-2 text-base">
                 {subTitle}
                  {/* เปลี่ยนสถานะทรัพย์เป็น “สำรวจแล้ว” */}

                  </span>
                </div>
              </div>
            }
          />
      </ModalBasic>
    </div>
  );
};

export default ModalCancel;
