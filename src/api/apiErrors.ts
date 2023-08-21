import { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface AxiosError {
  message: string;
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse;
}