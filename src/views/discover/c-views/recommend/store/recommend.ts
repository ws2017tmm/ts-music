/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 20:53:46
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-13 09:27:09
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      console.log(res, '---res')
      dispatch(changeBannerAction(res.banners))
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
    }
  }
})

export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
