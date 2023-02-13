/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 20:07:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-13 08:45:41
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { discoverMenu } from '@/assets/data/local_data'
import { NavWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        <div className="item-box">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
