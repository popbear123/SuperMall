<template>
  <div class="goods">
    <GoodsItem v-for="(item, index) in goodsList" :key="index" :goodsItem="item" class="goods-item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  name: 'Goods',
  props: {
    goodsList: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
