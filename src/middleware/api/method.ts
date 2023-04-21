import { HttpMethod } from '@/enums/http-method';
import { ApiResponse } from '@/utils/api/response';
import { NextApiRequest, NextApiResponse } from 'next';

export const withMethod = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<NextApiResponse> | NextApiResponse | void,
  method: HttpMethod,
) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== method) {
      return ApiResponse(res).methodNotAllowed();
    }

    return handler(req, res);
  };
};
