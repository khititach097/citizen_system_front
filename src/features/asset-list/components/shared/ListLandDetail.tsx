import { Divider } from "antd";
import { useState } from "react";
import { AssetListLandType } from "../../types/types";

type Props = {
  data: AssetListLandType;
  expanded: boolean;
  onExpandedClick: (expanded: boolean) => void;
};

const ListLandDetail = (props: Props) => {
  const { data, expanded, onExpandedClick } = props;

  return (
    <div className="flex flex-col gap-6 pt-1">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div
        className={`flex flex-col gap-6 overflow-hidden ${expanded ? "max-h-screen" : "max-h-[14rem]"}`}
      >
        <div className="flex gap-6 min-h-[14rem]">
          <div className="w-1/6">
            <div className="aspect-square bg-slate-300 rounded-2xl"></div>
          </div>
          <div className="w-2/6">
            <h4 className="font-bold text-text-green-1">ข้อมูลแปลงที่ดิน</h4>
            <div className="pt-4 flex flex-col gap-2 text-base">
              <p className="line-clamp-1">{`โฉนดที่ดิน : ${data?.deed_no ?? ""}`}</p>
              <p className="line-clamp-1">{`ประเภทเอกสาร : ${data?.doc_type_name ?? ""}`}</p>
              <p className="line-clamp-1">{`เนื้อที่ : ${data?.land_space_rai ?? 0} - ${data?.land_space_ngan ?? 0} - ${data?.land_space_wa ?? 0}`}</p>
              <p className="line-clamp-2">{`ราคาประเมิน : ${Number((data?.estimated_price_by_treasury as number) ?? 0).toLocaleString()} บาท/ตร.ว.`}</p>
              <p className="line-clamp-2">
                {`ที่ตั้ง : ${data?.subdistrict_name ?? ""} อำเภอ${data?.district_name ?? ""} ${data?.province_name ?? ""} ${data?.postcodemain ?? ""}`}
              </p>
            </div>
          </div>
          <div className="w-3/6">
            <h4 className="font-bold text-text-green-1">
              การใช้ประโยชน์ที่ดิน
            </h4>
            <div className="pt-4 flex flex-col gap-2 text-base">
              <ul className="list-disc pl-4 flex flex-col gap-2 text-base">
                {data?.land_used?.map((landUse, index: number) => (
                  <li
                    key={index}
                  >{`${landUse.using_type_detail} (${landUse.total_space_rai ?? 0} ไร่ ${landUse.total_space_ngan ?? 0} งาน ${landUse.total_space_square_wa.toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2,
                      minimumIntegerDigits: 2,
                    },
                  )} ตร.ว.)`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div> */}
      {/*   <Divider className="my-4" /> */}
      {/*   <div */}
      {/*     className="text-center underline cursor-pointer font-medium text-base hover:text-text-green-1 transition-colors" */}
      {/*     onClick={() => onExpandedClick(!expanded)} */}
      {/*   > */}
      {/*     {expanded ? "ย่อลง" : "แสดงเพิ่มเติม"} */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};

export default ListLandDetail;
