import React from 'react'
import { Layout as AndLayout, Typography } from 'antd';
import Image from 'next/image'

const { Header } = AndLayout;
const { Text } = Typography;

const HeaderComponent = () => {
  
  return (
    <Header className="bg-primary-2 text-white text-center px-20 leading-[64px]">
      <div className="flex w-full h-full justify-between items-center">
        <div className="flex items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden inline-block mr-4">
          <Image
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={45} 
            height={45}
            alt="Profile"
            style={{
              objectFit: 'cover', // Ensures the image covers the circle
              objectPosition: 'center -7px',
              background: "red",
            }}
          />
        </div>
        <div className="flex flex-col text-start font-semibold">
          <Text className="leading-tight text-white">ระบบบริการ</Text>
          <Text className="leading-tight text-white mt-0">ตรวจสอบข้อมูลภาษี</Text>
        </div>

        </div>
        <div className="">aaa</div>
      </div>
    </Header>
  )
}

export default HeaderComponent