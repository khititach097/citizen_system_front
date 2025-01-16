import LayoutComponent from "@/components/layout/LayoutComponent";
import ManageRequestScreen from "@/features/manage-request/screen";
import React from "react";

const index = () => {
  return (
    <LayoutComponent showFooter={false}>
      <ManageRequestScreen />
    </LayoutComponent>
  );
};

export default index;
