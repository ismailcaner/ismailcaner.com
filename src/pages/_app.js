import Layout from '@/components/customs/Layout/component';
import Head from "next/head";
import '@/globals.css';
import { ThemeProvider } from "@/components/customs/Theme/theme-provider";

function MyApp({ Component, pageProps: metadata }) {
  const pageTitle = metadata.title ? `${"İsmail Caner - " + metadata.title}` : "";
  const pageDescription = metadata.desc || "";
  const url = metadata.url || 'ismailcaner.com';
  const ogImage = `https://ismailcaner.com/api/og?title=${pageTitle}&description=${pageDescription}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={url}/>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription}/>
        <meta property="twitter:domain" content={url}/>
        <meta property="twitter:url" content={url}/>

        <link rel="icon" href="https://read.cv/favicon.ico" type="image/x-icon"/>
        <link rel="preload" href="https://read.cv/favicon.ico"></link>
      </Head>
      
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Layout>
          <Component {...metadata} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
