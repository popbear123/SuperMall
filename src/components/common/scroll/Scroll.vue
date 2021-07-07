<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default () {
        return 0
      }
    },
    observeImage: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      bs: null
    }
  },
  mounted () {
    // 创建BScroll实例
    this.bs = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: true,
      observeImage: this.observeImage,
      click: true
    })
    this.bs.on('scroll', position => {
      this.$emit('scroll', position)
    })
    this.bs.on('pullingUp', () => {
      // console.log('-----拉到底啦------')
      this.$emit('pullingUp')
    })
  },
  methods: {
    refresh () {
      console.log('-------')
      this.bs.refresh()
    },
    finishPullUp () {
      this.bs.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
