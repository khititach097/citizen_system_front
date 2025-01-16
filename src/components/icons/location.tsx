import React from "react";

const MapPinIcon: React.FC<any> = ({
  width= "70",
  height= "91",
  fill= "#ED4034"
}) => {

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3982_52642)">
        <path
          d="M66 31.2058C66 45.4109 47.1094 70.7005 38.8266 81.135C36.8406 83.6217 33.1594 83.6217 
                31.1734 81.135C22.8906 70.7005 4 45.4109 4 31.2058C4 13.9776 17.8854 0 35 0C52.1146 0 66 13.9776 66 
                31.2058Z"
          fill={fill}
        />
        <path
          d="M64 31.2058C64 34.366 62.9355 38.3216 61.0745 42.7592C59.2273 47.164 56.6624 51.8883 53.8138 56.5399C48.1184 
                65.8399 41.3836 74.6967 37.2627 79.8883C36.0776 81.3705 33.9228 81.3706 32.7376 79.8886C28.6167 74.697 21.8817 
                65.8401 16.1862 56.5399C13.3376 51.8883 10.7727 47.164 8.92545 42.7592C7.06445 38.3216 6 34.366 6 31.2058C6 
                15.0697 19.0024 2 35 2C50.9976 2 64 15.0697 64 31.2058Z" stroke="white" stroke-width="4"
        />
      </g>
      <defs>
        <filter id="filter0_d_3982_52642" x="0" y="0" width={width} height={height} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3982_52642" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3982_52642" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

// MapPinIcon.defaultProps = {
//   width: "70",
//   height: "91",
//   fill: "#ED4034"
// };

export default React.memo(MapPinIcon);
