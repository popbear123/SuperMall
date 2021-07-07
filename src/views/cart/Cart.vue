<template>
  <div id="cart">
    <Nav class="nav">
      <div slot="center">购物车({{cartLength}})</div>
    </Nav>
    <Scroll class="scroll" ref="scroll">
      <CartList class="cart-list"></CartList>
    </Scroll>
  </div>
</template>

<script>
import Nav from 'components/common/navbar/Navbar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  components: {
    Nav,
    CartList,
    Scroll
  },
  computed: {
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .nav {
    background-color: #ff8198;
    color: #fff;
    position: relative;
    z-index: 99;
  }
  .scroll {
    height: calc(100% - 40px - 52px);
  }
</style>
