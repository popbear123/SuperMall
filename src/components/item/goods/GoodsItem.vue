<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="showImg" alt="" @load="imageLoad">
    <div class="title">{{goodsItem.title}}</div>
    <span class="price">{{goodsItem.price}}</span>
    <!-- <span class="star">⭐</span> -->
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imageLoad () {
      // this.$bus.$emit('imageLoaded')
      if (this.$route.path.indexOf('/home') !== -1) {
        this.$bus.$emit('imageLoaded')
      } else if (this.$route.path.indexOf('/detail') !== -1) {
        this.$bus.$emit('detailImgLoad')
      }
    },
    itemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .goodsItem {
    position: relative;
    width: 48%;
    text-align: center;
  }
  .goodsItem img {
    width: 100%;
    border-radius: 3%;
  }
  .goodsItem .title {
    font-size: 12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .price {
    font-size: 12px;
    color: #ff5777;
    vertical-align: top;
  }
  .collect {
    font-size: 12px;
    position: relative;
    margin-left: 20px;
    vertical-align: top;
  }
  .collect:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background:url('~assets/img/common/collect.svg') no-repeat;
    background-size: 14px 14px;
    position: absolute;
    left: -14px;
    top: 1px;
    vertical-align: top;
  }
  /* .star {
    margin-left: 3px;
    font-size: 12px;
  } */

</style>
