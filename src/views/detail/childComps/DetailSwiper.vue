<template>
  <Swiper class="Swiper">
    <SwiperItem v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="detailImgLoad">
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      imgLoaded: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    detailImgLoad () {
      if (!this.imgLoaded) {
        this.$bus.$emit('detailImgLoad')
        this.imgLoaded = true
      }
    }
  }
}
</script>

<style scoped>
  .Swiper {
    height: 300px;
  }
</style>
