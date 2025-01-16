import type { PaginationProps, TableProps } from "antd";
import React from "react";

interface TypeOptionPerPage {
  name?: string;
  value: number;
}

export interface IPaginationProps extends PaginationProps {
  onChangePage: (page: number, pageSize: number) => void;
  //onChangePerPage: (perPage: number) => void;
  textPrev?: string | React.ReactNode;
  textNext?: string | React.ReactNode;
  optionPerPage?: TypeOptionPerPage[];
  defaultPageSize?: number;
  page: number;
  perPage: number;
}

export interface ITableProps extends TableProps<any> {
  hideHeaderBorder?: boolean;
  totalData: number;
  titleTooltipSorter?: {
    asc?: string;
    desc?: string;
    none?: string;
  };
  paginationProps: IPaginationProps;
  onChange: (pagination: any, filters: any, sorter: any) => void;
  sortList: any[];
  hidden?: boolean;
}
