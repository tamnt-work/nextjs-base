import '@/assets/styles/pages/login/index.module.scss';
import { ROUTE_PAGE } from '@/constants/route-page';
import BlankLayout from '@/layouts/BlankLayout';
import { withGuest } from '@/middleware/guest';
import AuthService from '@/modules/auth/auth.service';
import { LoginDto } from '@/modules/auth/dto/login.dto';
import { Button } from 'antd';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NextPageWithLayout } from '../_app';

const LoginPage: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [form, setForm] = useState(new LoginDto());

  const onLogin = async () => {
    try {
      await AuthService.login(form);

      router.push(ROUTE_PAGE.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => onLogin()}>
        {t('common:actions.login')}
      </Button>
    </>
  );
};

LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

LoginPage.metadata = {
  title: 'Login',
};

export const getServerSideProps: GetServerSideProps = withGuest(async () => {
  return {
    props: {},
  };
});

export default LoginPage;
