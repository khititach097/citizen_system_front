import Container from "@/components/container/Container";
import Pagination from "@/components/table/v2/Pagination";
import React from "react";
import AssetListFormSearch from "../components/AssetListFormSearch";
import { EmptyStatus } from "@/components/emptyStatus";
import AssetListCard from "../components/AssetListCard";
import useGetAsset from "./api/useAssets";
import { isEmpty } from "lodash";

type Props = {};

const AssetListScreen = (props: Props) => {
  const { useGetAssetsByUserId } = useGetAsset();

  const { data: { data: assetsList = [], available_muni_code } = {} } =
    useGetAssetsByUserId("1c71dafb-b25c-4b52-a6f9-c393c7443adf") || {};

  // if (isLoading) return <>loading...</>;
  // if (error) return <EmptyStatus status="muni_incorrect" />;

  return (
    <div className="">
      <Container classnameDiv="" backButtonText="กลับสู่ระบบ">
        {/* <pre> */}
        {/*   {JSON.stringify( */}
        {/*     { */}
        {/*       assetsList: assetsList ? assetsList[0] : null, */}
        {/*       available_muni_code, */}
        {/*     }, */}
        {/*     null, */}
        {/*     2, */}
        {/*   )} */}
        {/* </pre> */}
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
          {assetsList &&
            assetsList?.map((asset: any, index: number) => (
              <AssetListCard key={index} data={asset} />
            ))}
          {isEmpty(assetsList) && (
            <EmptyStatus
              subTitle={
                <>
                  <p>ยังไม่พบทรัพย์สินของคุณ</p>
                  <p>ในเขต/เทศบาล ในระบบ</p>
                </>
              }
              title="ไม่พบทรัพย์สินของคุณ"
              status="empty"
            />
          )}
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
