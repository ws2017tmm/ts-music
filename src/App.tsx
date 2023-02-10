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
import { appShallowEqual, useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    appShallowEqual
  )
  const dispatch = useAppDispatch()
  const changeMessage = () => {
    dispatch(changeMessageAction('hahahha'))
    console.log('改变信息')
  }
  return (
    <div className="App">
      <div>当前计数：{count}</div>
      <div>当前信息：{message}</div>
      <button onClick={changeMessage}>改变信息</button>
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
