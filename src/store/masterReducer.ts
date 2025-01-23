import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMasterData {
  prefix_name: {
    id: number | string;
    name: string;
    person_type:number;
    active:string;
  }[];
  person_type: {
    person_type_id: number | string;
    person_type_name: string;
    person_type_dropdown: String[]
  }[];
  property_type: {
    property_type_id: number | string;
    property_type_name: string;
  }[];
  property_building_sub_type: {
    building_sub_id: string | string;
    building_main_id: string;
    building_type_name: string;
    id: string;
  }[];
  property_signboard_type: {
    signboard_type_id: number | string;
    signboard_type_name: string;
  }[];
  property_signboard_display_type: {
    property_signboard_display_type: number | string;
    property_signboard_display_name: string;
    property_signboard_display_desc: string;
  }[];
  property_building_main_type: {
    building_type_id: string;
    building_type_year: string;
    building_type_name: string;
    building_rate_m2: number;
    ref_source: string;
    ref_code: string;
    muni_code: string;
    id: string | string;
  }[];
  property_building_design_type: {
    building_design_type_id: number | string;
    building_design_type_name: string;
  }[];
  property_doc_type: {
    doc_type_id: number | string;
    doc_type_name: string;
  }[];
  property_using_type: {
    using_type_id: number | string;
    using_type_detail: string;
    allow_select: number;
  }[];
  property_using_detail_type: {
    using_detail_type_id: number | string;
    using_detail_type_name: string;
  }[];
  property_process_detail: {
    property_process_detail_id: string | string;
    property_process_detail_name: string;
  }[];
  property_rent_type: {
    rent_type_id: number | string;
    rent_type_detail: string;
  }[];
  property_household_type: {
    household_type_id: number | string;
    household_type_name: string;
  }[];
  property_survey_type: {
    survey_type_id: number | string;
    survey_type_detail_name: string;
  }[];
  progress_status: {
    progress_id: number | string;
    progress_name: string;
    progress_real: string;
  }[];
  priority_status: {
    priority_id: number | string;
    priority_status: string;
  }[];
  province: {
    ad_region: number;
    region_code: string;
    region_name_t: string;
    region_name_e: string;
    ad_province: number;
    province_code: string;
    province_name_t: string;
    province_name_e: string;
  }[];
  mas_permission:{
    permission_id:number | string,
    permission_name:string
  }[];
  mas_user_management_status:{
    status:number | string,
    status_desc:string,
    module_code:string
  }[],
  mas_signboard_tax_rate: {
    signboard_type_id: number | string,
    signboard_display_type_id: number | string,
    tax_rate_value: number,
    tax_base: number,
  }[],
  mas_tax_deduction: {
    id: string;
    description: string;
    depreciate: number;
    note: string;
  }[],
  patch_log:{
    id:number,
    version: string;
    detail_log: string;
    update_date: string;
  }[],
  mas_all_used_muni:{
    muni_name:string,
    muni_code:string,
  }[],
  all_config:{
    name:string,
    is_active:boolean,
  }[],
  isFetched:boolean;
}

const initialState:IMasterData =  {
  prefix_name: [],
  person_type: [],
  property_type: [],
  property_building_sub_type: [],
  property_signboard_type: [],
  property_signboard_display_type: [],
  property_building_main_type: [],
  property_building_design_type: [],
  property_doc_type: [],
  property_using_type: [],
  property_using_detail_type: [],
  property_process_detail: [],
  property_rent_type: [],
  property_household_type: [],
  property_survey_type: [],
  progress_status: [],
  priority_status: [],
  province: [],
  mas_permission:[],
  mas_user_management_status:[],
  mas_signboard_tax_rate: [],
  mas_tax_deduction: [],
  patch_log:[],
  mas_all_used_muni:[],
  all_config:[],
  isFetched:false
};
export const rootReducer = createSlice({
  name: "master",
  initialState,
  reducers: {
    setMasterData: (state, action: PayloadAction<Record<keyof IMasterData , any>>) => {
      state.prefix_name = action.payload["prefix_name"];
      state.person_type = action.payload["person_type"];
      state.property_type = action.payload["property_type"];
      state.property_building_sub_type = action.payload["property_building_sub_type"];
      state.property_signboard_type = action.payload["property_signboard_type"];
      state.property_signboard_display_type = action.payload["property_signboard_display_type"];
      state.property_building_main_type = action.payload["property_building_main_type"];
      state.property_building_design_type = action.payload["property_building_design_type"];
      state.property_doc_type = action.payload["property_doc_type"];
      state.property_using_type = action.payload["property_using_type"];
      state.property_using_detail_type = action.payload["property_using_detail_type"];
      state.property_process_detail = action.payload["property_process_detail"];
      state.property_rent_type = action.payload["property_rent_type"];
      state.property_household_type = action.payload["property_household_type"];
      state.property_survey_type = action.payload["property_survey_type"];
      state.progress_status = action.payload["progress_status"];
      state.priority_status = action.payload["priority_status"];
      state.province = action.payload["province"];
      state.mas_permission = action.payload["mas_permission"];
      state.mas_user_management_status = action.payload["mas_user_management_status"];
      state.mas_signboard_tax_rate = action.payload["mas_signboard_tax_rate"];
      state.mas_tax_deduction = action.payload["mas_tax_deduction"];
      state.patch_log = action.payload["patch_log"];
      state.mas_all_used_muni = action.payload["mas_all_used_muni"];
      state.all_config = action.payload["all_config"];
      state.isFetched = true;
    },
    onReset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setMasterData, onReset } = rootReducer.actions;

export default rootReducer.reducer;
