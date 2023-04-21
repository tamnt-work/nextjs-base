import { SESSION_NAME } from '@/constants/common';
import { withApiSession } from '@/lib/session';
import { NextApiResponse } from 'next';
import StatusCode from 'status-code-enum';

type Data = {
  done: boolean;
};

export default withApiSession(async function handler(req, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(StatusCode.ClientErrorMethodNotAllowed).end();
  }

  req.session.set(SESSION_NAME.USER, req.body);
  await req.session.save();

  res.status(StatusCode.SuccessOK).json({ done: true });
});
