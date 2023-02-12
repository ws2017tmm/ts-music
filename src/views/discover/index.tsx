/*
 * @Description: 发现界面
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 16:35:09
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 20:44:48
 */
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <NavBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
