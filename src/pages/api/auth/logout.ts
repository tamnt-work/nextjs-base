import { withApiSession } from '@/lib/session';
import { NextApiResponse } from 'next';
import StatusCode from 'status-code-enum';

type Data = {
  done: boolean;
};

export default withApiSession(async function handler(req, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(StatusCode.ClientErrorMethodNotAllowed).end();

  await req.session.destroy();

  res.status(StatusCode.SuccessOK).json({ done: true });
});
