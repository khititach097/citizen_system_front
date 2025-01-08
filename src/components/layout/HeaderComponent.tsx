import React from "react";
import { Layout as AndLayout, Typography } from "antd";
import Image from "next/image";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { FaRegUser } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";

const items: MenuProps['items'] = [
  {
    label: (
      <a rel="noopener noreferrer" href="" className="flex gap-2 items-center justify-start">
        <FaRegUser />
        บัญชีของฉัน
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a rel="noopener noreferrer" href="" className="flex gap-2 items-center justify-start">
        <IoDocumentOutline />
        ข้อตกลงการใช้งาน
      </a>
    ),
    key: '1',
  },
  {
    label: (
      <a rel="noopener noreferrer" href="" className="flex gap-2 items-center justify-start">
        <IoDocumentOutline />
        เอกสารการใช้งานระบบ
      </a>
    ),
    key: '2',
  },
  {
    label: (
      <a rel="noopener noreferrer" href="" className="flex gap-2 items-center justify-start">
        <GoSignOut />
        ออกจากระบบ
      </a>
    ),
    key: '3',
  }
];

const { Header } = AndLayout;
const { Text } = Typography;

const HeaderComponent = () => {
  const isLogin = false; // Change to dynamic value based on user login state

  return (
    <Header className="bg-primary-2 text-white text-center px-20 leading-[64px] h-20" 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10000,
        width: '100%',
      }}>
      <div className="flex w-full h-full justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden inline-block mr-6">
            <Image
              src="/logo/muni_logo/03400102.png"
              width={45}
              height={45}
              alt="Muni_Logo"
              style={{
                objectFit: "cover", // Ensures the image covers the circle
                objectPosition: "center",
                background: "red",
              }}
            />
          </div>
          <div className="flex flex-col text-start font-semibold">
            <Text className="leading-tight text-white">ระบบบริการ</Text>
            <Text className="leading-tight text-white mt-0">
              ตรวจสอบข้อมูลภาษี
            </Text>
          </div>
        </div>
        {!isLogin ? (
          <div className="flex gap-2 items-center justify-center">
            <Link
              href="/login"
              passHref
              className="flex gap-2 items-center justify-center"
            >
              <GoSignIn size={18} style={{ strokeWidth: 1 }} />
              <span className="cursor-pointer hover:underline">
                เข้าสู่ระบบ
              </span>
            </Link>
            <RxDividerVertical size={20} />
            <Link href="/register" passHref>
              <span className="cursor-pointer hover:underline">
                สมัครสมาชิก
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <div className="w-8 h-8 rounded-full overflow-hidden inline-block mr-2">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={40}
                height={40}
                alt="Profile"
                style={{
                  objectFit: "cover", // Ensures the image covers the circle
                  objectPosition: "center -7px",
                  background: "red",
                }}
              />
            </div>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Kanmanut Iampinit
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
