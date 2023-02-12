/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 11:41:09
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 15:24:13
 */
import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading...">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
