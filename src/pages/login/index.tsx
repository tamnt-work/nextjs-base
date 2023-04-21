import '@/assets/styles/pages/login/index.module.scss';
import SEO from '@/components/SEO';
import { ROUTE_PAGE } from '@/constants/route-page';
import BlankLayout from '@/layouts/BlankLayout';
import { withGuest } from '@/middleware/guest';
import AuthService from '@/modules/auth/auth.service';
import { UserModel } from '@/modules/user/user.model';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';

const LoginPage: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const onLogin = async () => {
    try {
      await AuthService.login(new UserModel());

      router.push(ROUTE_PAGE.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SEO title={t('auth:title').toString()} />
      <button onClick={() => onLogin()}>{t('common:actions.login')}</button>
    </>
  );
};

LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export const getServerSideProps: GetServerSideProps = withGuest(async () => {
  return {
    props: {},
  };
});

export default LoginPage;