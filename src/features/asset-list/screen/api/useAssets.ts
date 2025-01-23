import axiosInstance from '@/utils/hook/api/axios';
import { useQuery, useQueries } from '@tanstack/react-query';
import { useMemo, useState, useEffect } from 'react';
import { AssetDataType } from '../../types/types';

// Query key factory
export const assetKeys = {
  all: ['assets'] as const,
  lists: () => [...assetKeys.all, 'list'] as const,
  list: (filters: Record<string, any>) => [...assetKeys.lists(), filters] as const,
  details: () => [...assetKeys.all, 'detail'] as const,
  detail: (id: string) => [...assetKeys.details(), id] as const,
  images: () => [...assetKeys.all, 'images'] as const,
  image: (imgId: string) => [...assetKeys.images(), imgId] as const,
};

// Get asset details by assetId
export function useGetAssetByAssetId(assetId: string) {
  return useQuery({
    queryKey: assetKeys.detail(assetId),
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/api/v1/assets/get_asset_by_asset_id/${assetId}`);
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch asset details');
      }
      return data?.data as AssetDataType;
    },
    enabled: !!assetId,
  });
}

// Get asset image by imgId
export function useGetAssetImage(imgId: string) {
  return useQuery({
    queryKey: assetKeys.image(imgId),
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/api/v1/s3/preview/${imgId}`, {
        responseType: 'blob',
      });
      const newBlob = new Blob([data], { type: 'image/jpg' });
      return URL.createObjectURL(newBlob);
    },
    enabled: !!imgId,
  });
}

// Custom hook to fetch all images for a list of imgIds
export function useGetAssetImages(imgIds: string[]) {
  const queryConfigs = useMemo(
    () =>
      imgIds.map((imgId) => ({
        queryKey: assetKeys.image(imgId),
        queryFn: async () => {
          const { data } = await axiosInstance.get(`/api/v1/s3/preview/${imgId}`, {
            responseType: 'blob',
          });
          const newBlob = new Blob([data], { type: 'image/jpg' });
          return URL.createObjectURL(newBlob);
        },
        enabled: !!imgId,
      })),
    [imgIds]
  );

  return useQueries({ queries: queryConfigs });
}