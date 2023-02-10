/*
 * @Description: 推荐界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:17:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 18:17:26
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
