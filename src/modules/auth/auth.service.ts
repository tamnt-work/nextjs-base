import { ApiResponse } from '@/lib/api';
import { IServerResponse } from '@/lib/core/IServerResponse';
import { appApi } from '@/utils/appApi';
import AppAuthService from '../app/auth/auth.service';
import { AppLoginDto } from '../app/auth/dto/login.dto';
import { LoginDto } from './dto/login.dto';

const prefix = '/auth';

const AuthService = {
  /**
   * Login to the application
   * @param loginDto
   * @returns
   */
  login(_loginDto: LoginDto): Promise<ApiResponse<IServerResponse>> {
    return AppAuthService.login(new AppLoginDto());
  },

  /**
   * Logout from the application
   * @returns
   */
  logout(): Promise<ApiResponse> {
    return appApi.post(`${prefix}/logout`);
  },
};

export default AuthService;
