import { ApiServer } from '@/enums/api-server';
import { HttpMethod } from '@/enums/http-method';
import { toCamelCase } from '@/utils/helper';

interface ApiOptions {
  headers?: Record<string, string>;
  body?: Record<string, any> | string;
  method?: HttpMethod;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

const URL_SERVER: Record<ApiServer, string | undefined> = {
  app: process.env.NEXT_PUBLIC_APP_API_URL,
  backend: process.env.NEXT_PUBLIC_BACKEND_API_URL,
};

class API {
  private API_BASE_URL = URL_SERVER.app;

  /**
   * New instance with base url
   * @param type
   * @returns
   */
  newInstance(type: ApiServer = ApiServer.App) {
    this.API_BASE_URL = URL_SERVER[type];

    return this;
  }

  /**
   * Fetch API
   * @param path
   * @param options
   * @returns
   */
  private async fetchApi<T>(path: string, options: ApiOptions = {}): Promise<ApiResponse<T>> {
    const url = `${this.API_BASE_URL}${path}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const body = typeof options.body === 'string' ? options.body : JSON.stringify(options.body);

    const response = await fetch(url, {
      method: options.method ?? HttpMethod.Get,
      headers,
      body,
    });

    if (!response.ok) {
      const error = new Error(`An error occurred: ${response.statusText}`);
      throw error;
    }

    const data: T = await response.json();

    return {
      data: toCamelCase(data),
      status: response.status,
      statusText: response.statusText,
    };
  }

  /**
   * Get method
   * @param path
   * @param options
   * @returns
   */
  get<T = any>(path: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(path, { ...options, method: HttpMethod.Get });
  }

  /**
   * Post method
   * @param path
   * @param options
   * @returns
   */
  post<T = any>(path: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(path, { ...options, method: HttpMethod.Post });
  }

  /**
   * Put method
   * @param path
   * @param options
   * @returns
   */
  put<T = any>(path: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(path, { ...options, method: HttpMethod.Put });
  }

  /**
   * Patch method
   * @param path
   * @param options
   * @returns
   */
  patch<T = any>(path: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(path, { ...options, method: HttpMethod.Patch });
  }

  /**
   * Delete method
   * @param path
   * @param options
   * @returns
   */
  delete<T = any>(path: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(path, { ...options, method: HttpMethod.Delete });
  }
}

export default API;
