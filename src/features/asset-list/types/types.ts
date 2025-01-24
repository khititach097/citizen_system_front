export interface AssetDataType {
  asset_type: "land" | "condo";
  land_info: LandInfoType;
  land_used_info: LandUsedInfoType[];
  latest_survey_request: LatestSurveyRequestType;
  signboard_info: SignboardInfoType[];
}

export interface LandInfoType {
  adjoining_lands: AdjoiningLandType[];
  asset_images: AssetImageType[];
  land_info_detail: LandInfoDetailType;
  land_owners: LandOwnerType[];
}

export interface AdjoiningLandType {
  adjoining_land_id: string;
  deed_no: string;
  full_name: string;
  id: string;
  is_same_owner: boolean;
  is_survey: boolean;
  land_id: string;
  land_space_ngan: number;
  land_space_rai: number;
  land_space_wa: number;
  owner_id: string;
  parcel_no: string;
  person_type_id: number;
  person_type_name: string;
  phone_number: string;
  status?: string;
  tax_id: string;
}

export interface AssetImageType {
  img_id: string;
  key: string;
  image_from: number;
  survey_request_id: string;
}

export interface LandInfoDetailType {
  created_at: string;
  created_by: string;
  cutax_land_id: string;
  deed_no: string;
  deleted_at: string;
  deleted_by: string;
  district_code: string;
  district_name_t: string;
  doc_type_name: string;
  estimated_price: number;
  estimated_price_by_treasury: number;
  id: string;
  is_estimated_by_treasury: boolean;
  land_district_id: number;
  land_no: string;
  land_space_ngan: number;
  land_space_rai: number;
  land_space_sub_wa: number;
  land_space_wa: number;
  land_sub_district_id: number;
  land_zone: string;
  map_geometry: string;
  map_lat: string;
  map_long: string;
  muni_code: string;
  municipality_name_t: string;
  note: string;
  parcel_no: string;
  parcel_type: number;
  province_code: string;
  province_name_t: string;
  report_dt: string;
  road: string;
  special_usetax_type: string;
  sub_district_code: string;
  subdistrict_name_t: string;
  survey_no: string;
  sync_id: string;
  tax_year: string;
  updated_at: string;
  updated_by: string;
  utm_map1: string;
  utm_map2: string;
  utm_map3: string;
  utm_map4: string;
  utm_scale: string;
}

export interface LandOwnerType {
  address_alleyway: string;
  address_district_code: string;
  address_house_number: string;
  address_postcode: string;
  address_province_code: string;
  address_street: string;
  address_sub_district_code: string;
  address_zone: string;
  citizen_id_check: boolean;
  code_name: string;
  codept4: string;
  corporate_name: string;
  created_at: string;
  current_address_alleyway: string;
  current_address_district_code: string;
  current_address_house_number: string;
  current_address_postcode: string;
  current_address_province_code: string;
  current_address_street: string;
  current_address_sub_district_code: string;
  current_address_zone: string;
  date_source: string;
  district_name: string;
  email: string;
  fax_no: string;
  first_name: string;
  id: string;
  is_same_address: boolean;
  last_name: string;
  line_id: string;
  muni_code: string;
  owner_id: string;
  owner_line_no: string;
  person_type_id: number;
  person_type_name: string;
  phone_number: string;
  prefix_name: string;
  prefix_name_id: number;
  province_name: string;
  sub_district_name: string;
  sync_id: string;
  tax_id: string;
  text_full_name: string;
  updated_at: string;
}

export interface LandUsedInfoType {
  asset_images: AssetImageType[];
  buildings: BuildingType[];
  created_at: string;
  created_by: string;
  cutax_landused_id: string;
  deleted_at: string;
  deleted_by: string;
  empty_year: string;
  household_type_id: number;
  id: string;
  land_id: string;
  land_used_code: string;
  land_used_owners: LandUsedOwnerType[];
  muni_code: string;
  ngan: number;
  note: string;
  rai: number;
  remark_year_from: string;
  remark_year_to: string;
  sync_id: string;
  tax_deduction_id: string;
  total_space_ngan: number;
  total_space_rai: number;
  total_space_square_wa: number;
  updated_at: string;
  updated_by: string;
  using_detail_id: string[];
  using_rent_id: number;
  using_type_id: number;
  wa: number;
  using_type_detail: string;
  tax_deduction_detail: string;
}

