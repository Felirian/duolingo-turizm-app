import { AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const CONFIG: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
  },
};