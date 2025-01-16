import { memo } from "react";

type IconProps = {
  fill?:string,
  width?:string | number,
  height?:string | number
}

const ErrorEmotion: React.FC<IconProps> = ({
  fill = "#35373C",
  width = "100",
  height = "100"
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 57.5C38.35 57.5 28.45 64.8 24.45 75H75.55C71.55 64.8 61.65 57.5 50 57.5ZM29.1 50L34.4 44.7L39.7 
            50L45 44.7L39.7 39.4L45 34.1L39.7 28.8L34.4 34.1L29.1 28.8L23.8 34.1L29.1 39.4L23.8 44.7L29.1 50ZM49.95 
            0C22.35 0 0 22.35 0 50C0 77.65 22.35 100 49.95 100C77.55 100 100 77.65 100 50C100 22.35 77.6 0 49.95 0ZM50 
            90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90ZM70.9 28.8L65.6 
            34.1L60.3 28.8L55 34.1L60.3 39.4L55 44.7L60.3 50L65.6 44.7L70.9 50L76.2 44.7L70.9 39.4L76.2 34.1L70.9 28.8Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

// ErrorEmotion.defaultProps = {
//   fill:"#35373C",
//   width:"100",
//   height:"100"
// }

export default memo(ErrorEmotion);
