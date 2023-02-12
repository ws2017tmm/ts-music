import wsRequest from '../index'

// config
// {
//   url: '/home/multidata'
// }
interface IHomeData {
  data: any
  returnCode: string
  success: string
}
wsRequest
  .request<IHomeData>({
    url: '/home/multidata',
    headers: {},
    interceptors: {
      requestSuccessCallback: (config) => {
        console.log('request单个请求拦截器----')
        return config
      },
      responseSuccessCallback: (res) => {
        console.log('response单个请求拦截器----')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res, '---res')
  })
