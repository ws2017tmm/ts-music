/*
 * @Description: 排行榜
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-17 14:59:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 15:00:23
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
