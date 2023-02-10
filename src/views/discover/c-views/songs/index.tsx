/*
 * @Description: 歌单界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:25:14
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 18:25:24
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
