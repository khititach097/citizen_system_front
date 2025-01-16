import { Pagination, Select } from "antd";
import Image from "next/image";
import React from "react";

const PortalScreen = () => {
  return (
    <div className="">
      <section id="banner" className="relative aspect-[16/5] z-10">
        <div className="">
          <img
            className="aspect-[16/5] object-cover bg-no-repeat w-full h-[50dvh]"
            src="/Banner/iStock-2164382354.jpg"
            alt="Banner"
          />
          <div
            className="object-cover object-center bg-no-repeat absolute top-0 left-0 z-[10] w-full h-[50dvh]"
            style={{
              backgroundColor: "rgba(0, 75, 15, 0.4)",
            }}
          ></div>
        </div>
      </section>
      <section
        id=""
        className="mt-[-50dvh] relative z-20 min-h-[515px] mx-auto container"
      >
        <h1 className="text-[2rem] font-bold text-center text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.7)]">
          ระบบบริการตรวจสอบข้อมูลภาษี
        </h1>
        <div className="grid grid-cols-3 min-h-[515px] gap-6 pt-14">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="bg-white p-6 rounded-2xl flex flex-col justify-between gap-6 shadow-md hover:shadow-lg transition">
              <div className="bg-primary-2 opacity-75 w-full aspect-[16/9] rounded-2xl"></div>
              <div className="flex flex-col gap-2 w-[60%]">
                <div className="text-xl font-bold line-clamp-2">
                  จัดการคำร้อง สร้างคำร้อง
                </div>
                <div className="text-base line-clamp-4">
                  การจัดการคำร้องสำหรับ เปลี่ยนแปลงการใช้ประโยชน์
                  ,คัดค้านการประเมินภาษีและ แก้ไขรายการทรัพย์สิน
                </div>
              </div>
              <div className="font-bold text-primary flex text-lg py-4">
                <div className="cursor-pointer">เลือกบริการนี้</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="" className="py-28 container mx-auto">
        <div className="==flex justify-between items-center text-2xl hidden">
          <div>ข่าวสารและประชาสัมพันธ์</div>
          <div>
            <Select size="large" defaultValue="1" className="w-[412px]">
              <Select.Option value="1">ทั้งหมด</Select.Option>
              <Select.Option value="2">ข่าวสาร</Select.Option>
              <Select.Option value="3">ประชาสัมพันธ์</Select.Option>
            </Select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortalScreen;
