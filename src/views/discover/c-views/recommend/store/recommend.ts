/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 20:53:46
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 21:18:21
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
  reducers: {}
})

export default recommendSlice.reducer
