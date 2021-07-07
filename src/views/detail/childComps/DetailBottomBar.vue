<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div class="staff left-item">
        <span class="img"></span>
        <span class="sp1">客服</span>
      </div>
      <div class="store left-item">
        <span class="img"></span>
        <span class="sp2">店铺</span>
      </div>
      <div class="collect left-item">
        <span class="img"></span>
        <span class="sp3">收藏</span>
      </div>
    </div>
    <div class="shop" @click="putInCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data () {
    return {
    }
  },
  methods: {
    putInCart () {
      this.$emit('putInCart')
    }
  }
}
</script>

<style scoped>
  .detail-bottom-bar {
    height: 45px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  .left {
    display: flex;
    justify-content: space-around;
    flex: 0.5;
  }
  .left-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    justify-content: space-around;
    padding-top: 5px;
  }
  .staff .img {
    display: inline-block;
    height: 20px;
    width: 20px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 -48px;
    background-size: 100%;
  }
  .store .img {
    display: inline-block;
    height: 20px;
    width: 20px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 -89px;
    background-size: 100%;
  }
  .collect .img {
    display: inline-block;
    height: 20px;
    width: 20px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat;
    background-size: 100%;
  }
  .shop {
    flex: 0.26;
    background-color: yellow;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .buy {
    flex: 0.24;
    background-color: #ff8198;
    color: #fff;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
</style>
