
import LayoutComponent from '@/components/layout/LayoutComponent'
import PortalScreen from '@/features/portal/screen'
import React from 'react'

const index = () => {
  return (
    <LayoutComponent showFooter={true}>
      <PortalScreen/>
    </LayoutComponent>
  )
}

export default index