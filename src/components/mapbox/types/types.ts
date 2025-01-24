// export interface MapboxProps extends React.PropsWithChildren {
//   mapRef?: React.MutableRefObject<mapboxgl.Map | undefined>;
//   initOptions?: Omit<mapboxgl.MapboxOptions, "container" | "accessToken">
//   className?: string;
//   style?: React.CSSProperties;
//   controls?: {
//     fullscreen?: boolean;
//   }
// }

export interface MapboxProps extends React.PropsWithChildren {
  mapRef?: React.RefObject<mapboxgl.Map | undefined>;
  initOptions?: Omit<mapboxgl.MapOptions, "container" | "accessToken">;
  className?: string;
  style?: React.CSSProperties;
  controls?: { fullscreen?: boolean; };
}