/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-02-10 12:11:27
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-02-10 15:55:27
 */
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

const CracoLessPlugin = require('craco-less')

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [{ plugin: CracoLessPlugin }]
}
