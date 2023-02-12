/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 11:41:09
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 21:11:03
 */
import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="loading...">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
