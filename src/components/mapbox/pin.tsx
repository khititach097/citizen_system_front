import * as React from 'react';

// const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
//   c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
//   C20.1,15.8,20.2,15.8,20.2,15.7z`;

// const pinStyle = {
//   cursor: 'pointer',
//   fill: '#d00',
//   stroke: 'none'
// };

function Pin({size = 20}) {
  return (
    // <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
    //   <path d={ICON} />
    // </svg>
    <svg width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_8629_154340)">
        <path d="M26.025 43.0562C21.675 37.7762 12 24.979 12 17.7909C12 9.0697 19.1633 2 28 2C36.8333 2 44 9.0697 44 17.7909C44 24.979 34.25 37.7762 29.975 43.0562C28.95 44.3146 27.05 44.3146 26.025 43.0562ZM28 23.0545C30.9417 23.0545 33.3333 20.6941 33.3333 17.7909C33.3333 14.8876 30.9417 12.5272 28 12.5272C25.0583 12.5272 22.6667 14.8876 22.6667 17.7909C22.6667 20.6941 25.0583 23.0545 28 23.0545Z" fill="white"/>
        <path d="M26.2798 40.0937C22.4911 35.4581 14.0645 24.223 14.0645 17.9122C14.0645 10.2556 20.3035 4.04883 28 4.04883C35.6935 4.04883 41.9355 10.2556 41.9355 17.9122C41.9355 24.223 33.4435 35.4581 29.7202 40.0937C28.8274 41.1984 27.1726 41.1984 26.2798 40.0937ZM28 22.5334C30.5621 22.5334 32.6452 20.4611 32.6452 17.9122C32.6452 15.3634 30.5621 13.2911 28 13.2911C25.4379 13.2911 23.3548 15.3634 23.3548 17.9122C23.3548 20.4611 25.4379 22.5334 28 22.5334Z" fill="#CC0004"/>
        <ellipse cx="27.9658" cy="17.8781" rx="9.7823" ry="9.73171" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_dd_8629_154340" x="0" y="0" width="56" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_8629_154340"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8629_154340"/>
          <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_8629_154340"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_8629_154340" result="effect2_dropShadow_8629_154340"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_8629_154340" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(Pin);