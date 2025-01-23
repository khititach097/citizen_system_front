import { useRouter } from 'next/router';
import MainLandAssetScreen from '../components/mainLandAssetScreen';
import MainCondoAssetScreen from '../components/mainCondoAssetScreen';
import useGetAsset from './api/useAssets';


const AssetDetailById = () => {
  const router = useRouter();
  const asset_id = router.query?.asset_id;

  const { useGetAssetByAssetId } = useGetAsset()

  const {
    data: assetInfo,
    isLoading: isLoadingAsset,
    error,
  } = useGetAssetByAssetId(typeof asset_id === 'string' ? asset_id : '');

  return (<>
  {assetInfo?.asset_type === "land" && <MainLandAssetScreen landInfo={assetInfo}/>}
  {assetInfo?.asset_type === "condo" && <MainCondoAssetScreen/>}
  </>
  );
};

export default AssetDetailById;
