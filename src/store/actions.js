// 抽离出 actions 方便管理
export default {
  addGoods (context, payload) {
    return new Promise((resolve, reject) => {
      const sameItem = context.state.cartList.find(item => item.id === payload.id)
      if (sameItem) {
        context.commit('addCount', sameItem)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('商品加入购物车')
      }
    })
  }
}
