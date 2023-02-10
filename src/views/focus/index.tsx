/*
 * @Description: 关注界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 17:42:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 17:42:35
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Foucs: FC<IProps> = () => {
  return <div>Foucs</div>
}

export default memo(Foucs)
