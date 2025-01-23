import { Divider } from "antd";
import { useState } from "react";

type Props = {
  data?: any;
  expanded: boolean;
  onExpandedClick: (expanded: boolean) => void;
};

const ListSigns = (props: Props) => {
  const { data, expanded, onExpandedClick } = props;

  return (
    <div className="flex flex-col gap-6 pt-1">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div
        className={`flex flex-col gap-6 overflow-hidden ${expanded ? "max-h-screen" : "max-h-[14rem]"}`}
      >
        {data?.map((item: any) => (
          <div
            key={item.id}
            className={`flex gap-6 ${expanded ? "min-h-0" : "min-h-[14rem]"}`}
          >
            <div className="w-1/6">
              <div className="aspect-square bg-slate-300 rounded-2xl"></div>
            </div>
            <div className="w-4/6">
              <h4 className="font-bold text-text-green-1">ข้อมูลป้าย</h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <p className="line-clamp-1">{`ข้อความบนป้าย : ${item?.property_signboard_display_name}`}</p>
                <p className="line-clamp-1">{`ขนาดป้าย: ${item?.signboard_width} x ${item?.signboard_height} ซม.`}</p>
                <p className="line-clamp-1">{`จำนวน: ${item?.signboard_side} ด้าน`}</p>
                <p className="line-clamp-1">{`ประเภท: ${item?.property_signboard_display_desc}`}</p>
              </div>
            </div>

            <div className="w-1/6"></div>
          </div>
        ))}
      </div>

      {data?.length > 1 && (
        <div>
          <Divider className="my-4" />
          <div
            className="text-center underline cursor-pointer font-medium text-base hover:text-text-green-1 transition-colors"
            onClick={() => onExpandedClick(!expanded)}
          >
            {expanded ? "ย่อลง" : "แสดงเพิ่มเติม"}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListSigns;
