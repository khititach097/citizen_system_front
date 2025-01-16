import { ExclamationCircleFilled } from "@ant-design/icons";
import { ModalBasic } from "components/modal";
import { Textmodified } from "components/textmodified";
import React, { memo, useEffect, useState } from "react";
import {
  ModalData,
  ModalSummaryProps,
} from "features/map_modification/utils/type";
import { Button } from "components/buttons";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationLoadingComplete from "public/lotties/check.json";
import animationLoadingFail from "public/lotties/error.json";

interface ModalLoadingProps {
  open: boolean;
  data: ModalData<boolean>;
  onAfterLoading: () => void;
  durationModal?: number;
  containerRef?: React.RefObject<HTMLElement>;
}

const ModalLoading: React.FC<ModalLoadingProps> = ({
  open,
  data,
  onAfterLoading,
  durationModal = 3000,
  containerRef,
}) => {
  console.log("🚀 ~  ModalLoading data:", data);

  useEffect(() => {
    console.log(" ***** do fn after loading *****");
    if (!data.apiLoading && open) {
      setTimeout(() => {
        console.log(" ***** do fn after loading *****");

        onAfterLoading();
      }, durationModal);
    }
  }, [data.apiLoading]);
  return (
    <div>
      <ModalBasic
        open={open}
        className="bg-white modal-confrimreq transition-transform duration-75 max-h-[70dvh] "
        showBtnOk={false}
        showBtnCancel={false}
        zIndex={2001}
        width={"100%"}
        style={{
          maxWidth: "60dvw",
          background: "transparent",
        }}
        closable={false}
        centered
        getContainer={() =>
          containerRef?.current ? containerRef?.current : document.body
        }
      >
        <div className="flex flex-col gap-y-2 [7>div]:text-center ">
          {data.apiLoading ? (
            <>
              <div className="dot-loading-container">
                <div className="dot-loading"></div>
                <div className="dot-loading"></div>
                <div className="dot-loading"></div>
                <div className="dot-loading"></div>
              </div>
              <div className="flex flex-col justify-center items-center text-xl">
                <div className="text-center">
                  ระบบกำลังดำเนินการตรวจสอบข้อมูล
                </div>
                <div className="text-center">
                  กรุณาอย่าปิดหน้านี้จนกว่าการตรวจเสร็จสิ้น
                </div>
                {/* <div className="text-center">
                เมื่อตรวจสอบเสร็จสิ้นแล้ว ปุ่ม “ ดำเนินการต่อ ” จะแสดงเป็นสีเขียว
              </div> */}
              </div>
            </>
          ) : data.data ? (
            <div className="flex flex-col justify-center items-center">
              <div className=" h-[300px] w-[300px]">
                <Lottie
                  animationData={animationLoadingComplete}
                  loop={false}
                  width={500}
                  height={500}
                />
              </div>
              <span className="text-xl text-center">
                ระบบกำลังดำเนินการลงข้อมูลไฟล์อัปโหลด <br/>
                จะไม่สามารถดูข้อมูลได้หากยังขึ้นสถานะ “รอตรวจสอบ”
              </span>
            </div>
          ) : (
            <div className="self-center h-[150px] w-[300px]">
              <Lottie
                animationData={animationLoadingFail}
                loop={false}
                width={500}
                height={400}
              />
            </div>
          )}
        </div>
      </ModalBasic>
    </div>
  );
};

export default memo(ModalLoading);
