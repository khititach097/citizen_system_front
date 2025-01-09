import "@/styles/globals.css";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSansThai.className}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </div>
  );
}
