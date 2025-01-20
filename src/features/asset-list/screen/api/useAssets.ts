import axiosInstance from '@/utils/hook/api/axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// Query key factory
export const assetKeys = {
  all: ['assets'] as const,
  lists: () => [...assetKeys.all, 'list'] as const,
  list: (filters: Record<string, any>) => [...assetKeys.lists(), filters] as const,
  details: () => [...assetKeys.all, 'detail'] as const,
  detail: (id: string) => [...assetKeys.details(), id] as const,
};

// Get single asset by ID
export function useGetAssetByAssetId(assetId: string) {
  return useQuery({
    queryKey: assetKeys.detail(assetId),
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/api/v1/assets/get_asset_by_asset_id/${assetId}`
      );
      return data;
    },
    // Enable the query only if we have an assetId
    enabled: !!assetId,
  });
}
