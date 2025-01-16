/*
    *
    this table not reference api , use source data from client
    * 
*/

import { Table } from "antd";
import { Field } from "components/field";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
export interface TableCustomProps {
  columns: Record<string, any>[];
  dataSource: any;
  loading: boolean
}

const TableCustom: React.FC<TableCustomProps> = (props) => {
  const { columns, dataSource , loading } = props;

  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  useEffect(() => {
    if (!document.getElementById('goToPageId')) {
    const elementPerPage = document.getElementsByClassName(
      "ant-pagination-options"
    )[0];
    if (elementPerPage) {
      elementPerPage.classList.add("!flex", "!items-center", "!gap-x-2");
      const newElement = document.createElement("div");
      newElement.id = "goToPageId";
      newElement.innerHTML = `
        <div>
          Go to
          <input 
                id='goToField'
                style="
                  border: 1px solid #d9d9d9;
                  border-radius: 6px;
                  width: 2.5rem;
                  padding:0 0.5rem 0 0.5rem;
                  height: 32px;
                "
            />
            </div> 
          `;
      elementPerPage.appendChild(newElement);
    }
    
    const goToElement = document.getElementById('goToField')
    goToElement?.addEventListener('change',(e) => {
      // if (e.key === 'Enter') {
        const value = (e.target as HTMLInputElement).value;
        // Perform the desired action here, such as setting the page
        setPage(Number(value)); // Assuming setPage is a function to change pages
      // }
    })
    }
  }, [dataSource,columns,loading]);

  

  return (
    <div className="relative">
      <Table
        {...props}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        // rowKey={"id"}
        // style={tableStyle}
        onChange={() => {}}
        scroll={{ x: "max-content" }}
        pagination={{
          defaultPageSize: perPage,
          position: ["bottomRight"],
          className: "mr-4",
          total: dataSource?.length || 0,
          showSizeChanger: true,
          current: page,
          onChange: (page, pageSize) => {
            setPage(page);
            setPerPage(pageSize);
          }, //this only fires if I
        }}
      />
      <div className="absolute bottom-5 ">
        แสดง {perPage * page - perPage + 1}-{dataSource?.length < perPage ?  dataSource?.length:  perPage * page} จาก{" "}
        {dataSource?.length || 0} รายการ
      </div>
      {/* <input
        id="goToField"
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "6px",
          width: "4rem",
          height: "40px",
        }}
      />
      <div className="absolute bottom-3 right-0 flex items-center gap-x-2">
        Go to{" "}
        <Field.Number
          id={"land_no"}
          name={"land_no"}
          size="large"
          onChange={({ target }) => {}}
          width={10}
        />
      </div> */}
    </div>
  );
};

export default TableCustom;
