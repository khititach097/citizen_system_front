import { Divider } from "antd";
import { useState } from "react";

type Props = {
  data?: any;
  expanded: boolean;
  onExpandedClick: (expanded: boolean) => void;
};

const ListLandDetails = (props: Props) => {
  const { data, expanded, onExpandedClick } = props;

  let mockData = [
    {
      id: 1,
      title: "ที่ดินแปลงที่ 1",
      area: "3 - 5 - 28",
      documentType: "โฉนด",
      estimatedPrice: "25,000 บาท/ตร.ว.",
      location: "ตำบล หน้าถ้ำ อำเภอเมืองยะลา ยะลา 95000",
      usage: [
        "เกษตรกรรม ( 1 ไร่ 3 งาน 10.0 ตร.ว. )",
        "ที่อยู่อาศัย ( 1 ไร่ 3 งาน 10.0 ตร.ว. )",
      ],
    },
    {
      id: 2,
      title: "ที่ดินแปลงที่ 2",
      area: "2 - 0 - 0",
      documentType: "โฉนด",
      estimatedPrice: "20,000 บาท/ตร.ว.",
      location: "ตำบล หน้าถ้ำ อำเภอเมืองยะลา ยะลา 95000",
      usage: ["เกษตรกรรม ( 1 ไร่ 0 งาน 0.0 ตร.ว. )"],
    },
    {
      id: 3,
      title: "ที่ดินแปลงที่ 3",
      area: "1 - 2 - 15",
      documentType: "โฉนด",
      estimatedPrice: "15,000 บาท/ตร.ว.",
      location: "ตำบล หน้าถ้ำ อำเภอเมืองยะลา ยะลา 95000",
      usage: ["ที่อยู่อาศัย ( 1 ไร่ 2 งาน 15.0 ตร.ว. )"],
    },
  ];

  return (
    <div className="flex flex-col gap-6 pt-1">
      <div
        className={`flex flex-col gap-6 overflow-hidden ${expanded ? "max-h-screen" : "max-h-[14rem]"}`}
      >
        {mockData?.map((item) => (
          <div key={item.id} className="flex gap-6 min-h-[14rem]">
            <div className="w-1/6">
              <div className="aspect-square bg-slate-300 rounded-2xl"></div>
            </div>
            <div className="w-2/6">
              <h4 className="font-bold text-text-green-1">ข้อมูลแปลงที่ดิน</h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <p className="line-clamp-1">โฉนดที่ดิน : 48104</p>
                <p className="line-clamp-1">ประเภทเอกสาร : โฉนด</p>
                <p className="line-clamp-1">เนื้อที่ : 3 - 5 - 28</p>
                <p className="line-clamp-2">ราคาประเมิน : 25,000 บาท/ตร.ว.</p>
                <p className="line-clamp-2">
                  ที่ตั้ง : ตำบล หน้าถ้ำ อำเภอเมืองยะลา ยะลา 95000
                </p>
              </div>
            </div>
            <div className="w-3/6">
              <h4 className="font-bold text-text-green-1">
                การใช้ประโยชน์ที่ดิน
              </h4>
              <div className="pt-4 flex flex-col gap-2 text-base">
                <ul className="list-disc pl-6 flex flex-col gap-2 text-base">
                  <li>เกษตรกรรม ( 1 ไร่ 3 งาน 10.0 ตร.ว. )</li>
                  <li>ที่อยู่อาศัย ( 1 ไร่ 3 งาน 10.0 ตร.ว. )</li>
                </ul>
              </div>
            </div>
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

export default ListLandDetails;
