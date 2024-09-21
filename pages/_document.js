import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">  
      <meta charset="utf-8" />
      <title>İsmail Caner</title>
      <link rel="preconnect" href="https://v5.airtableusercontent.com"></link>
      <meta name="description" content="Photographer, coffee lover and minimalist." />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://ismailcaner.com/" />
      <meta property="og:title" content="İsmail Caner" />
      <meta property="og:description" content="Photographer, coffee lover and minimalist." />
      <meta property="og:url" content="https://ismailcaner.com/" />
      <meta property="og:site_name" content="İsmail Caner" />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:image" content="https://ismailcaner.com/images/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="İsmail Caner" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="İsmail Caner" />
      <meta name="twitter:description" content="Photographer, coffee lover and minimalist." />
      <meta name="twitter:image" content="https://ismailcaner.com/images/og.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="https://read.cv/favicon.ico" type="image/x-icon"/>
      <link rel="preload" href="https://read.cv/favicon.ico"></link>
    <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
