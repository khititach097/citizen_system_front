import React from "react";

import { Table as AntTable } from "antd";
import Pagination from "./Pagination";
import { LoadingOutlined } from "@ant-design/icons";

import type { TableProps as AntTableProps } from "antd";
import type { PaginationProps } from "./Pagination";

export interface TableProps<RecordType = any>
  extends Omit<AntTableProps<RecordType>, "pagination"> {
  rootClassName?: string;
  hidden?: boolean;
  showPagination?: boolean;
  paginationProps?: PaginationProps;
}

const Table: React.FC<TableProps> = (props) => {
  const {
    hidden = false,
    loading,
    locale,
    showPagination = true,
    rootClassName,
    paginationProps,
    ...tableProps
  } = props;

  const _locale = React.useMemo<TableProps["locale"]>(
    () => ({
      selectionAll: "เลือกทั้งหมด",
      selectNone: "ยกเลิกทั้งหมด",
      selectInvert: "เลือกเฉพาะหน้าปัจจุบัน",
      triggerAsc: "เรียงจากน้อยไปมาก",
      triggerDesc: "เรียงจากมากไปน้อย",
      cancelSort: "ค่าเริ่มต้น",
      ...locale,
    }),
    [locale],
  );

  const _loading = React.useMemo(() => {
    let propLoading: any;

    if (typeof loading === "boolean") {
      propLoading = {
        indicator: (
          <LoadingOutlined style={{ fontSize: 36, color: "#01AA7F" }} spin />
        ),
        spinning: loading ? loading : false,
      };
    } else {
      propLoading = {
        indicator: (
          <LoadingOutlined style={{ fontSize: 36, color: "#01AA7F" }} spin />
        ),
        spinning: false,
        ...loading,
      };
    }

    return propLoading;
  }, [loading]);

  return (
    <div
      className={`mt-5 z-5 grid animated animatedFadeInUp fadeInUp ${rootClassName}`}
      hidden={hidden}
    >
      <AntTable
        {...tableProps}
        locale={_locale}
        loading={_loading}
        pagination={false}
      />

      <Pagination {...paginationProps} showPagination={showPagination} />
    </div>
  );
};

export default React.memo(Table);
