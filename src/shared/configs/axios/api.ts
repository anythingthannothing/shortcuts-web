import axios, { AxiosRequestConfig } from 'axios';

import refreshTokenMutex from '@/shared/configs/axios/refresh-token-mutex';
import { TokenController } from '@/shared/libs/token-controller';

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshAccessToken = async (): Promise<string | null> => {
  const tokenController = new TokenController(localStorage);

  return refreshTokenMutex?.runExclusive(async () => {
    const isTokenExpired =
      tokenController.expiresAt &&
      tokenController.expiresAt <= Math.floor(Date.now() / 1000);

    if (!isTokenExpired) {
      return tokenController.accessToken;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/refresh`,
        {
          refresh_token: tokenController.refreshToken,
        },
        { headers: { Authorization: tokenController.accessToken } },
      );

      if (response.status === 200) {
        const { accessToken, expiresAt } = response.data;
        tokenController.setAccessToken(accessToken);
        tokenController.setExpiresAt(expiresAt);

        return accessToken;
      }
    } catch (error) {
      tokenController.clearTokens();
      return null;
    }
  });
};

axiosInstance.interceptors.request.use(
  (config) => {
    const tokenController = new TokenController(localStorage);
    const accessToken = tokenController.accessToken;

    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const tokenController = new TokenController(localStorage);
    const originalRequest = error.config;

    if (
      (error.response?.status === 403 || error.response?.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          originalRequest.headers['Authorization'] = newAccessToken;
          return axiosInstance(originalRequest);
        }

        tokenController.clearTokens();
        window.location.href = '/';
      } catch (error) {
        tokenController.clearTokens();
        window.location.href = '/';
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

export class Api {
  static get = async <T>(
    url: string,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axiosInstance.get<T>(url, { ...options });
  };
  static post = async <T>(
    url: string,
    body?: any,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axiosInstance.post<T>(url, body, options);
  };
  static put = async <T>(
    url: string,
    body?: any,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axiosInstance.put<T>(url, body, options);
  };
  static patch = async <T>(
    url: string,
    body?: any,
    options?: AxiosRequestConfig<any> | undefined,
  ) => {
    return await axiosInstance.patch<T>(url, body, options);
  };
  static delete = async <T>(
    url: string,
    params?: any,
    options?: AxiosRequestConfig,
  ) => {
    return await axiosInstance.delete<T>(url, { params, ...options });
  };
}
