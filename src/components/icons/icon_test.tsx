
import { memo } from 'react';
const CircleIcon:React.FC<any> = (props) => {

  const {
    width= "44",
    height= "44",
    fill='grey',
  } = props

  return (
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill='none'
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.2" cx="19" cy="19" r="19" fill={fill} />
      </svg>
    </div>
  );
};

// CircleIcon.defaultProps = {
//   width: "44",
//   height: "44",
//   fill:'grey'
// };

export default memo(CircleIcon);
