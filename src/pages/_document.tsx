import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap"
        rel="stylesheet"
      />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
