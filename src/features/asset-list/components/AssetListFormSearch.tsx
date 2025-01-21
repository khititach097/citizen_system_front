import { Field } from "@/components/field";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

type Props = {};

type AssetListFormSearchType = {
  muni_code: string;
  asset_type: string;
};

const AssetListFormSearch = (props: Props) => {
  const { watch, control } = useForm<AssetListFormSearchType>();

  const handleChange = (field: keyof AssetListFormSearchType) => {
    console.log(field, watch());
  };

  return (
    <>
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      <div className="flex gap-6 justify-center">
        <Controller
          control={control}
          name="muni_code"
          render={({ field }) => (
            <Field.Select
              {...field}
              onChange={(value) => {
                field.onChange(value);
                handleChange(field.name);
              }}
              classnamediv="w-1/4 font-semibold"
              classnamefield="h-8 w-full"
              label="เขต / เทศบาล"
              id={field.name}
              options={[
                { value: "1", label: "เปลี่ยนแปลงการใช้ประโยชน์" },
                { value: "2", label: "คัดค้านการประเมินภาษี" },
                { value: "3", label: "แจ้งแก้ไขบัญชีรายการทรัพย์สิน" },
              ]}
              showSearch
            />
          )}
        />

        <Controller
          control={control}
          name="asset_type"
          render={({ field }) => (
            <Field.Select
              {...field}
              onChange={(value) => {
                field.onChange(value);
                handleChange(field.name);
              }}
              classnamediv="w-1/4 font-semibold"
              classnamefield="h-8 w-full"
              label="ประเภททรัพย์"
              id={field.name}
              allowClear
              options={[
                { value: "1", label: "ที่ดิน" },
                { value: "2", label: "อาคาร" },
                { value: "3", label: "ยานพาหนะ" },
                { value: "4", label: "เครื่องจักร" },
              ]}
              showSearch
            />
          )}
        />
      </div>
    </>
  );
};

export default AssetListFormSearch;
