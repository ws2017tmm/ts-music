/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 11:41:09
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-12 15:55:58
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'

import './assets/css/index.less'
import theme from './assets/theme'

import store from './store'
import App from '@/App'

import './service/modules/recommend'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
