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
    { id: 1, content: "Mock data item 1" },
    { id: 2, content: "Mock data item 2" },
    { id: 3, content: "Mock data item 3" },
    { id: 4, content: "Mock data item 4" },
    { id: 5, content: "Mock data item 5" },
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
              <h4 className="font-bold text-text-green-1">ข้อมูลป้าย</h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <p className="line-clamp-1">{`ข้อความบนป้าย : ป้อนยา`}</p>
                <p className="line-clamp-1">{`ขนาดป้าย: 200 x 250 ซม.`}</p>
                <p className="line-clamp-1">{`จำนวน: 1 ด้าน`}</p>
                <p className="line-clamp-1">{`ประเภท: 1(ก.)`}</p>
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
