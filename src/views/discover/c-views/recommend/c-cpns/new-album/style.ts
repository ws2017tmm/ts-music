/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-17 13:41:58
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-17 14:46:59
 */
import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  margin-top: 20px;

  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      position: relative;
      top: -12px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      overflow: hidden;
      flex: 1;

      .album-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
