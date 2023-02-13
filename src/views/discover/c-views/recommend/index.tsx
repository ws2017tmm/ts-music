/*
 * @Description: 推荐界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:17:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-13 09:26:31
 */
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { RecommendWrapped } from './style'

import TopBanner from './c-cpns/top-banner'
import { useAppDispatch } from '@/store'
import { fetchBannersDataAction } from './store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
  }, [])
  return (
    <RecommendWrapped>
      <TopBanner />
      aaa
    </RecommendWrapped>
  )
}

export default memo(Recommend)
