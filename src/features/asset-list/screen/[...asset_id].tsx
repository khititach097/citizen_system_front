import { useRouter } from 'next/router';
import React, {  useState } from 'react';
import { useGetAssetByAssetId } from './api/useAssets';
import MainLandAssetScreen from '../components/mainLandAssetScreen';
import MainCondoAssetScreen from '../components/mainCondoAssetScreen';


const AssetDetailById = () => {
  const router = useRouter();
  const asset_id = router.query?.asset_id;

  const {
    data: assetInfo,
    isLoading,
    error,
  } = useGetAssetByAssetId(typeof asset_id === 'string' ? asset_id : '');

  return (<>
  {assetInfo?.asset_type === "land" && <MainLandAssetScreen landInfo={assetInfo}/>}
  {assetInfo?.asset_type === "condo" && <MainCondoAssetScreen/>}
  </>
  );
};

export default AssetDetailById;
