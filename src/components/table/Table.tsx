import React, { useMemo } from "react";
import localeValues from "antd/lib/locale/default";
import Pagination from "./pagination";
import Table from "antd/lib/table";
import { LoadingOutlined } from "@ant-design/icons";
import { ITableProps } from "./interface";

const TableComponent: React.FC<ITableProps> = props => {

  const {
    hideHeaderBorder= true,
    locale= undefined
  } = props

  const localeValuesTable = useMemo(() => {
    return localeValues["Table"];
  }, []);

  const genSorterColumns = useMemo(() => {
    if (props?.sortList?.length > 1) {
      const current_sort_index = props?.sortList[0][0];
      const current_sort_direction = props?.sortList[0][1];
      return props.columns?.map((col: any) => {
        if (col.dataIndex === current_sort_index) {
          col.defaultSortOrder = current_sort_direction === "asc" ? "ascend" : "descend";
        }
        return col;
      });
    }
    return props.columns;
  }, [props?.sortList, props.columns]);

  const genClassName = useMemo(() => {
    return `${hideHeaderBorder == true ? "hide-header-border" : ""} ${props.className}`;
  }, [props.className, hideHeaderBorder]);

  // const sizePagination = useMemo(() => {
  //   if (props?.size === "small") return "small";
  //   return "default";
  // }, [props?.size]);

  const setToolTipTitle = useMemo(() => {
    const result = { ...localeValuesTable };
    if (props.titleTooltipSorter || props.titleTooltipSorter) {
      props.locale = {
        ...locale,
        triggerDesc: props.titleTooltipSorter?.desc || localeValuesTable?.triggerDesc,
        triggerAsc: props.titleTooltipSorter?.asc || localeValuesTable?.triggerAsc,
        cancelSort: props.titleTooltipSorter?.none || localeValuesTable?.cancelSort
      };
      return props.locale;
    }
    result.selectionAll = "เลือกทั้งหมด";
    result.selectNone = "ยกเลิกทั้งหมด";
    return result;
  }, [localeValuesTable, locale, props]);

  const defaultRowSelection = useMemo(() => {
    const result = {
      selections: [Table.SELECTION_ALL, Table.SELECTION_NONE]
    };
    return result;
  }, []);

  const _loading = useMemo(() => {
    let propLoading: any;

    if (typeof props.loading === "boolean") {
      propLoading = {
        indicator: <LoadingOutlined style={{ fontSize: 36, color: "#01AA7F" }} spin  />,
        spinning: props.loading ? props.loading : false,
      };
    } else {
      propLoading = {
        indicator: <LoadingOutlined style={{ fontSize: 36, color: "#01AA7F" }} spin  />,
        spinning: false,
        ...props.loading,
      }
    }

    return propLoading;
  }, [props.loading]);

  return (
    <div className="mt-5 z-5 grid animated animatedFadeInUp fadeInUp" hidden={props.hidden}>
      <Table
        {...props}
        loading={_loading}
        rowSelection={props.rowSelection ? { ...defaultRowSelection, ...props.rowSelection } : undefined}
        locale={setToolTipTitle}
        className={`${genClassName}`}
        pagination={false}
        columns={genSorterColumns}
        scroll={{ x: "1280px" }}
      />
      {props.pagination === false ? (
        ""
      ) : (
        <Pagination total={props.totalData} {...props.paginationProps} />
      )}
    </div>
  );
};

// TableComponent.defaultProps = {
//   hideHeaderBorder: true,
//   locale: undefined
// };

export default React.memo(TableComponent);
