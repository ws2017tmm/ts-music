/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-17 09:11:28
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 12:06:45
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppSelector } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'
import SongMenuItem from '@/components/song-menu-item'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  /** 从store中取数据 */
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    appShallowEqual
  )

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
