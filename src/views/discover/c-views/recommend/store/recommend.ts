/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 20:53:46
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 15:10:21
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannerAction(res.banners))
    })
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  (_, { dispatch }) => {
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumsAction(res.albums))
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 2.将三个结果都拿到, 统一放到一个数组中管理
    // 保障一: 获取到所有的结果后, 进行dispatch操作
    // 保障二: 获取到的结果一定是有正确的顺序
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }

    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]

  rankings: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}

const recommendSlice = createSlice({
  name: 'recommendSlice',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
