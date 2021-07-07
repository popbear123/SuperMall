<template>
  <div class="detail-base-info" v-if="Object.keys(GoodsInfo).length > 0">
    <div class="info-base">
      <div class="title">{{GoodsInfo.title}}</div>
      <div class="price">
        <span class="nowPrice">{{GoodsInfo.price}}</span>
        <span class="oldPrice">{{GoodsInfo.oldPrice}}</span>
        <span class="discount">{{GoodsInfo.discount}}</span>
      </div>
    </div>
    <div class="info-other">
      <div class="sale">{{GoodsInfo.columns[0]}}</div>
      <div class="collect">{{GoodsInfo.columns[1]}}</div>
      <div class="ship">{{GoodsInfo.services[GoodsInfo.services.length-1].name}}</div>
    </div>
    <div class="info-services">
      <div class="services-item" v-for="(item, index) in GoodsInfo.services.slice(0, GoodsInfo.services.length - 1)" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    GoodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .detail-base-info {
    box-sizing: border-box;
    padding: 0 5px;
    margin-top: 10px;
  }
  .price {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .nowPrice {
    color: #ff5777;
    font-size: 18px;
  }
  .oldPrice {
    margin-left: 5px;
    color: #999;
    font-size: 12px;
  }
  .discount {
    background-color: #ff8198;
    border-radius: 8px;
    font-size: 12px;
    color: #fff;
    padding: 2px 5px;
    margin-left: 5px;
    vertical-align: top;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 5px;
    border-bottom: 3px solid #eee;
  }
  .sale, .collect, .ship {
    flex: 1;
    color: #999;
    font-size: 12px;
  }
  .collect {
    text-align: center;
  }
  .ship {
    text-align: right;
  }
  .info-services {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 3px solid #eee;
  }
  .services-item {
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .services-item img {
    width: 12px;
    height: 12px;
  }
</style>
