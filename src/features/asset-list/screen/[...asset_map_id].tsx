import { useRouter } from "next/router";
import useGetAsset from "./api/useAssets";
import { useEffect, useMemo, useState } from "react";
import Mapbox from "@/components/mapbox/Mapbox";
import { mapDataType } from "../types/types";


const AssetMapDetailById = () => {
  const router = useRouter();
  const asset_id = router.query?.asset_id;

  const { useGetAssetByAssetId } = useGetAsset();

  const [mapData, setMapData] = useState<mapDataType>({
    geometry: "",
    map_lat: 0,
    map_long: 0,
  });

  const {
    data: assetInfo,
    isLoading: isLoadingAsset,
    error,
  } = useGetAssetByAssetId(typeof asset_id === "string" ? asset_id : "");

  useEffect(() => {
    // if(assetInfo?.asset_type === "condo"){

    // }
    if (assetInfo?.asset_type === "land") {
      // console.log(
      //   "map data ***>>>",
      //   JSON.stringify({
      //     geometry: assetInfo.land_info.land_info_detail.map_geometry,
      //     map_lat: Number(assetInfo.land_info.land_info_detail.map_lat),
      //     map_long: Number(assetInfo.land_info.land_info_detail.map_long),
      //   })
      // );
      setMapData({
        geometry: assetInfo.land_info.land_info_detail.map_geometry,
        map_lat: Number(assetInfo.land_info.land_info_detail.map_lat),
        map_long: Number(assetInfo.land_info.land_info_detail.map_long),
      });
    }
  }, [assetInfo]);

  return (
    <div>
      <Mapbox mapData={mapData}/>
    </div>
  );
};

export default AssetMapDetailById;
