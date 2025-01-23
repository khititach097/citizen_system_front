import { Divider } from "antd";
import { useState } from "react";

type Props = {
  data?: any;
  expanded: boolean;
  onExpandedClick: (expanded: boolean) => void;
};

const ListBuildings = (props: Props) => {
  const { data, expanded, onExpandedClick } = props;

  const mockData = [
    {
      id: 1,
      type: "อาคารปูน",
      size: "80x80",
      area: "19200 ตรม.",
      age: "12 ปี",
      usage: [
        { description: "อยู่อาศัย", area: "10.0 ตร.ว." },
        { description: "อื่นๆ", area: "1 ไร่ 3 งาน 10.0 ตร.ว." },
      ],
    },
    {
      id: 2,
      type: "อาคารไม้",
      size: "60x60",
      area: "3600 ตรม.",
      age: "5 ปี",
      usage: [
        { description: "เชิงพาณิชย์", area: "20.0 ตร.ว." },
        { description: "อื่นๆ", area: "2 ไร่ 1 งาน 5.0 ตร.ว." },
      ],
    },
    {
      id: 3,
      type: "อาคารคอนกรีต",
      size: "100x100",
      area: "10000 ตรม.",
      age: "8 ปี",
      usage: [
        { description: "อุตสาหกรรม", area: "50.0 ตร.ว." },
        { description: "อื่นๆ", area: "3 ไร่ 2 งาน 15.0 ตร.ว." },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 pt-1">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div
        className={`flex flex-col gap-6 overflow-hidden ${expanded ? "max-h-screen" : "max-h-[14rem]"}`}
      >
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex gap-6 ${expanded ? "min-h-0" : "min-h-[14rem]"}`}
          >
            <div className="w-1/6">
              <div className="aspect-square bg-slate-300 rounded-2xl"></div>
            </div>
            <div className="w-2/6">
              <h4 className="font-bold text-text-green-1">
                ข้อมูลสิ่งปลูกสร้าง
              </h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <p className="line-camp-1">ประเภทสิ่งปลูกสร้าง : อาคารปูน</p>
                <p className="line-camp-1">
                  {`ขนาด : ${item?.building_width_meter} x ${item?.building_length_meter} = ${Number(item?.building_width_meter * item?.building_length_meter).toFixed(2)} ตรม.`}
                </p>
                <p className="line-camp-1">
                  {`อายุสิ่งปลูกสร้าง : ${item?.building_year_total} ปี`}
                </p>
              </div>
            </div>
            <div className="w-3/6">
              <h4 className="font-bold text-text-green-1">
                การใช้ประโยชน์nี่ดิน
              </h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <ul className="list-disc pl-6 flex flex-col gap-2 text-base">
                  <li>อยู่อาศัย ( 10.0 ตร.ว. )</li>
                  <li>อื่นๆ ( 1 ไร่ 3 งาน 10.0 ตร.ว. )</li>
                </ul>
              </div>
            </div>
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

export default ListBuildings;
