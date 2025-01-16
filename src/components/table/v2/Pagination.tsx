import React from "react";

import { Pagination as AntPagination } from "antd";
import type { PaginationProps as AntPaginationProps } from "antd";

export interface PaginationProps
  extends Omit<AntPaginationProps, "onChange" | "current"> {
  page?: number;
  showPagination?: boolean;
  onChangePage?: AntPaginationProps["onChange"];
  classnamePagination?: string;
  hideText?: boolean;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    showPagination,
    page,
    pageSize,
    total,
    onChangePage,
    classnamePagination = "",
    hideText = false,
    ...paginationProps
  } = props;

  const textPaginationInfo = React.useMemo(() => {
    const currentPage = page || 0;
    const currentPageSize = pageSize || 0;
    const totalData = total || 0;
    const textCurrentDisplayTotal =
      currentPage * currentPageSize < totalData
        ? currentPage * currentPageSize
        : totalData;
    return `แสดง ${textCurrentDisplayTotal} จาก ${totalData} รายการ`;
  }, [page, pageSize, total]);

  return (
    <>
      {showPagination && (
        <div className={` flex align-center mt-4 ${classnamePagination}`}>
          <div className="justify-start" style={{ flexGrow: "1" }}>
            <span className={`${hideText ? "hidden" : ""}`}>
              {textPaginationInfo}
            </span>
          </div>
          <div className="flex align-center justify-end gap1">
            <AntPagination
              current={page}
              pageSize={pageSize}
              total={total}
              onChange={onChangePage}
              showSizeChanger
              showQuickJumper
              size="small"
              {...paginationProps}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Pagination);
