// 抽离出 actions 方便管理
export default {
  addGoods (context, payload) {
    const sameItem = context.state.cartList.find(item => item.id === payload.id)
    if (sameItem) {
      context.commit('addCount', sameItem)
    } else {
      payload.count = 1
      context.commit('addToCart', payload)
    }
  }
}
