import { Divider } from "antd";
import { useState } from "react";

type Props = {
  data?: any;
  expanded: boolean;
  onExpandedClick: (expanded: boolean) => void;
};

const ListSigns = (props: Props) => {
  const { data, expanded, onExpandedClick } = props;

  const mockData = [
    { id: 1, name: "Room 101", size: "200 (ตร.ม)", floor: 6, code: "123/1" },
    { id: 2, name: "Room 102", size: "250 (ตร.ม)", floor: 6, code: "123/2" },
    { id: 3, name: "Room 201", size: "300 (ตร.ม)", floor: 7, code: "124/1" },
    { id: 4, name: "Room 202", size: "350 (ตร.ม)", floor: 7, code: "124/2" },
  ];

  return (
    <div className="flex flex-col gap-6 pt-1">
      <div
        className={`flex flex-col gap-6 overflow-hidden ${expanded ? "max-h-screen" : "max-h-[14rem]"}`}
      >
        {mockData?.map((item) => (
          <div
            key={item.id}
            className={`flex gap-6 ${expanded ? "min-h-0" : "min-h-[14rem]"}`}
          >
            <div className="w-1/6">
              <div className="aspect-square bg-slate-300 rounded-2xl"></div>
            </div>
            <div className="w-2/6">
              <h4 className="font-bold text-text-green-1">ข้อมูลห้องชุด</h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <p className="line-clamp-1">{`เลขรหัสประจำบ้าน : 123/1`}</p>
                <p className="line-clamp-1">{`เลขที่ห้องชุด : 123/1`}</p>
                <p className="line-clamp-1">{`ชั้นที่ : 6`}</p>
                <p className="line-clamp-1">{`ขนาด : 200 (ตร.ม)`}</p>
              </div>
            </div>

            <div className="w-3/6"></div>
          </div>
        ))}
      </div>

      <div>
        <Divider className="my-4" />
        <div
          className="text-center underline cursor-pointer font-medium text-base hover:text-text-green-1 transition-colors"
          onClick={() => onExpandedClick(!expanded)}
        >
          {expanded ? "ย่อลง" : "แสดงเพิ่มเติม"}
        </div>
      </div>
    </div>
  );
};

export default ListSigns;
