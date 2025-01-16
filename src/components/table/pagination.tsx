import { Pagination } from "antd";
import React from "react";
import { IPaginationProps } from './interface';

const App: React.FC<IPaginationProps> = (props) => {

  console.log("props : ",props)
  //const onChange: PaginationProps["onChange"] = (page) => {};

  // const itemRender = useCallback(
  //   (_: any, type: any, originalElement: any) => {
  //     if (type === "prev") {
  //       return <a>{textPrev}</a>;
  //     }
  //     if (type === "next") {
  //       return <a>{textNext}</a>;
  //     }
  //     return originalElement;
  //   },
  //   [textPrev, textNext]
  // );
  const {
    textPrev= "Previous",
    textNext= "Next",
    optionPerPage= [
      {
        value: 5,
      },
      {
        value: 10,
      },
      {
        value: 20,
      },
      {
        value: 30,
      },
    ],
    perPage=20,
    page=1,
    total=0,
    size="default",
    onChangePage,
    disabled
  } = props

  return (
    <div className="flex align-center mt-4">
      <div className="justify-start" style={{ flexGrow: "1" }}>
        <span>แสดง {page * perPage > (total || 0) ? (total || 0) : page * perPage} จาก {total || 0} รายการ</span>
      </div>
      <div className="flex align-center justify-end gap1">
        {/* แสดงรายการ :
        <Select
          onChange={onChangePerPage}
          options={optionPerPage}
          value={perPage}
        /> */}
        <Pagination
          current={page}
          onChange={onChangePage}
          total={total}
          //itemRender={itemRender}
          showSizeChanger//={false}
          showQuickJumper
          //defaultPageSize={defaultPageSize}
          size={size}
          pageSize={perPage}
          disabled={disabled}
        />
        {/* <Input
          style={{width:"3rem"}}
          onChange={(e)=>{
            if(!isNaN(Number(e.target.value))) {
              onChangePerPage(Number(e.target.value))
            }
          }}
        /> */}
      </div>
    </div>
  );
};

// App.defaultProps = {
//   textPrev: "Previous",
//   textNext: "Next",
//   optionPerPage: [
//     {
//       value: 5,
//     },
//     {
//       value: 10,
//     },
//     {
//       value: 20,
//     },
//     {
//       value: 30,
//     },
//   ],
//   perPage:20,
//   page:1,
//   total:0,
//   size:"default"
// };

export default React.memo(App);
