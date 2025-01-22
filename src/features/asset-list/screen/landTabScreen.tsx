import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AssetDataType, LandOwnerType } from "../types/types";
import CardContainer from "@/components/container/CardContainer";
import MapIcon from "@/components/icons/MapIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import { Col, Image, Row, Typography } from "antd";
import { Field } from "@/components/field";
import { useGetAssetImages } from "./api/useAssets";
import Empty from "@/components/empty";
import { isEmpty } from "lodash";

interface Props {
  landInfo: AssetDataType;
}

const { Text } = Typography;

const LandTabScreen: React.FC<Props> = (props) => {
  const { landInfo } = props;
  const [landImages, setLandImages] = useState<string[]>([]);
  const processedImages = useRef(new Set<string>()); // Store the processed image URLs

  const imgIds = useMemo(
    () =>
      Array.from(landInfo.land_info.asset_images).map((imgId) => imgId.img_id),
    [landInfo]
  );

  const imageQueries = useGetAssetImages(imgIds);

  const loading = imageQueries.some((query) => query.isLoading);
  const error = imageQueries.some((query) => query.isError);

  useEffect(() => {
    // Create URLs and add to landImages
    // console.log("imageQueries ***>>>", imageQueries);
    // console.log("landImages ***>>>", landImages);

    imageQueries.forEach((query) => {
      if (query.data && !processedImages.current.has(query.data)) {
        processedImages.current.add(query.data); // Mark this URL as processed
        setLandImages((prev) => [...prev, query.data]);
      }
    });

    // Cleanup function: revoke unused URLs
    return () => {
      landImages.forEach((url) => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imageQueries, landImages]);

  const getTextOwnerLineLabel = useCallback(
    (ownerData: LandOwnerType): string => {
      if (!ownerData?.owner_line_no) {
        return "";
      }
      return ownerData?.owner_line_no === "1"
        ? `เจ้าของหลัก ( ผู้รับผิดชอบภาษี )`
        : `เจ้าของร่วม`;
    },
    []
  );

  const ownerAddress = useCallback((owner: LandOwnerType)=>{
    return `บ้านเลขที่ ${owner?.address_house_number || ""} หมู่ที่/ชุมชน ${owner?.address_zone || ""} ตำบล/แขวง ${owner?.sub_district_name || ""} อำเภอ/เขต ${owner?.district_name || ""} จังหวัด ${owner?.province_name || ""} รหัสไปรษณีย์ ${owner?.address_postcode}`
  },[])

  return ( 
    <>
      <CardContainer
        rootClassName={`w-full bg-white pt-9 px-9 pb-2 rounded-2xl`}
        title="ข้อมูลแปลงที่ดิน"
        icon={<MapIcon />}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="ประเภทเอกสาร"
              value={landInfo.land_info.land_info_detail.doc_type_name}
              size="large"
              disabled
            />
          </Col>

          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="เลขที่เอกสาร"
              value={landInfo.land_info.land_info_detail.doc_type_name}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <Text className="text-base">ระวาง</Text>
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id="utm_1"
                  name="utm_1"
                  className="w-full"
                  value={landInfo.land_info.land_info_detail.utm_map1}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id="utm_2"
                  name="utm_2"
                  value={landInfo.land_info.land_info_detail.utm_map2}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id="utm_3"
                  name="utm_3"
                  value={landInfo.land_info.land_info_detail.utm_map3}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id="utm_4"
                  name="utm_4"
                  value={landInfo.land_info.land_info_detail.utm_map4}
                  size="large"
                  disabled
                />
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="เลขที่ดิน"
              value={landInfo.land_info.land_info_detail.land_no}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="หน้าสำรวจ"
              value={landInfo.land_info.land_info_detail.deed_no}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="หมู่ที่"
              value={landInfo.land_info.land_info_detail.land_zone}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="ถนน"
              value={landInfo.land_info.land_info_detail.road}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="อำเภอ/เขต"
              value={landInfo.land_info.land_info_detail.district_name_t}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="ตำบล/แขวง"
              value={landInfo.land_info.land_info_detail.subdistrict_name_t}
              size="large"
              disabled
            />
          </Col>
          <Col span={12}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <Text className="text-base">เนื้อที่ดิน</Text>
              </Col>
              <Col span={8}>
                <Field.Number
                  id="land_space_rai"
                  name="land_space_rai"
                  addonAfter="ไร่"
                  size="large"
                  value={
                    landInfo.land_info.land_info_detail.land_space_rai || 0
                  }
                  disabled
                />
              </Col>
              <Col span={8}>
                <Field.Number
                  id="land_space_ngan"
                  name="land_space_ngan"
                  addonAfter="งาน"
                  size="large"
                  value={
                    landInfo.land_info.land_info_detail.land_space_ngan || 0
                  }
                  disabled
                />
              </Col>
              <Col span={8}>
                <Field.Number
                  id="land_space_wa"
                  name="land_space_wa"
                  addonAfter="ตร.ว."
                  size="large"
                  value={
                    Number(
                      landInfo.land_info.land_info_detail.land_space_wa
                    ).toFixed(2) || 0
                  }
                  disabled
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Field.Input
              classnamediv="text-base"
              id=""
              label="ราคาประเมินที่ดิน"
              value={
                landInfo.land_info.land_info_detail.is_estimated_by_treasury
                  ? landInfo.land_info.land_info_detail
                      .estimated_price_by_treasury
                  : landInfo.land_info.land_info_detail.estimated_price
              }
              size="large"
              disabled
            />
          </Col>
        </Row>
      </CardContainer>
      <CardContainer
        rootClassName={`w-full bg-white pt-9 px-9 pb-2 rounded-2xl`}
        title="การใช้ประโยชน์ที่ดิน"
        icon={<MapIcon />}
      >
        {landInfo.land_used_info.map((eachLandUsed, index) => {
          return (
            <Row gutter={[16, 16]} key={index}>
              <Col span={12}>
                <Row gutter={[8, 8]}>
                  <Col span={24}>
                    <Text className="text-base">เนื้อที่ดิน</Text>
                  </Col>
                  <Col span={8}>
                    <Field.Number
                      id="land_space_rai"
                      name="land_space_rai"
                      addonAfter="ไร่"
                      size="large"
                      value={eachLandUsed.total_space_rai || 0}
                      disabled
                    />
                  </Col>
                  <Col span={8}>
                    <Field.Number
                      id="land_space_ngan"
                      name="land_space_ngan"
                      addonAfter="งาน"
                      size="large"
                      value={eachLandUsed.total_space_ngan || 0}
                      disabled
                    />
                  </Col>
                  <Col span={8}>
                    <Field.Number
                      id="land_space_wa"
                      name="land_space_wa"
                      addonAfter="ตร.ว."
                      size="large"
                      value={Number(
                        eachLandUsed.total_space_square_wa || 0
                      ).toFixed(2)}
                      disabled
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=""
                  label="ลักษณะการใช้"
                  value={
                    eachLandUsed.using_rent_id === 0 ? "ใช้เอง" : "ให้เช่า"
                  }
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=""
                  label="การใช้ประโยชน์"
                  value={eachLandUsed.using_type_detail}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=""
                  label="ลักษณะพิเศษ (ใช้ในการลดหย่อนภาษี)"
                  value={eachLandUsed.tax_deduction_detail}
                  size="large"
                  disabled
                />
              </Col>
            </Row>
          );
        })}
      </CardContainer>
      <CardContainer
        rootClassName={`w-full bg-white pt-9 px-9 pb-2 rounded-2xl`}
        title="รูปภาพ"
        icon={<MapIcon />}
      >
        {!loading &&
          !error &&
          (landImages.length ? (
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <div className="flex flex-wrap gap-2">
                {landImages.map((image, index) => (
                  <Image
                    key={index}
                    width={200}
                    src={image}
                    alt={`Land image ${index + 1}`}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </Image.PreviewGroup>
          ) : (
            <Empty description="ไม่พบรูปภาพ" />
          ))}
      </CardContainer>
      <CardContainer
        rootClassName={`w-full bg-white pt-9 px-9 pb-2 rounded-2xl`}
        title="ข้อมูลเจ้าของสิ่งปลูกสร้าง "
        icon={<PersonIcon />}
      >
        <div className="max-h-[650px] overflow-y-auto overflow-x-hidden custom-scrollbar-collapse-survey-map">
          {isEmpty(landInfo.land_info.land_owners) ? (
            <Empty description="ไม่พบเจ้าของทรัพย์" />
          ) : (
            landInfo.land_info.land_owners?.map((owner, index) => (
              <div key={index}>
                <CardContainer
                  title={getTextOwnerLineLabel(owner)}
                  titleClassName="font-semibold"
                  rootClassName="bg-white rounded-2xl pb-4"
                  headerClassName="bg-transparent text-[#00AA86]"
                  contentClassName="mt-0"
                  icon={null}
                />
                <Row className="mb-5">
                  <Col span={8}>
                    <div className="flex flex-col px-4 border-r border-gray-300">
                      <Text className="font-extrabold">{owner?.text_full_name || ""}</Text>
                      <Text>{owner.person_type_name || ""}</Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="flex flex-col px-4 border-r border-gray-300">
                      <Text className="font-semibold">{owner?.tax_id || ""}</Text>
                      <Text>เลขประจำตัวผู้เสียภาษี</Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="flex flex-col px-4">
                      <Text className="font-semibold">{owner?.phone_number || ""}</Text>
                      <Text>เบอร์ติดต่อ</Text>
                    </div>
                  </Col>
                </Row>
                <Row className="bg-primary-5 p-5" gutter={[2, 2]}>
                  <Col span={24}>
                    <Text className="font-extrabold">
                      ที่อยู่เจ้าของทรัพย์สิน
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Text>{ownerAddress(owner)}</Text>
                  </Col>
                </Row>
              </div>
            ))
          )}
        </div>
      </CardContainer>
    </>
  );
};

export default LandTabScreen;
