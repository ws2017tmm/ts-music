/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-11 11:15:07
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 10:07:00
 */
import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

interface WSInterceptors<T = AxiosResponse> {
  requestSuccessCallback?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureCallback?: (err: any) => any
  responseSuccessCallback?: (res: T) => T
  responseFailureCallback?: (err: any) => any
}

export interface WSAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: WSInterceptors<T>
}
