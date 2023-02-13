/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 19:00:48
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 21:01:53
 */
import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

// type GetStateFnType = typeof store.getState
// const state = store.getState()
// type stateType = typeof state

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual

export default store
