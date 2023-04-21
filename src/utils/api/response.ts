import { IServerResponse } from '@/lib/core/IServerResponse';
import { NextApiResponse } from 'next';
import StatusCode from 'status-code-enum';

const handleError = (res: NextApiResponse, statusCode: StatusCode) => {
  return res.status(statusCode).end();
};

export const ApiResponse = (res: NextApiResponse) => ({
  /**
   * Return a 200 OK response
   * @param payload
   * @returns
   */
  ok: <T = any>(payload?: T): IServerResponse<T> | void => {
    const data: IServerResponse<T> = {
      data: payload,
      status: StatusCode.SuccessOK,
    };

    return res.status(StatusCode.SuccessOK).json(data);
  },

  /**
   * Return a 201 Created response
   * @returns
   */
  badRequest: (): NextApiResponse => {
    return handleError(res, StatusCode.ClientErrorBadRequest);
  },

  /**
   * Return a 401 Unauthorized response
   * @returns
   */
  unauthorized: (): NextApiResponse => {
    return handleError(res, StatusCode.ClientErrorUnauthorized);
  },

  /**
   * Return a 403 Forbidden response
   * @returns
   */
  notFound: (): NextApiResponse => {
    return handleError(res, StatusCode.ClientErrorNotFound);
  },

  /**
   * Return a 405 Method Not Allowed response
   * @returns
   */
  methodNotAllowed: (): NextApiResponse => {
    return handleError(res, StatusCode.ClientErrorMethodNotAllowed);
  },

  /**
   * Return a 500 Internal Server Error response
   * @returns
   */
  internalServerError: (): NextApiResponse => {
    return handleError(res, StatusCode.ServerErrorInternal);
  },

  /**
   * Return a 502 Bad Gateway response
   * @returns
   */
  badGateway: (): NextApiResponse => {
    return handleError(res, StatusCode.ServerErrorBadGateway);
  },
});
