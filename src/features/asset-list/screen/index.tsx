import Container from "@/components/container/Container";
import Pagination from "@/components/table/v2/Pagination";
import React from "react";

type Props = {};

const AssetListScreen = (props: Props) => {
  return (
    <div className="">
      <Container classnameDiv="" backButtonText="กลับสู่ระบบ">
        <div>weq</div>
      </Container>
      <div className="container mx-auto">
        <Pagination showPagination size="default" />
      </div>
    </div>
  );
};

export default AssetListScreen;
