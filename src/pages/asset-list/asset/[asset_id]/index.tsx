import LayoutComponent from '@/components/layout/LayoutComponent';
import AssetDetailById from '@/features/asset-list/screen/[...asset_id]';
import React from 'react'

const AssetDetail = () => {
  return (
    <LayoutComponent>
      <AssetDetailById/>
    </LayoutComponent>
  )
}

export default AssetDetail