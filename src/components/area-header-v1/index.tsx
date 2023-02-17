/*
 * @Description: 每个区域头部导航
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-17 11:10:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 11:47:15
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
