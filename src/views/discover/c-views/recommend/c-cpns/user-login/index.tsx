/*
 * @Description: 用户登陆
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-17 15:40:40
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 15:41:02
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return (
    <LoginWrapper className="sprite_02">
      <p className="desc">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href="#/login" className="sprite_02">
        用户登录
      </a>
    </LoginWrapper>
  )
}

export default memo(UserLogin)
