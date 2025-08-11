import { AxiosRequestConfig } from 'axios';

// export const BASE_URL = 'http://localhost:3005/';

export const BASE_URL = 'https://kvaks-backend.pushkeen.ru/';

export const CONFIG: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
  },
};
