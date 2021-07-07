<template>
  <div class="detail-goods-info" v-if="Object.keys(DetailInfo).length > 0">
    <span class="sign1"></span>
    <div class="desc">{{DetailInfo.desc}}</div>
    <span class="sign2"></span>
    <div class="key">{{DetailInfo.detailImage[0].key}}</div>
    <div class="detail-info-item" v-for="(item, index) in DetailInfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="detailInfoImgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    DetailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      count: 0,
      length: 0
    }
  },
  methods: {
    detailInfoImgLoad () {
      if (++this.count === this.length) {
        this.$emit('detailInfoImgLoad')
      }
    }
  },
  watch: {
    DetailInfo () {
      this.length = this.DetailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  .detail-goods-info {
    padding: 0 5px;
  }
  .detail-info-item img{
    width: 100%;
    height: 100%;
  }
  .sign1 {
    display: inline-block;
    height: 2.5px;
    width: 30%;
    background-color: #ccc;
    margin-left: 5px;
  }
  .desc {
    font-size: 12px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .sign2 {
    float: right;
    height: 2.5px;
    width: 30%;
    background-color: #ccc;
    margin-right: 5px;
    margin-bottom: 15px;
  }
  .key {
    font-size: 14px;
    margin-top: 10px;
    padding-left: 8px;
  }
</style>
