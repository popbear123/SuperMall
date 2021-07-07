import { request } from './request'

// 请求详情页数据
export function getDetailList (id) {
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

// 请求商品数据
export class GoodsInfo {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowPrice = itemInfo.lowNowPrice
  }
}

// 请求店铺信息
export class Shop {
  constructor (shopInfo) {
    this.sell = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.shopUrl = shopInfo.shopUrl
  }
}

// 请求商品参数
export class Params {
  constructor (info, rule) {
    this.set = info.set
    this.tables = rule.tables[0]
  }
}

// 时间格式化
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  const obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (const item in obj) {
    if (new RegExp(`(${item})`).test(fmt)) {
      const str = obj[item] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : dealLeftZero(str, RegExp.$1.length))
    }
  }

  function dealLeftZero (str, length) {
    return ('00' + str).substr(length)
  }

  return fmt
}

// 请求recommends数据
export function getDetailRecommends () {
  return request({
    url: '/recommend'
  })
}
