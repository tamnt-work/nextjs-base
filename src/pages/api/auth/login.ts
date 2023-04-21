import { SESSION_NAME } from '@/constants/common';
import { HttpMethod } from '@/enums/http-method';
import { IServerResponse } from '@/lib/core/IServerResponse';
import { withApiSession } from '@/lib/session';
import { withMethod } from '@/middleware/api/method';
import { ApiResponse } from '@/utils/api/response';
import { NextApiResponse } from 'next';

export default withMethod(
  withApiSession(async function handler(req, res: NextApiResponse<IServerResponse>) {
    req.session.set(SESSION_NAME.USER, req.body);
    await req.session.save();

    return ApiResponse(res).ok();
  }),
  HttpMethod.Post,
);
