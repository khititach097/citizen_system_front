import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Container from '@/components/container/Container';
import { Typography } from 'antd/lib';
import { LuCalendar } from "react-icons/lu";
import { Tabs, TabsProps } from 'antd';
import BuildingsTabScreen from '../components/buildingsTabScreen';
import dayjs from "dayjs";
import "dayjs/locale/th";
import LandTabScreen from '../components/landTabScreen';
import SignboardsTabScreen from '../components/signboardsTabScreen';
import { AssetDataType } from '../types/types';

const { Text } = Typography

interface Props {
  landInfo: AssetDataType;
}

const MainLandAssetScreen: React.FC<Props> = (props) => {
  const { landInfo } = props
  const router = useRouter();
  const [selectTab, setSelectTab] = useState<string>("1")

    const handleClickBackBtn = useCallback(()=>{
      router.push("/asset-list")
    },[router])

    const items: TabsProps['items'] = [
      {
        key: '1',
        label: <Text className='font-semibold text-text-gray-1'>แบบสำรวจข้อมูลเกี่ยวกับที่ดิน</Text>,
      },
      {
        key: '2',
        label: <Text className='font-semibold text-text-gray-1'>แบบสำรวจสิ่งปลูกสร้าง</Text>,
      },
      {
        key: '3',
        label: <Text className='font-semibold text-text-gray-1'>แบบสำรวจข้อมูลเกี่ยวกับป้าย</Text>,
      },
    ];

    const genDate = useCallback(() => {
      const usingDate =
        landInfo?.latest_survey_request?.updated_at ??
        landInfo?.latest_survey_request?.created_at ??
        " ";
    
      if (usingDate) {
        // Convert to Thai date
        const thaiDate = dayjs(usingDate)
          .locale("th")
          .add(543, "year") // Adjust to Thai Buddhist calendar year
          .format("DD MMMM YYYY"); // Format the date
    
        return thaiDate; // Return formatted Thai date
      }
    
      return " "; // Return empty string if no date
    }, [landInfo]);

  return (
    <Container onClickBackBtn={handleClickBackBtn}>
      <div className='flex flex-col items-center'>
        <Text className='text-text-green-1 font-bold text-lg mb-2'>รายการทรัพย์สิน</Text>
        <Text className='mb-7'>เลือกทรัพย์สินของท่านที่ต้องการดูรายละเอียด</Text>
        <Text className='flex items-center gap-2 mb-7'> <LuCalendar /> ข้อมูลล่าสุด ณ วันที่ {genDate()}</Text>
        <Tabs defaultActiveKey="1" items={items} onChange={(key)=>setSelectTab(key)} />
        {selectTab === "1" && landInfo && <LandTabScreen landInfo={landInfo}/>}
        {selectTab === "2" && landInfo  && <BuildingsTabScreen landInfo={landInfo}/>}
        {selectTab === "3" && landInfo  && <SignboardsTabScreen landInfo={landInfo}/>}
      </div>
      {/* {landInfo && <pre>{JSON.stringify(landInfo, null, 2)}</pre>} */}
    </Container>
  );
};

export default MainLandAssetScreen;
