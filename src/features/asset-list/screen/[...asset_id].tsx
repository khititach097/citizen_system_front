import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useGetAssetByAssetId } from './api/useAssets';
import Container from '@/components/container/Container';

const AssetDetailById = () => {
  const router = useRouter();
  const asset_id = router.query?.asset_id;

  const {
    data: asset,
    isLoading,
    error,
  } = useGetAssetByAssetId(typeof asset_id === 'string' ? asset_id : '');

  useEffect(() => {
    if (error) {
      router.push('/asset-list');
    }
  }, [error, router]);

    const handleClickBackBtn = useCallback(()=>{
      router.push("/asset-list")
    },[router])

  return (
    <Container onClickBackBtn={handleClickBackBtn}>
      {/* <h1>Asset Detail</h1>
      {isLoading && <p>Loading...</p>}
      {asset && <pre>{JSON.stringify(asset, null, 2)}</pre>} */}
      
    </Container>
  );
};

export default AssetDetailById;
