import styles from '@/assets/styles/pages/login/index.module.scss';
import { ROUTE_PAGE } from '@/constants/route-page';
import BlankLayout from '@/layouts/BlankLayout';
import { withGuest } from '@/middleware/guest';
import AuthService from '@/modules/auth/auth.service';
import { LoginDto } from '@/modules/auth/dto/login.dto';
import { yupSync } from '@/utils/validate';
import { Button, Form, Input } from 'antd';
import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { NextPageWithLayout } from '../_app';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});
type FormData = yup.InferType<typeof schema>;

const rules = [yupSync(schema)];

const LoginPage: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const onFinish = async (values: FormData) => {
    try {
      await AuthService.login(new LoginDto(values));

      router.push(ROUTE_PAGE.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['login-page']}>
      <Form
        labelCol={{ span: 8 }}
        className={styles['login-page__form']}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="email" label={t('login:content.email')} required rules={rules}>
          <Input placeholder={t('login:content.email')} />
        </Form.Item>
        <Form.Item name="password" label={t('login:content.password')} required rules={rules}>
          <Input.Password placeholder={t('login:content.password')} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" size="large" className={styles['login-page__button']} htmlType="submit">
            {t('common:actions.login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export const getServerSideProps: GetServerSideProps = withGuest(async ({ locale }) => {
  const t = await getT(locale, 'login');
  return {
    props: {
      title: t('login:title'),
    },
  };
});

export default LoginPage;
