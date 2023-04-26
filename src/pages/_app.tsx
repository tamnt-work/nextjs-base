import '@/assets/styles/globals.scss';
import '@/assets/styles/vendors/antd.min.css';
import SEO from '@/components/SEO';
import DefaultLayout from '@/layouts/DefaultLayout';
import { StyleProvider } from '@ant-design/cssinjs';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { FC, ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <StyleProvider hashPriority="low">
      <SEO title={pageProps.title} />
      <RecoilRoot>
        <RecoilNexus />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </StyleProvider>
  );
};

export default App;
