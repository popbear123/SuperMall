import { request } from './request'

// 请求许多数据
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

// 请求goods数据
export function getHomeData (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
