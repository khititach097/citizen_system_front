import LayoutComponent from '@/components/layout/LayoutComponent';
import AssetMapDetailById from '@/features/asset-list/screen/[...asset_map_id]';
import React from 'react'

const AssetMapDetail = () => {
  return (
    <LayoutComponent>
      <AssetMapDetailById/>
    </LayoutComponent>
  )
}

export default AssetMapDetail