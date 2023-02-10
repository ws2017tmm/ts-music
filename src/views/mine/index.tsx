/*
 * @Description: 我的音乐界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 17:39:17
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 17:47:29
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
