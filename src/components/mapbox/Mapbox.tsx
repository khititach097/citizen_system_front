import * as React from "react";
import { useState } from "react";
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapDataType } from "@/features/asset-list/types/types";
import Pin from "./pin";
import MapStyle from "./mapStyle";

interface MapboxProps {
  mapData: mapDataType;
}

function Mapbox(props: MapboxProps) {
  const { mapData } = props;

  const mapStyles = {
    default: "mapbox://styles/bedrocktech/cm00eso1q002g01r67j3vfq8y",
    satellite: "mapbox://styles/bedrocktech/cm00h3bip006f01pl4xmkdw3t",
  };

  const [mapStyle, setMapStyle] = useState(mapStyles.satellite);

  const pins = React.useMemo(
    () =>(
        <Marker
          longitude={-122.4}
          latitude={37.8}
          anchor="bottom"
        >
          <Pin />
        </Marker>),
    []
  );

  return (
    <>
              {/* <div className="mb-4 space-x-2">
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
        </div> */}
        {/* <Pin /> */}
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={mapStyle}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
      </Map>
      <MapStyle/>
    </>
  );
}

export default React.memo(Mapbox);
