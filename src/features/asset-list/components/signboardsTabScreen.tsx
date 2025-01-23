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
  SignboardInfoType,
  SignboardOwnerType,
} from "../types/types";
import { Col, Image, Row, Typography } from "antd";
import Empty from "@/components/empty";
import { Field } from "@/components/field";
import CardContainer from "@/components/container/CardContainer";
import MapIcon from "@/components/icons/MapIcon";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import PersonIcon from "@/components/icons/PersonIcon";
import { useGetAssetImages } from "../screen/api/useAssets";

interface Props {
  landInfo: AssetDataType;
}

const { Text } = Typography;

const SignboardsTabScreen: React.FC<Props> = (props) => {
  const { landInfo } = props;

  const processedImages = useRef(new Set<string>()); // Store the processed image URLs

  const [signboard, setSignboard] = useState<SignboardInfoType>();
  const [selectSignboard, setSelectsSignboard] = useState<antOptionType>({
    label: " ",
    value: " ",
  });
  const [isNoSignboard, setIsNoSignboard] = useState<boolean>(true);
  const [signboardImages, setSignboardImages] = useState<string[]>([]);

  const signboardOption = useMemo(() => {
    const option = [];
    for (const eachSignboard of landInfo.signboard_info) {
      option.push({
        label: `${eachSignboard.signboard_text || "-"}`,
        value: eachSignboard.id,
      });
    }
    return option;
  }, [landInfo.signboard_info]);

  useEffect(() => {
    for (const eachSignboard of landInfo.signboard_info) {
      setSelectsSignboard({
        value: eachSignboard.id,
        label: `ข้อความบนป้าย : ${eachSignboard.signboard_text || "-"}`,
      });
      setIsNoSignboard(false);
      setSignboardImages([]);
      setSignboard(eachSignboard);
      break;
    }
  }, [landInfo.signboard_info]);

  const onSelectSignboard = useCallback(
    (option: any) => {
      // console.log("option ***>>>", option);
      if (selectSignboard.value == option?.value) {
        return;
      }
      if (option?.label) {
        setSelectsSignboard({
          value: option.value,
          label: `ข้อความบนป้าย : ${option?.label}`,
        });
      }

      const matchingSignboard = landInfo.signboard_info.find(
        (eachSignboard) => eachSignboard.id === option.value
      );
      if (matchingSignboard) {
        setSignboardImages([]);
        setSignboard(matchingSignboard);
      }
    },
    [landInfo.signboard_info, selectSignboard]
  );

  const imgIds = useMemo(() => {
    return signboard?.asset_images?.length
      ? Array.from(signboard?.asset_images).map((imgId) => imgId.img_id)
      : [];
  }, [signboard]);

  const imageQueries = useGetAssetImages(imgIds);

  const loading = imageQueries.some((query) => query.isLoading);
  const error = imageQueries.some((query) => query.isError);

  useEffect(() => {
    imageQueries.forEach((query) => {
      if (query.data && !processedImages.current.has(query.data)) {
        processedImages.current.add(query.data); // Mark this URL as processed
        setSignboardImages((prev) => [...prev, query.data]);
      }
    });

    // Cleanup function: revoke unused URLs
    return () => {
      signboardImages.forEach((url) => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imageQueries, signboardImages]);

  const ownerAddress = useCallback((owner: SignboardOwnerType) => {
    return `บ้านเลขที่ ${owner?.address_house_number || " "} หมู่ที่/ชุมชน ${
      owner?.address_zone || " "
    } ตำบล/แขวง ${owner?.sub_district_name || " "} อำเภอ/เขต ${
      owner?.district_name || " "
    } จังหวัด ${owner?.province_name || " "} รหัสไปรษณีย์ ${
      owner?.address_postcode
    }`;
  }, []);

  const getTextOwnerLineLabel = useCallback(
    (ownerData: SignboardOwnerType): string => {
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
      {isNoSignboard ? (
        <Col span={24}>
          <Empty description="ไม่พบข้อมูลป้าย" />
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
              options={signboardOption}
              value={selectSignboard.label}
              onChange={(_, option) => onSelectSignboard(option)}
              size="small"
            />
          </Col>

          <div className="w-full border border-slate-300 rounded-md p-3">
            <div className="flex gap-4 items-center">
              {signboardImages?.length ? (
                <Image
                  width={100}
                  height={100}
                  src={signboardImages[0]}
                  alt={`Signboard image`}
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
                    ข้อความบนป้าย :{" "}
                  </Text>
                  <Text>{signboard?.signboard_text || "-"}</Text>
                </div>
                <div>
                  <Text className="text-primary-3 font-semibold">
                    ขนาดป้าย :{" "}
                  </Text>
                  <Text>{`${signboard?.signboard_width || "-"} x ${
                    signboard?.signboard_height || "-"
                  } ตร.ซม.`}</Text>
                </div>
                <div>
                  <Text className="text-primary-3 font-semibold">จำนวน : </Text>
                  <Text className="mr-5">{`${
                    signboard?.signboard_side || "-"
                  } ด้าน`}</Text>
                  <Text className="text-primary-3 font-semibold">
                    ประเภท :{" "}
                  </Text>
                  <Text>{`${signboard?.text_signboard_type || "-"}`}</Text>
                </div>
              </div>
            </div>
          </div>

          <CardContainer
            rootClassName={`w-full bg-white  pb-2 rounded-2xl`}
            title="ข้อมูลป้าย"
            icon={<MapIcon />}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ประเภทป้าย"
                  value={signboard?.signboard_type_name || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ประเภทย่อย"
                  value={signboard?.property_signboard_display_desc || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="กว้าง"
                  addonAfter="ซม."
                  value={signboard?.signboard_width || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ยาว"
                  addonAfter="ซม."
                  value={signboard?.signboard_height || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="เนื้อที่"
                  addonAfter="ตร.ซม."
                  value={signboard?.signboard_total_area || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="จำนวนด้าน"
                  value={signboard?.signboard_side || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={18}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ข้อความบนป้าย"
                  value={signboard?.signboard_text || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.DatePickerBuddistYear
                  classnamediv="!text-base"
                  classnamefield="!w-full"
                  id="signboard_setup_date"
                  name="signboard_setup_date"
                  label="วันที่ติดตั้ง"
                  size="large"
                  value={
                    signboard?.signboard_setup_date
                      ? dayjs(signboard.signboard_setup_date)
                      : null
                  }
                  disabled
                />
              </Col>
            </Row>
          </CardContainer>
          <CardContainer
            rootClassName={`w-full bg-white pb-2 rounded-2xl`}
            title="สถานที่ติดตั้ง"
            icon={<MapIcon />}
          >
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="บ้านเลขที่"
                  value={signboard?.address_place_number || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="หมู่ที่"
                  value={signboard?.address_zone || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ตรอก/ซอย"
                  value={signboard?.address_alley_way || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ชุมชน"
                  value={signboard?.address_village_name || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={12}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ถนน"
                  value={signboard?.address_street || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ตำบล/แขวง"
                  value={signboard?.subdistrict_name || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={6}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="รหัสไปรษณีย์"
                  value={signboard?.address_postcode || " "}
                  size="large"
                  disabled
                />
              </Col>
              <Col span={24}>
                <Field.Input
                  classnamediv="text-base"
                  id=" "
                  label="ชื่อสถานประกอบการค้าหรือกิจการอื่น"
                  value={signboard?.signboard_name || " "}
                  size="large"
                  disabled
                />
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
              (signboardImages.length ? (
                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {signboardImages.map((image, index) => (
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
            title="ข้อมูลเจ้าของป้าย "
            icon={<PersonIcon />}
          >
            <div className="max-h-[650px] overflow-y-auto overflow-x-hidden custom-scrollbar-collapse-survey-map">
              {isEmpty(signboard?.signboard_owners) ? (
                <Empty description="ไม่พบเจ้าของทรัพย์" />
              ) : (
                signboard?.signboard_owners?.map((owner, index) => (
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

export default SignboardsTabScreen;
