import { HttpMethod } from '@/enums/http-method';
import { withApiSession } from '@/lib/session';
import { withMethod } from '@/middleware/api/method';
import { ApiResponse } from '@/utils/api/response';
import { NextApiResponse } from 'next';

type Data = {
  done: boolean;
};

export default withMethod(
  withApiSession(async function handler(req, res: NextApiResponse<Data>) {
    await req.session.destroy();

    return ApiResponse(res).ok();
  }),
  HttpMethod.Post,
);
