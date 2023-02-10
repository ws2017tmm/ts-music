/*
 * @Description: 歌手界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 18:26:35
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 18:26:48
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
