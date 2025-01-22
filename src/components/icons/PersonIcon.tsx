import React from 'react';
import { MdOutlinePerson } from 'react-icons/md';

const PersonIcon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  const {
    className = "",
    ...spanProps
  } = props;

  return (
    <span
      className={`inline-flex items-center bg-primary rounded-full p-1 mr-2 text-white ${className}`}
      {...spanProps}
    >
      <MdOutlinePerson />
    </span>
  );
};

export default React.memo(PersonIcon);
