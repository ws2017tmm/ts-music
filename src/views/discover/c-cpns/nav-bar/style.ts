/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-12 20:07:19
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-13 08:46:19
 */
import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};

  .nav {
    position: relative;
    top: -4px;

    .item-box {
      display: flex;
      padding-left: 180px;

      .item {
        a {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0;
          color: #fff;
          font-size: 12px;

          &:hover,
          &.active {
            text-decoration: none;
            background-color: #9b0909;
            border-radius: 20px;
          }
        }
      }
    }
  }
`
