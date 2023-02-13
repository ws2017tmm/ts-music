/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-13 09:05:04
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-13 09:05:39
 */
import wsRequest from '@/service'

export function getBanners() {
  return wsRequest.get({
    url: '/banner'
  })
}
