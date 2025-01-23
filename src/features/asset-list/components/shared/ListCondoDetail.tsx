import { Divider } from "antd";
import { AssetListCondoType } from "../../types/types";

type Props = {
  data: AssetListCondoType;
  expanded: boolean;
  onExpandedClick: (expanded: boolean) => void;
};

const ListCondoDetail = (props: Props) => {
  const { data, expanded, onExpandedClick } = props;

  return (
    <div className="flex flex-col gap-6 pt-1">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div
        className={`flex flex-col gap-6 overflow-hidden ${expanded ? "max-h-screen" : "max-h-[14rem]"}`}
      >
        <div className={`flex gap-6 ${expanded ? "min-h-0" : "min-h-[14rem]"}`}>
          <div className="w-1/6">
            <div className="aspect-square bg-slate-300 rounded-2xl"></div>
          </div>
          <div className="w-3/6">
            <h4 className="font-bold text-text-green-1">ข้อมูลคอนโด</h4>
            <div className="pt-4 flex flex-col gap-2 text-base">
              <p className="line-clamp-1">{`ชื่อคอนโด : ${data?.condo_name ?? ""}`}</p>
              <p className="line-clamp-1">{`ประเภทเอกสาร : ${data?.doc_type_name ?? ""}`}</p>
              <p className="line-clamp-2">
                {`ที่ตั้ง : ${data?.road ? `ถนน ${data?.road}` : ""} ${data?.subdistrict_name ?? ""} อำเภอ${data?.district_name ?? ""} ${data?.province_name ?? ""} ${data?.postcodemain ?? ""}`}
              </p>
              {/* <p className="line-clamp-1">{`เลขที่ห้องชุด : 123/1`}</p> */}
              {/* <p className="line-clamp-1">{`ชั้นที่ : 6`}</p> */}
              {/* <p className="line-clamp-1">{`ขนาด : 200 (ตร.ม)`}</p> */}
            </div>
          </div>
          <div className="w-2/6"></div>
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

export default ListCondoDetail;
