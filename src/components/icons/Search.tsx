import { memo } from "react";
const Search: React.FC<any> = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M15.0262 13.8478L18.5953 17.4162L17.4162 18.5953L13.8478 15.0262C12.5201 16.0905 10.8687 16.6694 9.16699 16.667C5.02699 16.667 1.66699 13.307 1.66699 9.16699C1.66699 5.02699 5.02699 1.66699 9.16699 1.66699C13.307 1.66699 16.667 5.02699 16.667 9.16699C16.6694 10.8687 16.0905 12.5201 15.0262 13.8478ZM13.3545 13.2295C14.4121 12.1419 15.0027 10.684 15.0003 9.16699C15.0003 5.94366 12.3895 3.33366 9.16699 3.33366C5.94366 3.33366 3.33366 5.94366 3.33366 9.16699C3.33366 12.3895 5.94366 15.0003 9.16699 15.0003C10.684 15.0027 12.1419 14.4121 13.2295 13.3545L13.3545 13.2295Z"
          fill="#A0AEC0"
        />
      </svg>
    </>
  );
};

export default memo(Search);
