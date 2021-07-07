// 抽离出 mutations 方便管理
export default {
  addCount (state, payload) {
    payload.count++
  },
  addToCart (state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
