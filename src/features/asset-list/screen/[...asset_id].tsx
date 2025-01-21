import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useGetAssetByAssetId } from './api/useAssets';
import Container from '@/components/container/Container';
import { Typography } from 'antd/lib';
import { LuCalendar } from "react-icons/lu";
import { Tabs, TabsProps } from 'antd';
import LandTabScreen from './landTabScreen';
import BuildingsTabScreen from './buildingsTabScreen';
import SignboardsTabScreen from './signboardsTabScreen';

const { Text } = Typography

const AssetDetailById = () => {
  const router = useRouter();
  const asset_id = router.query?.asset_id;
  const [selectTab, setSelectTab] = useState<string>("1")

  const {
    data: asset,
    isLoading,
    error,
  } = useGetAssetByAssetId(typeof asset_id === 'string' ? asset_id : '');

  // useEffect(() => {
  //   if (error) {
  //     router.push('/asset-list');
  //   }
  // }, [error, router]);

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

  return (
    <Container onClickBackBtn={handleClickBackBtn}>
      {/* <h1>Asset Detail</h1>
      {isLoading && <p>Loading...</p>} */}
      {asset && <pre>{JSON.stringify(asset, null, 2)}</pre>}
      <div className='flex flex-col items-center'>
        <Text className='text-text-green-1 font-bold text-lg mb-2'>รายการทรัพย์สิน</Text>
        <Text className='mb-7'>เลือกทรัพย์สินของท่านที่ต้องการดูรายละเอียด</Text>
        <Text className='flex items-center gap-2 mb-7'> <LuCalendar /> ข้อมูลล่าสุด ณ วันที่ 07 มีนาคม 2566</Text>
        <Tabs defaultActiveKey="1" items={items} onChange={(key)=>setSelectTab(key)} />
        {selectTab === "1" && <LandTabScreen/>}
        {selectTab === "2" && <BuildingsTabScreen/>}
        {selectTab === "3" && <SignboardsTabScreen/>}
      </div>
    </Container>
  );
};

export default AssetDetailById;
