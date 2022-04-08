import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { messages, Locale, PathNames } from '@/features/intl';
import { LocaleSwitcher } from '@/components';

import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global';

import '@fontsource/archivo/400.css';
import '@fontsource/archivo/500.css';
import '@fontsource/archivo/700.css';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { defaultLocale, locale, pathname } = useRouter();

  const currentLocale = (locale || 'pt-BR') as Locale;
  const currentMessages = messages[currentLocale][pathname as PathNames];

  return (
    <IntlProvider
      locale={currentLocale}
      defaultLocale={defaultLocale}
      messages={currentMessages}
    >
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          </Head>

          <GlobalStyle />

          <ToastContainer />

          <Component {...pageProps} />

          <LocaleSwitcher />
        </ThemeProvider>
      </SessionProvider>
    </IntlProvider>
  );
}

export default MyApp;
