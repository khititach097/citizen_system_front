import { useRouter } from "next/router";

const AssetMapDetailById = () => {
  const router = useRouter();
  const asset_id = router.query?.asset_id;
  console.log("asset_id ***>>>", asset_id);
  return <>AssetMapDetailById</>;
};

export default AssetMapDetailById;
