import LayoutComponent from "@/components/layout/LayoutComponent";
import AssetListScreen from "@/features/asset-list/screen";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <LayoutComponent>
      <AssetListScreen />
    </LayoutComponent>
  );
};

export default index;
