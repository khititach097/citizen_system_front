import { Field } from "@/components/field";
import Table from "@/components/table/v2/Table";
import { Button, DatePicker, Divider, Pagination } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import ManageRequestTable from "../shared/ManageRequestTable";
import { useRouter } from "next/navigation";

type Props = {};

const ManageRequestScreen = (props: Props) => {
  const { RangePicker } = DatePicker;

  const router = useRouter();

  return (
    <div className="pb-24">
      <div className="aspect-[6/1] w-full bg-primary-2"></div>
      <div className="bg-white rounded-2xl py-11 container mx-auto relative -mt-32 border-[#0000000D] border-2">
        <div className="absolute w-full h-32 -top-32 left-0 grid grid-cols-3 items-end">
          <div
            className="flex h-full items-center gap-4 text-white cursor-pointer hover:text-light-green transition-colors"
            onClick={() => {
              router.push("/portal");
            }}
          >
            <IoArrowBack />
            <span className="font-bold text-sm1">กลับสู่ระบบ</span>
          </div>
          <div>
            <img src="/Banner/Banner-crop.png" alt="logo" className="" />
          </div>
        </div>
        <div className="px-9">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-bold text-text-green-1 text-2xl">
                จัดการคำร้องสร้างคำร้อง
              </h1>
              <p className="pt-2">
                การจัดการคำร้องสำหรับเปลี่ยนแปลงการใช้ประโยชน์
                คัดค้านการประเมินภาษี และ แจ้งแก้ไขบัญชีรายการทรัพย์สิน
              </p>
            </div>
            <div>
              <Button
                className="btn-blue"
                type="primary"
                size="large"
                icon={<FaPlus size={12} />}
              >
                สร้างคำร้องใหม่
              </Button>
            </div>
          </div>
          <Divider />

          <div id="form" className="flex gap-4 items-end">
            <Field.Select
              classnamediv="w-1/6"
              classnamefield="h-8 w-full"
              label="เขต / เทศบาล"
              id="field"
              options={[
                { value: "1", label: "เปลี่ยนแปลงการใช้ประโยชน์" },
                { value: "2", label: "คัดค้านการประเมินภาษี" },
                { value: "3", label: "แจ้งแก้ไขบัญชีรายการทรัพย์สิน" },
              ]}
            />

            <Field.Input
              classnamediv="w-1/6"
              label="ค้นหาด้วยเลขคำร้อง"
              id="field"
            />
            <Field.Select
              classnamediv="w-1/6"
              classnamefield="h-8 w-full"
              label="ประเภทคำร้อง"
              id="field"
              options={[
                { value: "1", label: "เปลี่ยนแปลงการใช้ประโยชน์" },
                { value: "2", label: "คัดค้านการประเมินภาษี" },
                { value: "3", label: "แจ้งแก้ไขบัญชีรายการทรัพย์สิน" },
              ]}
            />
            <Field.Rangepicker
              label="วันที่ยื่น"
              classnamediv="w-[17%]"
              id="field"
              name="qwe"
              onChange={(value1, value2) => {
                console.log(value1, value2);
              }}
              placeholder={["ตั้งแต่วันที่", "ถึงวันที่"]}
            />

            <Button type="primary">ยืนยัน</Button>
          </div>
        </div>
        <ManageRequestTable />
      </div>
    </div>
  );
};

export default ManageRequestScreen;
