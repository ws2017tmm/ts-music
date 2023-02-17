/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-13 09:05:04
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 15:47:52
 */
import wsRequest from '@/service'

export function getBanners() {
  return wsRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return wsRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return wsRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return wsRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistList(limit = 30) {
  return wsRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
