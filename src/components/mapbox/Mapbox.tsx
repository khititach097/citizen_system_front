// import React from 'react'
// import mapboxgl, { FullscreenControl } from "mapbox-gl";
// import { MapboxProps } from './types/types';

// const accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

// const Mapbox: React.FC<MapboxProps> = (props) => {
//   const {
//     mapRef,
//     initOptions,
//     className,
//     style,
//     children,
//     controls = {
//       fullscreen: true
//     },
//   } = props;

//   const mapContainerRef = React.useRef<HTMLDivElement>(null);
//   const mapInstanceRef = React.useRef<mapboxgl.Map>(undefined)

//   React.useEffect(() => {
//     if (mapInstanceRef.current || !mapContainerRef.current) {
//       return;
//     }

//     mapInstanceRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: process.env.NEXT_PUBLIC_MAP_STYLE_DEFAULT,
//       accessToken,
//       attributionControl: false,
//       hash: true,
//       ...initOptions,
//     });

//     if (controls?.fullscreen) {
//       const fullscreenControl = new FullscreenControl();
//       if (!mapInstanceRef.current.hasControl(fullscreenControl)) {
//         mapInstanceRef.current.addControl(fullscreenControl, "bottom-right");
//       }
//     }

//     if (mapRef) {
//       mapRef.current = mapInstanceRef.current;
//     }

//     return () => {
//       if (mapInstanceRef.current) {
//         mapInstanceRef.current.remove()
//         mapInstanceRef.current = undefined;
//       }

//       if (mapRef) {
//         mapRef.current = undefined;
//       }
//     }
//   }, []);

//   return (
//     <div
//       ref={mapContainerRef}
//       className={className}
//       style={{
//         minWidth: "inherit",
//         minHeight: "inherit",
//         maxWidth: "inherit",
//         maxHeight: "inherit",
//         width: "inherit",
//         height: "inherit",
//         ...style,
//       }}
//     >{children}</div>
//   )
// }


// import * as React from 'react';
// import Map from 'react-map-gl';



// function Mapbox() {
//   return (
//     <Map
//       mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//       mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_DEFAULT} //this for google
//       // mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_SATELLITE} //this for sattlelite
//     />
//   );
// }
// export default React.memo(Mapbox)



import * as React from 'react';
import { useState } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Mapbox() {
  const mapStyles = {
    default: "mapbox://styles/bedrocktech/cm00eso1q002g01r67j3vfq8y",
    satellite: "mapbox://styles/bedrocktech/cm00h3bip006f01pl4xmkdw3t"
  };

  const [mapStyle, setMapStyle] = useState(mapStyles.satellite);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 space-x-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setMapStyle(mapStyles.default)}
        >
          Default Map
        </button>

        <button 
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setMapStyle(mapStyles.satellite)}
        >
          Satellite View
        </button>
        
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: 600, height: 400}}
        mapStyle={mapStyle}
      />
    </div>
  );
}

export default React.memo(Mapbox);