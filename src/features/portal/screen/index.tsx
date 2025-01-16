import { Pagination, Select } from "antd";
import Image from "next/image";
import React from "react";
import ServiceCard, {
  ServiceCardProps,
} from "../components/shared/ServiceCard";

const PortalScreen = () => {
  const services: ServiceCardProps[] = [
    {
      title: "จัดการคำร้องสร้างคำร้อง",
      description:
        "การจัดการคำร้องสำหรับ เปลี่ยนแปลงการใช้ประโยชน์ ,คัดค้านการประเมินภาษีและ แก้ไขรายการทรัพย์สิน",
      image: "/Services/service1.svg",
      href: "/manage-request",
    },
    {
      title: "การชำระภาษี และประวัติการชำระภาษี",
      description:
        "การตรวจสอบประวัติการชำระภาษี และเอกสารที่เกี่ยวข้องกับภาษีที่ดินและสิ่งปลูกสร้าง ภาษีป้าย และที่ดิน",
      image: "/Services/service2.svg",
      href: "",
    },
    {
      title: "แสดงรายการทรัพย์สิน",
      description: "การแสดงรายการทรัพย์สินในกรรมสิทธิ์ของท่าน",
      image: "/Services/service3.svg",
      href: "",
    },
  ];

  return (
    <div className="">
      <section id="banner" className="relative h-[34rem] z-10">
        <div className="">
          <img
            className="h-[34rem] object-cover bg-no-repeat w-full"
            src="/Banner/iStock-2164382354.jpg"
            alt="Banner"
          />
          <div
            className="object-cover object-center bg-no-repeat absolute top-0 left-0 z-[10] w-full h-[34rem]"
            style={{
              backgroundColor: "rgba(0, 75, 15, 0.4)",
            }}
          ></div>
        </div>
      </section>
      <section
        id=""
        className="mt-[-30rem] relative z-20 min-h-[515px] mx-auto container"
      >
        <h1 className="text-[2rem] font-bold text-center text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.7)]">
          ระบบบริการตรวจสอบข้อมูลภาษี
        </h1>
        <div className="grid grid-cols-3 min-h-[515px] gap-6 pt-14">
          {services.map((_, index: number) => (
            <ServiceCard
              key={index}
              title={_.title}
              description={_.description}
              image={_.image}
              href={_.href}
            />
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
