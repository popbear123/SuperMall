<template>
  <div class="bottom">
    <div class="cart item">
      <img src="~assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>
    <div class="app item">
      <img src="~assets/img/profile/pointer.svg" alt="">
      <span>下载购物车APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBottom',
  data () {
    return {
    }
  }
}

</script>

<style scoped>
  .bottom {
    display: flex;
    flex-direction: column;
  }
  .item {
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 15px;
  }
  .item img {
    height: 22px;
    width: 22px;
  }
  .item span {
    height: 100%;
    line-height: 45px;
    flex: 1;
    padding-left: 10px;
  }
  .item:first-child span {
    border-bottom: 1px solid #f2f2f2;
  }
</style>
