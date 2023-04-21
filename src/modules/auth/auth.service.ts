import { ApiResonse } from '@/lib/api';
import { IServerResponse } from '@/lib/core/IServerResponse';
import { appApi } from '@/utils/appApi';
import { LoginDto } from './dto/login.dto';

const prefix = '/auth';

const AuthService = {
  /**
   * Login to the application
   * @param payload
   * @returns
   */
  login(payload: LoginDto): Promise<ApiResonse<IServerResponse>> {
    return appApi.post<IServerResponse>(`${prefix}/login`, {
      body: payload,
    });
  },

  /**
   * Logout from the application
   * @returns
   */
  logout(): Promise<ApiResonse> {
    return appApi.post(`${prefix}/logout`);
  },
};

export default AuthService;
