import axios, { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'https://reqres.in/api',
  responseType: 'json',
  timeout: 60000,
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Access-Control-Allow-Origin': true,
    Pragma: 'no-cache',
    Accept: 'application/json',
  },
};

const fetcher: AxiosInstance = axios.create(axiosConfig);

fetcher.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const endpoint: string = error.config?.url ?? '';
    const errorStatus: number = error.response?.status ?? 0;
    const errorData: { [key: string]: any } = error.response?.data ?? {};

    console.error(`Error on ${endpoint} with status ${errorStatus}`);
    console.error(errorData);

    return Promise.reject(error);
  },
);

export const axiosGet = async (url: string, headers?: any) => {
  const response = await fetcher.get(url, headers);
  return response;
};

export const axiosPost = async (url: string, data: any, headers?: any) => {
  const response = await fetcher.post(url, data, headers);
  return response;
};

export const axiosPut = async (url: string, data: any, headers?: any) => {
  const response = await fetcher.put(url, data, headers);
  return response;
};
