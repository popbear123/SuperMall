<template>
  <div class="swiper-item" ref="swiperItem">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  data () {
    return {
      // offset: 0
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .swiper-item {
    height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  img {
    height: 100%;
    width: 100%
  }
</style>
