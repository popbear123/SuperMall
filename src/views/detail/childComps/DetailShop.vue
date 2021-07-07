<template>
  <div class="detail-shop">
    <div class="top">
      <span class="logo">
        <img :src="GoodsShop.shopLogo" alt="">
      </span>
      <span class="name">{{GoodsShop.name}}</span>
    </div>
    <div class="center">
      <div class="left">
        <div class="item1">
          <span>{{ShopSell}}</span>
          <div>总销量</div>
        </div>
        <div class="item2">
          <span>{{GoodsShop.goods}}</span>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div class="right-item" v-for="(item, index) in GoodsShop.score" :key="index">
          <span class="right-name">{{item.name}}</span>
          <span class="right-score" :class="{'right-score-color': item.isBetter}">{{item.score}}</span>
          <span :class="{isBetter: item.isBetter, 'right-isBetter': true}">{{item.isBetter? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="hangout" @click="goShop(GoodsShop.shopUrl)">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    GoodsShop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ShopSell () {
      return (this.GoodsShop.sell / 10000).toFixed(1) + '万'
    }
  },
  methods: {
    goShop (url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>
  .detail-shop {
    padding: 0 5px;
  }
  .top {
    display: flex;
    align-items: center;
    padding: 20px 0;
    padding-bottom: 15px;
  }
  .logo {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .name {
    font-size: 14px;
    margin-left: 10px;
  }
  .center {
    display: flex;
    align-items: center;
  }
  .left {
    flex: 1;
    border-right: 1px solid #ccc;
    display: flex;
    text-align: center;
    justify-content: space-around;
    padding: 0 5px;
  }
  .left .item1 span {
    margin-bottom: 5px;
  }
  .left .item1 div, .left .item2 div {
    font-size: 12px;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .right-item {
    flex: 1;
    font-size: 12px;
    padding: 5px 25px;
    display: flex;
    justify-content: space-between;
  }
  .right-name {
    margin-right: 5px;
  }
  .right-score {
    margin-right: 5px;
    color: green;
  }
  .right-score-color {
    color: red;
  }
  .right-isBetter {
    background-color: green;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    display: inline-block;
    height: 13px;
    width: 13px;
    line-height: 13px;
  }
  .isBetter {
    background-color: red;
  }
  .bottom {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 20px;
  }
  .hangout {
    background-color: ghostwhite;
    display: inline-block;
    width: 45%;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px 0;
  }
</style>
