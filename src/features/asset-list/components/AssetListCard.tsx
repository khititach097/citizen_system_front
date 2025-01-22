import { Button, Card, Tabs } from "antd";
import React, { useCallback, useState } from "react";
import { FaRegFile } from "react-icons/fa6";
import { LuMap } from "react-icons/lu";
import ListLandDetails from "./shared/ListLandDetails";
import ListBuildings from "./shared/ListBuildings";
import ListSigns from "./shared/ListSigns";
import ListApartments from "./shared/ListApartments";

type Props = {
  data?: any;
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
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `รายละเอียดที่ดิน ( 1 )`,
            key: "landDetails",
            children: (
              <ListLandDetails
                expanded={expanded}
                onExpandedClick={handleExpandedClick}
              />
            ),
          },
          {
            label: `สิ่งปลูกสร้าง ( 4 )`,
            key: "buildings",
            children: (
              <ListBuildings
                expanded={expanded}
                onExpandedClick={handleExpandedClick}
              />
            ),
          },
          {
            label: `ป้าย ( 2 )`,
            key: "signs",
            children: (
              <ListSigns
                expanded={expanded}
                onExpandedClick={handleExpandedClick}
              />
            ),
          },
          {
            label: `ห้องชุด ( 2 )`,
            key: "apartments",
            children: (
              <ListApartments
                expanded={expanded}
                onExpandedClick={handleExpandedClick}
              />
            ),
          },
        ]}
      />
    </Card>
  );
};

export default AssetListCard;
