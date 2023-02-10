/*
 * @Description: 排行榜界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:25:53
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 18:26:06
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
