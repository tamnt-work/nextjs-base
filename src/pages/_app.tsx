import '@/styles/globals.css';
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
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <RecoilRoot>
      <RecoilNexus />
      {getLayout(<Component {...pageProps} />)}
    </RecoilRoot>
  );
};

export default App;
