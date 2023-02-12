/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 11:41:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 14:41:24
 */
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
