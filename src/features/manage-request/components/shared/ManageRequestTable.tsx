import Table from "@/components/table/v2/Table";
import { ColumnType } from "antd/lib/table";
import { ManageRequestTableType } from "../../utils/responseType";
import { EmptyStatus } from "@/components/emptyStatus";
// import { emptyStatus } from "@/components/emptyStatus";

type Props = {};

const ManageRequestTable = (props: Props) => {
  const columns: ColumnType<ManageRequestTableType>[] = [
    {
      title: "เขต / เทศบาล",
      dataIndex: "muni_name",
      width: "10rem",
    },
    {
      title: "เลขคำร้อง",
      dataIndex: "request_id",
      width: "10rem",
      sorter: true,
    },
    {
      title: "ประเภทคำร้อง",
      dataIndex: "request_type",
      width: "12rem",
    },
    {
      title: "ประเภททรัพย์",
      dataIndex: "asset_type",
      width: "10rem",
    },
    {
      title: "วันที่ยื่น",
      dataIndex: "request_date",
      width: "8rem",
      sorter: true,
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      width: "10rem",
      align: "left",
    },
    {
      title: "",
      dataIndex: "action",
      width: "10rem",
      fixed: "right",
    },
  ];

  const dataSource: ManageRequestTableType[] = [
    {
      muni_name: "เขต 1",
      request_id: "REQ001",
      request_type: "ประเภท A",
      asset_type: "ทรัพย์ A",
      request_date: "2023-10-01",
      status: "ดำเนินการ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 2",
      request_id: "REQ002",
      request_type: "ประเภท B",
      asset_type: "ทรัพย์ B",
      request_date: "2023-10-02",
      status: "รอการอนุมัติ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 3",
      request_id: "REQ003",
      request_type: "ประเภท C",
      asset_type: "ทรัพย์ C",
      request_date: "2023-10-03",
      status: "อนุมัติ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 4",
      request_id: "REQ004",
      request_type: "ประเภท D",
      asset_type: "ทรัพย์ D",
      request_date: "2023-10-04",
      status: "ปฏิเสธ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 5",
      request_id: "REQ005",
      request_type: "ประเภท E",
      asset_type: "ทรัพย์ E",
      request_date: "2023-10-05",
      status: "ดำเนินการ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 6",
      request_id: "REQ006",
      request_type: "ประเภท F",
      asset_type: "ทรัพย์ F",
      request_date: "2023-10-06",
      status: "รอการอนุมัติ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 7",
      request_id: "REQ007",
      request_type: "ประเภท G",
      asset_type: "ทรัพย์ G",
      request_date: "2023-10-07",
      status: "อนุมัติ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 8",
      request_id: "REQ008",
      request_type: "ประเภท H",
      asset_type: "ทรัพย์ H",
      request_date: "2023-10-08",
      status: "ปฏิเสธ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 9",
      request_id: "REQ009",
      request_type: "ประเภท I",
      asset_type: "ทรัพย์ I",
      request_date: "2023-10-09",
      status: "ดำเนินการ",
      action: "ดูรายละเอียด",
    },
    {
      muni_name: "เขต 10",
      request_id: "REQ010",
      request_type: "ประเภท J",
      asset_type: "ทรัพย์ J",
      request_date: "2023-10-10",
      status: "รอการอนุมัติ",
      action: "ดูรายละเอียด",
    },
  ];

  return (
    <div className="pt-2">
      <Table
        rootClassName="table-rounded-none table-disable-border header-bright-gray table-disable-border-bottom"
        columns={columns}
        dataSource={[]}
        // dataSource={dataSource}
        // loading={true}
        // scroll={tableScroll}
        // rowKey={"id"}
        // style={tableStyle}
        // paginationProps={tablePaginationProps}
        // rowSelection={tableRowSelection}
        // onChange={onChange}
        // onRow={_onRow}
        locale={{
          // emptyText: emptyStatus(true),
          emptyText: (
            <EmptyStatus
              status="empty"
              title="ไม่พบคำร้องของคุณ"
              subTitle={
                <>
                  <p>เริ่มต้นสร้างคำร้องของคุณ</p>
                  <p>ด้วยการกดปุ่ม “ สร้างคำร้องใหม่ “</p>
                </>
              }
            />
          ),
        }}
        style={{
          overflowX: "auto",
        }}
        scroll={{ x: 1190 }}
        paginationProps={{
          total: 100,
          defaultCurrent: 1,
          pageSize: 10,
          showSizeChanger: true,
          size: "default",
          classnamePagination: "px-8",
          hideText: true,
        }}
      />
    </div>
  );
};

export default ManageRequestTable;
