import Container from "@/components/container/Container";
import Pagination from "@/components/table/v2/Pagination";
import React from "react";
import AssetListFormSearch from "../components/AssetListFormSearch";
import { EmptyStatus } from "@/components/emptyStatus";
import AssetListCard from "../components/AssetListCard";

type Props = {};

const AssetListScreen = (props: Props) => {
  return (
    <div className="">
      <Container classnameDiv="" backButtonText="กลับสู่ระบบ">
        <div className="-header">
          <div className="text-center">
            <h1 className="text-text-green-1 font-bold text-2xl">
              รายการทรัพย์สิน
            </h1>
            <p className="text-base">
              เลือกทรัพย์สินของท่านที่ต้องการดูรายละเอียด
            </p>
          </div>
          <div className="pb-9 pt-11">
            <AssetListFormSearch />
          </div>
        </div>
        <div className="px-32 flex flex-col gap-9">
          <AssetListCard />
        </div>
        {/* <EmptyStatus status="muni_incorrect" /> */}
      </Container>
      <div className="container mx-auto px-12 pb-16">
        <Pagination total={100} page={3} showPagination size="default" />
      </div>
    </div>
  );
};

export default AssetListScreen;
