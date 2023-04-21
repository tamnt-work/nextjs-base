import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiRequest, NextApiResponse, Redirect } from 'next';
import { Handler, Session, withIronSession } from 'next-iron-session';
import { ScriptProps } from 'next/script';
import { ironOptions } from './config';

export type WithSessionProps = {
  session: Session;
};

export type ModifiedGetServerSidePropsContext<P extends Record<string, any> = Record<string, any>> =
  GetServerSidePropsContext<P> & {
    req: WithSessionProps;
  };

export type GetServerSideHandlerResult = GetServerSidePropsResult<ScriptProps | Redirect>;

/**
 * Apply session to API route
 * @param handler
 * @returns
 */
export const withApiSession = (handler: Handler<NextApiRequest, NextApiResponse>) => {
  return withIronSession(handler, ironOptions);
};

/**
 * Apply session to page
 * @param handler
 * @returns
 */
export const withSession = <P extends WithSessionProps>(
  handler: (context: ModifiedGetServerSidePropsContext<P>) => Promise<GetServerSideHandlerResult>,
) => {
  return withIronSession(handler, ironOptions);
};
