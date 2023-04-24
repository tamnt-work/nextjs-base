import { ROUTE_PAGE } from '@/constants/route-page';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

import { withAuth } from '@/middleware/auth';
import AuthService from '@/modules/auth/auth.service';
import { Button } from 'antd';
import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';

const HomePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const onLogout = async () => {
    try {
      await AuthService.logout();

      router.push(ROUTE_PAGE.LOGIN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={() => onLogout()}>{t('common:actions.logout')}</Button>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async ({ locale }) => {
  const t = await getT(locale, 'home');
  return {
    props: {
      title: t('home:title'),
    },
  };
});

export default HomePage;
