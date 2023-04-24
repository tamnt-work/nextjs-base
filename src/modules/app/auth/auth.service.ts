import { ApiResponse } from '@/lib/api';
import { IServerResponse } from '@/lib/core/IServerResponse';
import { appApi } from '@/utils/appApi';
import { AppLoginDto } from './dto/login.dto';

const prefix = '/auth';

const AppAuthService = {
  /**
   * Login to the application
   * @param payload
   * @returns
   */
  login(payload: AppLoginDto): Promise<ApiResponse<IServerResponse>> {
    return appApi.post<IServerResponse>(`${prefix}/login`, {
      body: payload,
    });
  },

  /**
   * Logout from the application
   * @returns
   */
  logout(): Promise<ApiResponse> {
    return appApi.post(`${prefix}/logout`);
  },
};

export default AppAuthService;
