/*
 * @Description: 整个页面的底部
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 15:11:10
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 15:15:59
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <div>AppFooter 待搭建</div>
}

export default memo(AppFooter)
