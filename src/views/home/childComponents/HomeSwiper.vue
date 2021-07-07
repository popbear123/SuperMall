<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="swiperLoaded" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperLoaded () {
      if (!this.isLoaded) {
        this.$emit('swiperLoaded')
        this.isLoaded = true
      }
    }
  }
}
</script>

<style>
</style>
