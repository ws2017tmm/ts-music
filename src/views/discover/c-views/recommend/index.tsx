/*
 * @Description: 推荐界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:17:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 15:07:50
 */
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'

import {
  fetchBannersDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchRankingDataAction
} from './store/recommend'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
