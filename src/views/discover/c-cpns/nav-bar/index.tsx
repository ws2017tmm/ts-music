/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 20:07:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 20:21:39
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { discoverMenu } from '@/assets/data/local_data'
import { NavBarWrapped } from './style'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapped>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapped>
  )
}

export default memo(NavBar)
