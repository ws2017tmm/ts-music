/*
 * @Description: 整个页面的头部
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 15:10:02
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 19:47:39
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerTitles } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

interface ITitleType {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = () => {
  const showTitleItem = (item: ITitleType) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showTitleItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
