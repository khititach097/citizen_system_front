import React from 'react';
import { PiMapTrifoldBold } from 'react-icons/pi';

type IconProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const MapIcon: React.FC<IconProps> = (props) => {
  const { className = "", ...iconProps } = props;
  return (
    <span 
      className={`inline-flex items-center bg-primary rounded-full p-1 mr-2 text-white ${className}`} 
      {...iconProps}
    >
      <PiMapTrifoldBold />
    </span>
  );
};

export default React.memo(MapIcon);