export interface BuildingType {
  address_zone: string;
  asset_images: AssetImageType[];
  build_year: string;
  building_all_area: number;
  building_build_area: number;
  building_code: string;
  building_design_type_id: number;
  building_design_type_name: string;
  building_house_code: string;
  building_length_meter: number;
  building_no: string;
  building_owners: BuildingOwnerType[];
  building_total_floor: number;
  building_total_room: number;
  building_main_type_name: string;
  building_sub_type_name: string;
  building_type_year: string;
  building_used_id: string;
  building_width_meter: number;
  building_year_total: string;
  corporate_name: string;
  created_at: string;
  created_by: string;
  cutax_building_id: string;
  deleted_at: string;
  deleted_by: string;
  empty_year: string;
  first_name: string;
  id: string;
  land_id: string;
  land_used_id: string;
  last_name: string;
  map_geometry: any;
  map_lat: string;
  map_long: string;
  muni_code: string;
  note: string;
  owner_line_no: string;
  parcel_code: string;
  parcel_no: string;
  person_type_id: number;
  person_type_name: string;
  prefix_name: string;
  prefix_name_id: number;
  property_building_main_type_id: string;
  property_building_sub_type_id: string;
  rent_year: string;
  road: string;
  source_dt: string;
  sync_id: string;
  tax_year: string;
  text_owner_fullname: string;
  text_owner_prefix_fullname: string;
  updated_at: string;
  updated_by: string;
  utm_map1: string;
  utm_map2: string;
  utm_map3: string;
  utm_map4: string;
  utm_scale: string;
  building_used: BuildingUsedType;
}

export interface BuildingUsedType {
  area_length: number;
  area_width: number;
  building_cultivation_space_square_meter: number;
  building_empty_space_square_meter: number;
  building_etc_square_meter: number;
  building_for_rent_square_meter: number;
  building_household_type_id: number;
  building_id: string;
  building_self_using_square_meter: number;
  building_using_type_id: number;
  created_at: string;
  created_by: string;
  deleted_at: string;
  deleted_by: string;
  floor_no: string;
  full_area_check: boolean;
  household_type_name: string;
  id: string;
  muni_code: string;
  non_specific: number;
  notes: string;
  property_rent_type_id: number;
  rent_type_detail: string;
  source_dt: string;
  tax_year: string;
  updated_at: string;
  updated_by: string;
  used_type: string;
  using_type_detail: string;
}

export interface BuildingOwnerType {
  address_alleyway: string;
  address_district_code: string;
  address_house_number: string;
  address_postcode: string;
  address_province_code: string;
  address_street: string;
  address_sub_district_code: string;
  address_zone: string;
  citizen_id_check: boolean;
  code_name: string;
  codept4: string;
  corporate_name: string;
  created_at: string;
  current_address_alleyway: string;
  current_address_district_code: string;
  current_address_house_number: string;
  current_address_postcode: string;
  current_address_province_code: string;
  current_address_street: string;
  current_address_sub_district_code: string;
  current_address_zone: string;
  date_source: string;
  district_name: string;
  email: string;
  fax_no: string;
  first_name: string;
  id: string;
  is_same_address: boolean;
  last_name: string;
  line_id: string;
  muni_code: string;
  owner_id: string;
  owner_line_no: string;
  person_type_id: number;
  person_type_name: string;
  phone_number: string;
  prefix_name: string;
  prefix_name_id: number;
  province_name: string;
  sub_district_name: string;
  sync_id: string;
  tax_id: string;
  text_full_name: string;
  updated_at: string;
}

export interface LandUsedOwnerType {
  address_alleyway: string;
  address_district_code: string;
  address_house_number: string;
  address_postcode: string;
  address_province_code: string;
  address_street: string;
  address_sub_district_code: string;
  address_zone: string;
  citizen_id_check: boolean;
  code_name: string;
  codept4: string;
  corporate_name: string;
  created_at: string;
  current_address_alleyway: string;
  current_address_district_code: string;
  current_address_house_number: string;
  current_address_postcode: string;
  current_address_province_code: string;
  current_address_street: string;
  current_address_sub_district_code: string;
  current_address_zone: string;
  date_source: string;
  district_name: string;
  email: string;
  fax_no: string;
  first_name: string;
  id: string;
  is_same_address: boolean;
  last_name: string;
  line_id: string;
  muni_code: string;
  owner_id: string;
  owner_line_no: string;
  person_type_id: number;
  person_type_name: string;
  phone_number: string;
  prefix_name: string;
  prefix_name_id: number;
  province_name: string;
  sub_district_name: string;
  sync_id: string;
  tax_id: string;
  text_full_name: string;
  updated_at: string;
}

export interface LatestSurveyRequestType {
  id: string;
  tax_year: string;
  priority_status_id: number;
  land_id: string;
  survey_inquirer_id: string;
  receive_request_by_id: string;
  created_at: string;
  status: number;
  person_type_id: number;
  id_card_num: string;
  phone_number: string;
  note: string;
  survey_code: string;
  first_name: string;
  last_name: string;
  corporate_name: string;
  created_by: string;
  deleted_by: string;
  muni_code: string;
  province_code: string;
  survey_transaction: string;
  approved_by: string;
  approved_at: string;
  note_land: string;
  note_used_land_building: string;
  note_signboard: string;
  updated_at: string;
  updated_by: string;
  property_process_detail_id: number;
  note_condo: string;
  survey_type_id: number;
}

