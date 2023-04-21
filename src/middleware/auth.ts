import { SESSION_NAME } from '@/constants/common';
import { ROUTE_PAGE } from '@/constants/route-page';
import {
  GetServerSideHandlerResult,
  ModifiedGetServerSidePropsContext,
  WithSessionProps,
  withSession,
} from '@/lib/session';

export const withAuth = <P extends WithSessionProps>(
  handler: (context: ModifiedGetServerSidePropsContext<P>) => Promise<GetServerSideHandlerResult>,
) => {
  return withSession(async (context: ModifiedGetServerSidePropsContext<P>) => {
    const user = context.req.session.get(SESSION_NAME.USER);

    if (!user) {
      return {
        redirect: {
          destination: ROUTE_PAGE.LOGIN,
          permanent: false,
        },
      };
    }

    return handler(context);
  });
};
