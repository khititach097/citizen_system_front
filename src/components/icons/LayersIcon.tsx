import React from 'react';
import { MdLayers } from 'react-icons/md';

type IconProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const LayersIcon: React.FC<IconProps> = (props) => {
  const { className = "", ...iconProps } = props;

  return (
    <span
      className={`inline-flex items-center bg-primary rounded-full p-1 mr-2 text-white ${className}`}
      {...iconProps}
    >
      <MdLayers />
    </span>
  );
};

export default React.memo(LayersIcon);
