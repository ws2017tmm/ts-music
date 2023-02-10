/*
 * @Description: 新碟上架界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:29:56
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 18:30:10
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
