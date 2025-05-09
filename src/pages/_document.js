import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="İsmail Caner'in kişisel web sitesi" />
        <meta name="keywords" content="ismail caner, web geliştirici, yazılım, blog" />
        <meta name="author" content="İsmail Caner" />
        <meta property="og:title" content="İsmail Caner" />
        <meta property="og:description" content="İsmail Caner'in kişisel web sitesi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caner.dev" />
        <meta property="og:image" content="https://caner.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İsmail Caner" />
        <meta name="twitter:description" content="İsmail Caner'in kişisel web sitesi" />
        <meta name="twitter:image" content="https://caner.dev/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
