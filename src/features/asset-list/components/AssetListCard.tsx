import { Button, Card, Tabs } from "antd";
import React, { useCallback, useState } from "react";
import { FaRegFile } from "react-icons/fa6";
import { LuMap } from "react-icons/lu";
import ListLandDetail from "./shared/ListLandDetail";
import ListBuildings from "./shared/ListBuildings";
import ListSigns from "./shared/ListSigns";
import { AssetListType } from "../types/types";
import ListCondoDetail from "./shared/ListCondoDetail";
import { isEmpty } from "lodash";
import { Emblema_One } from "next/font/google";

type Props = {
  data: AssetListType;
};

const AssetListCard = (props: Props) => {
  const { data } = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpandedClick = useCallback(
    (expanded: boolean) => {
      setExpanded(expanded);
    },
    [setExpanded],
  );

  const existsTab = () => {
    const tabs = [];

    if (!isEmpty(data?.land_data) && data?.asset_type === "land") {
      tabs.push({
        label: `รายละเอียดที่ดิน ( 1 )`,
        key: "landDetails",
        children: (
          <ListLandDetail
            expanded={expanded}
            onExpandedClick={handleExpandedClick}
            data={data?.land_data}
          />
        ),
      });
    }

    if (!isEmpty(data?.condo_data) && data?.asset_type === "condo") {
      tabs.push({
        label: `ห้องชุด ( 1 )`,
        key: "condos",
        children: (
          <ListCondoDetail
            expanded={expanded}
            onExpandedClick={handleExpandedClick}
            data={data?.condo_data}
          />
        ),
      });
    }

    if (!isEmpty(data?.buildings)) {
      tabs.push({
        label: `สิ่งปลูกสร้าง ( ${data.buildings.length} )`,
        key: "buildings",
        children: (
          <ListBuildings
            expanded={expanded}
            onExpandedClick={handleExpandedClick}
            data={data?.buildings}
          />
        ),
      });
    }
    //
    // if (data?.signboards?.length > 0) {
    if (!isEmpty(data?.signboards)) {
      tabs.push({
        label: `ป้าย ( ${data.signboards.length} )`,
        key: "signs",
        children: (
          <ListSigns
            expanded={expanded}
            onExpandedClick={handleExpandedClick}
            data={data?.signboards}
          />
        ),
      });
    }

    return tabs;
  };

  return (
    <Card
      classNames={{
        header: "header-primary-3",
        body: "min-h-[300px]",
      }}
      title={
        <div className="text-white inline-flex gap-2">
          <h4 className="font-bold">เขต / เทศบาล : </h4>
          <p className="font-normal">เทศบาลนครยะลา</p>
        </div>
      }
      extra={
        <div className="inline-flex gap-2">
          <Button type="primary" className="btn-blue" icon={<FaRegFile />}>
            ดูรายละเอียด
          </Button>
          <Button type="primary" icon={<LuMap />}>
            ดูบนแผนที่
          </Button>
        </div>
      }
    >
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Tabs
        defaultActiveKey="1"
        items={[...existsTab()]}
        // items={[
        //   {
        //     label: `รายละเอียดที่ดิน ( 1 )`,
        //     key: "landDetails",
        //     children: (
        //       <ListLandDetail
        //         expanded={expanded}
        //         onExpandedClick={handleExpandedClick}
        //       />
        //     ),
        //   },
        //   {
        //     label: `สิ่งปลูกสร้าง ( 4 )`,
        //     key: "buildings",
        //     children: (
        //       <ListBuildings
        //         expanded={expanded}
        //         onExpandedClick={handleExpandedClick}
        //       />
        //     ),
        //   },
        //   {
        //     label: `ป้าย ( 2 )`,
        //     key: "signs",
        //     children: (
        //       <ListSigns
        //         expanded={expanded}
        //         onExpandedClick={handleExpandedClick}
        //       />
        //     ),
        //   },
        //   {
        //     label: `ห้องชุด ( 2 )`,
        //     key: "apartments",
        //     children: (
        //       <ListApartments
        //         expanded={expanded}
        //         onExpandedClick={handleExpandedClick}
        //       />
        //     ),
        //   },
        // ]}
      />
    </Card>
  );
};

export default AssetListCard;
