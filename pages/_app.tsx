import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
