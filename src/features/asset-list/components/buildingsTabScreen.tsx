import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  antOptionType,
  AssetDataType,
  BuildingOwnerType,
  BuildingType,
} from "../types/types";
import { Col, Image, Row, Typography } from "antd";
import { Field } from "@/components/field";
import Empty from "@/components/empty";
import { useGetAssetImages } from "../screen/api/useAssets";
import CardContainer from "@/components/container/CardContainer";
import MapIcon from "@/components/icons/MapIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import { isEmpty } from "lodash";

interface Props {
  landInfo: AssetDataType;
}

const { Text } = Typography;

const BuildingsTabScreen: React.FC<Props> = (props) => {
  const { landInfo } = props;

  const processedImages = useRef(new Set<string>()); // Store the processed image URLs

  const [building, setBuilding] = useState<BuildingType>();
  const [selectBuilding, setSelectBuilding] = useState<antOptionType>({
    label: " ",
    value: " ",
  });
  const [isNoBuilding, setIsNoBuilding] = useState<boolean>(true);
  const [buildingImages, setBuildingImages] = useState<string[]>([]);

  const buildingOption = useMemo(() => {
    const option = [];
    for (const eachLandUsed of landInfo.land_used_info) {
      for (const eachBuilding of eachLandUsed.buildings) {
        option.push({
          label: `${eachBuilding.building_no || "-"} (${
            eachBuilding.building_main_type_name || "-"
          })`,
          value: eachBuilding.id,
        });
      }
    }
    return option;
  }, [landInfo.land_used_info]);

  useEffect(() => {
    for (const eachLandUsed of landInfo.land_used_info) {
      for (const eachBuilding of eachLandUsed.buildings) {
        setSelectBuilding({
          value: eachBuilding.id,
          label: `บ้านเลขที่ : ${eachBuilding.building_no || "-"} (${
            eachBuilding.building_main_type_name || "-"
          })`,
        });
        setIsNoBuilding(false);
        setBuildingImages([]);
        setBuilding(eachBuilding);
        break;
      }
      break;
    }
  }, [landInfo.land_used_info]);

  const onSelectBuilding = useCallback(
    (option: any) => {
      // console.log("option ***>>>", option);
      if (selectBuilding.value == option?.value) {
        return;
      }
      if (option?.label) {
        setSelectBuilding({
          value: option?.value,
          label: `บ้านเลขที่ : ${option?.label}`,
        });
      }

      landInfo.land_used_info.some((eachLandUsed) => {
        const matchingBuilding = eachLandUsed.buildings.find(
          (eachBuilding) => eachBuilding.id === option.value
        );
        if (matchingBuilding) {
          setBuildingImages([]);
          setBuilding(matchingBuilding);
          return true; // Stop further iteration
        }
        return false;
      });
    },
    [landInfo.land_used_info, selectBuilding]
  );

  const imgIds = useMemo(() => {
    return building?.asset_images?.length
      ? Array.from(building?.asset_images).map((imgId) => imgId.img_id)
      : [];
  }, [building]);

  const imageQueries = useGetAssetImages(imgIds);

  const loading = imageQueries.some((query) => query.isLoading);
  const error = imageQueries.some((query) => query.isError);

  useEffect(() => {
    imageQueries.forEach((query) => {
      if (query.data && !processedImages.current.has(query.data)) {
        processedImages.current.add(query.data); // Mark this URL as processed
        setBuildingImages((prev) => [...prev, query.data]);
      }
    });

    // Cleanup function: revoke unused URLs
    return () => {
      buildingImages.forEach((url) => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imageQueries, buildingImages]);

  const ownerAddress = useCallback((owner: BuildingOwnerType) => {
    return `บ้านเลขที่ ${owner?.address_house_number || " "} หมู่ที่/ชุมชน ${
      owner?.address_zone || " "
    } ตำบล/แขวง ${owner?.sub_district_name || " "} อำเภอ/เขต ${
      owner?.district_name || " "
    } จังหวัด ${owner?.province_name || " "} รหัสไปรษณีย์ ${
      owner?.address_postcode
    }`;
  }, []);

  const getTextOwnerLineLabel = useCallback(
    (ownerData: BuildingOwnerType): string => {
      if (!ownerData?.owner_line_no) {
        return " ";
      }
      return ownerData?.owner_line_no === "1"
        ? `เจ้าของหลัก ( ผู้รับผิดชอบภาษี )`
        : `เจ้าของร่วม`;
    },
    []
  );

  return (
    <>
      {isNoBuilding ? (
        <Col span={24}>
          <Empty description="ไม่พบข้อมูลสิ่งปลูกสร้าง" />
        </Col>
      ) : (
        <Row
          gutter={[16, 16]}
          className="w-full px-9"
          justify="center"
          align="middle"
        >
          <Col span={12} className="flex items-center justify-center mb-5">
            <Field.Select
              id="buildings"
              options={buildingOption}
              value={selectBuilding.label}
              onChange={(_, option) => onSelectBuilding(option)}
              size="small"
            />
          </Col>

          <div className="w-full border border-slate-300 rounded-md p-3">
            <div className="flex gap-4 items-center">
              {buildingImages?.length ? (
                <Image
                  width={100}
                  height={100}
                  src={buildingImages[0]}
                  alt={`Building image`}
                  className="rounded-lg object-cover"
                  preview={false}
                />
              ) : (
                <Image
                  width={100}
                  src="/noImage.svg"
                  alt="no image"
                  className="rounded-lg"
                />
              )}

              <div className="flex flex-col">
                <div>
                  <Text className="text-primary-3 font-semibold">
                    ประเภทสิ่งปลูกสร้าง :{" "}
                  </Text>
                  <Text>{building?.building_main_type_name || "-"}</Text>
                </div>
                <div>
                  <Text className="text-primary-3 font-semibold">ขนาด : </Text>
                  <Text>{`${building?.building_width_meter || "-"} x ${
                    building?.building_length_meter || "-"
                  } = ${building?.building_all_area || "-"} ตรม.`}</Text>
                </div>
                <div>
                  <Text className="text-primary-3 font-semibold">
                    อายุสิ่งปลูกสร้าง :{" "}
                  </Text>
                  <Text>{`${building?.building_year_total || "-"} ปี`}</Text>
                </div>
              </div>
            </div>
          </div>
          <CardContainer
            rootClassName={`w-full bg-white setBuildingImages pb-2 rounded-2xl`}
            title="ข้อมูลสิ่งปลูกสร้าง"
            icon={<MapIcon />}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="รหัสประจำบ้าน"
                  value={building?.building_house_code || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="กว้าง"
                  addonAfter="เมตร"
                  value={building?.building_width_meter || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ยาว"
                  addonAfter="เมตร"
                  value={building?.building_length_meter || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="จำนวนห้อง"
                  value={building?.building_total_room || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="จำนวนชั้น"
                  value={building?.building_total_floor || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="พื้นที่รวม"
                  addonAfter="ตร.ม."
                  value={building?.building_all_area || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ประเภทสิ่งปลูกสร้าง ( ตามบัญชีกรมธนารักษ์ )"
                  value={
                    building?.building_main_type_name ||
                    building?.property_building_main_type_id
                      ? `${building?.property_building_main_type_id || "-"} - ${
                          building?.building_main_type_name || "-"
                        }`
                      : " "
                  }
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ประเภทสิ่งปลูกสร้างย่อย"
                  value={
                    building?.building_sub_type_name ||
                    building?.property_building_sub_type_id
                      ? `${building?.property_building_sub_type_id || "-"} - ${
                          building?.building_sub_type_name || "-"
                        }`
                      : " "
                  }
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ลักษณะสิ่งปลูกสร้าง"
                  value={building?.building_design_type_name || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ถนน"
                  value={building?.road || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="หมู่ที่"
                  value={building?.address_zone || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="บ้านเลขที่"
                  value={building?.building_no || " "}
                  size="large"
                  disabled
                />
              </Col>
            </Row>
          </CardContainer>
          <CardContainer
            rootClassName={`w-full bg-white setBuildingImages pb-2 rounded-2xl`}
            title="การใช้ประโยชน์สิ่งปลูกสร้าง"
            icon={<MapIcon />}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="การให้เช่า"
                  value={building?.building_used?.rent_type_detail || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ลักษณะการใช้ประโยชน์ "
                  value={building?.building_used?.using_type_detail || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ปีที่สร้าง (ปี พ.ศ.)"
                  value={building?.build_year || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="อายุอาคาร (ปี)"
                  value={building?.building_year_total || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="การอยู่อาศัย"
                  value={building?.building_used?.household_type_name || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={24}>
                <Row gutter={[16, 16]} justify="space-between">
                  <Col flex="1">
                    <Field.Input
                      classnamediv="text-base"
                      id=" "
                      label="การเกษตร"
                      addonAfter="ตร.ม."
                      value={
                        building?.building_used
                          ?.building_cultivation_space_square_meter || 0
                      }
                      size="large"
                      disabled
                    />
                  </Col>
                  <Col flex="1">
                    <Field.Input
                      classnamediv="text-base"
                      id=" "
                      label="อยู่อาศัยเอง"
                      addonAfter="ตร.ม."
                      value={
                        building?.building_used
                          ?.building_self_using_square_meter || 0
                      }
                      size="large"
                      disabled
                    />
                  </Col>
                  <Col flex="1">
                    <Field.Input
                      classnamediv="text-base"
                      id=" "
                      label="ให้เช่าอาศัย"
                      addonAfter="ตร.ม."
                      value={
                        building?.building_used
                          ?.building_for_rent_square_meter || 0
                      }
                      size="large"
                      disabled
                    />
                  </Col>
                  <Col flex="1">
                    <Field.Input
                      classnamediv="text-base"
                      id=" "
                      label="ว่างเปล่า"
                      addonAfter="ตร.ม."
                      value={
                        building?.building_used
                          ?.building_empty_space_square_meter || 0
                      }
                      size="large"
                      disabled
                    />
                  </Col>
                  <Col flex="1">
                    <Field.Input
                      classnamediv="text-base"
                      id=" "
                      label="อื่นๆ"
                      addonAfter="ตร.ม."
                      value={
                        building?.building_used?.building_etc_square_meter || 0
                      }
                      size="large"
                      disabled
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardContainer>
          <CardContainer
            rootClassName={`w-full bg-white rounded-2xl`}
            title="รูปภาพ"
            icon={<MapIcon />}
          >
            {!loading &&
              !error &&
              (buildingImages.length ? (
                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {buildingImages.map((image, index) => (
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
            rootClassName={`w-full bg-white rounded-2xl`}
            title="ข้อมูลเจ้าของสิ่งปลูกสร้าง "
            icon={<PersonIcon />}
          >
            <div className="max-h-[650px] overflow-y-auto overflow-x-hidden custom-scrollbar-collapse-survey-map">
              {isEmpty(building?.building_owners) ? (
                <Empty description="ไม่พบเจ้าของทรัพย์" />
              ) : (
                building?.building_owners?.map((owner, index) => (
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
                          <Text className="font-extrabold">
                            {owner?.text_full_name || ""}
                          </Text>
                          {owner?.text_full_name ? (
                            <Text>{owner.person_type_name}</Text>
                          ) : (
                            <>
                              <Text>{owner.person_type_name}</Text>
                              <Text>&nbsp;</Text>
                            </>
                          )}
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className="flex flex-col px-4 border-r border-gray-300">
                          <Text className="font-semibold">
                            {owner?.tax_id || ""}
                          </Text>
                          {owner?.tax_id ? (
                            <Text>เลขประจำตัวผู้เสียภาษี</Text>
                          ) : (
                            <>
                              <Text>เลขประจำตัวผู้เสียภาษี</Text>
                              <Text>&nbsp;</Text>
                            </>
                          )}
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className="flex flex-col px-4">
                          <Text className="font-semibold">
                            {owner?.phone_number || ""}
                          </Text>
                          {owner?.phone_number ? (
                            <Text>เบอร์ติดต่อ</Text>
                          ) : (
                            <>
                              <Text>&nbsp;</Text>
                              <Text>เบอร์ติดต่อ</Text>
                            </>
                          )}
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
        </Row>
      )}
    </>
  );
};

export default BuildingsTabScreen;
