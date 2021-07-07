<template>
  <div class="cart-list">
    <CartListItem
      v-for="(item, index) in $store.state.cartList"
      :key="index"
      :product="item"
      class="cart-item"
      :isChecked="item.checked"
    ></CartListItem>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  data () {
    return {
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>
  .cart-item {
    border-bottom: 3px solid #eee;
    height: calc((100vh - 98px) / 4);
  }
</style>