export interface SignboardInfoType {
  address_alley_way: string;
  address_place_number: string;
  address_street: string;
  address_sub_district_id: number;
  address_zone: string;
  address_village_name: string;
  asset_images: AssetImageType[];
  cancel_at: string;
  cancel_by: string;
  cancel_date: string;
  cancel_status: number;
  created_at: string;
  created_by: string;
  cutax_label_id: string;
  deleted_at: string;
  deleted_by: string;
  id: string;
  land_id: string;
  map_lat: string;
  map_long: string;
  muni_code: string;
  note: string;
  parcel_code: string;
  person_type_name: string;
  property_signboard_display_desc: string;
  property_signboard_display_name: string;
  property_signboard_display_type: number;
  property_signboard_display_type_id: number;
  property_signboard_type_id: number;
  signboard_height: number;
  signboard_owners: SignboardOwnerType[];
  signboard_setup_date: string;
  signboard_side: number;
  signboard_text: string;
  signboard_total_area: number;
  signboard_type_id: number;
  signboard_type_name: string;
  signboard_unit_total: number;
  signboard_width: number;
  sync_id: string;
  tax_year: string;
  text_owner_fullname: string;
  text_owner_prefix_fullname: string;
  text_signboard_type: string;
  updated_at: string;
  updated_by: string;
  utm_map1: string;
  utm_map2: string;
  utm_map3: string;
  address_postcode: string;
  district_name: string;
  province_name: string;
  subdistrict_name: string;
  signboard_name: string;
}

export interface SignboardOwnerType {
  address_alleyway: string;
  address_district_code: string;
  address_house_number: string;
  address_postcode: string;
  address_province_code: string;
  address_street: string;
  address_sub_district_code: string;
  address_zone: string;
  citizen_id_check: boolean;
  code_name: string;
  codept4: string;
  corporate_name: string;
  created_at: string;
  current_address_alleyway: string;
  current_address_district_code: string;
  current_address_house_number: string;
  current_address_postcode: string;
  current_address_province_code: string;
  current_address_street: string;
  current_address_sub_district_code: string;
  current_address_zone: string;
  date_source: string;
  district_name: string;
  email: string;
  fax_no: string;
  first_name: string;
  id: string;
  is_same_address: boolean;
  last_name: string;
  line_id: string;
  muni_code: string;
  owner_id: string;
  owner_line_no: string;
  person_type_id: number;
  person_type_name: string;
  phone_number: string;
  prefix_name: string;
  prefix_name_id: number;
  province_name: string;
  sub_district_name: string;
  sync_id: string;
  tax_id: string;
  text_full_name: string;
  updated_at: string;
}

export interface antOptionType {
  value: string;
  label: string;
}

export interface AssetListType {
  asset_type: "land" | "condo";
  signboards: AssetListSignboardType[];
  land_data: AssetListLandType;
  buildings: AssetListBuildingType[];
  condo_data: AssetListCondoType;
}

export interface AssetListLandType {
  asset_images: AssetImageType[];
  deed_no: string;
  district_name: string;
  doc_type_name: string;
  estimated_price: number;
  estimated_price_by_treasury: number;
  id: string;
  land_space_ngan: number;
  land_space_rai: number;
  land_space_wa: number;
  land_used: {
    total_space_ngan: number | null;
    total_space_rai: number | null;
    total_space_square_wa: number;
    using_type_detail: string;
  }[];
  muni_code: string;
  postcodemain: string;
  province_name: string;
  subdistrict_name: string;
}

export interface AssetListBuildingType {
  id: string;
  asset_images: AssetImageType[];
  building_length_meter: number;
  building_type_name: string;
  building_used: BuildingUsedType[];

  building_width_meter: number;
  building_year_total: number;
  property_building_main_type_id: string;
  property_building_sub_type_id: string;
}

export interface AssetListSignboardType {
  asset_images: AssetImageType[];
  id: string;
  property_signboard_display_desc: string;
  property_signboard_display_name: string;
  property_signboard_display_type: number;
  property_signboard_display_type_id: number;
  signboard_height: number;
  signboard_side: number;
  signboard_width: number;
}

export interface AssetListCondoType {
  address: null;
  asset_images: AssetImageType[];
  building_name: string;
  building_no: null | string;
  built_year: null | string;
  condo_code: string;
  condo_name: null | string;
  created_at: string;
  created_by: string;
  deleted_at: null | string;
  deleted_by: null | string;
  district_id: string;
  district_name: string;
  doc_type_name: string;
  floor: number;
  id: string;
  land_id: string;
  map_geometry: string;
  map_lat: null | string;
  map_long: null | string;
  moo: string;
  muni_code: string;
  note: null | string;
  parcel_no: string;
  parcel_type: number;
  postal_code: string;
  postcodemain: string;
  price_per_meter: null | number;
  province_id: string;
  province_name: string;
  registration_no: null | string;
  request_id: null | string;
  road: null | string;
  room: number;
  signboard_id: null | string;
  soi: null | string;
  source_dt: null | string;
  subdistrict_id: string;
  subdistrict_name: string;
  sync_id: string;
  tax_year: string;
  updated_at: string;
  updated_by: string;
  utm_map1: null | string;
  utm_map2: null | string;
  utm_map3: null | string;
  utm_map4: null | string;
  utm_scale: null | string;
  village: null | string;
}


export interface mapDataType {
  geometry: string,
  map_lat: number,
  map_long: number,
}