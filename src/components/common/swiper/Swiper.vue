<template>
  <div class="swiper">
    <div class="swiper-box" ref="swiperBox">
      <slot></slot>
    </div>
    <div class="left-btn" @click="turnLeft" ref="leftBtn">
      &lt;
    </div>
    <div class="right-btn" @click="turnRight" ref="rightBtn">
      &gt;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
  },
  data () {
    return {
      index: 0
    }
  },
  mounted () {
    // console.log(this.$refs.swiperBox.offsetWidth)
  },
  methods: {
    turnLeft () {
      if (this.index > 0) {
        this.index--
        this.$refs.swiperBox.style.left = this.index * -this.$refs.swiperBox.offsetWidth + 'px'
      }
    },
    turnRight () {
      if (this.index < this.$refs.swiperBox.children.length - 1) {
        this.index++
        this.$refs.swiperBox.style.left = this.index * -this.$refs.swiperBox.offsetWidth + 'px'
      }
    }
  }
}
</script>

<style scoped>
  .swiper {
    height: 150px;
    background-color: blue;
    position: relative;
    left: 0;
    overflow: hidden;
  }
  .swiper-box {
    display: flex;
    height: 100%;
    transition: 0.5s ease;
    position: relative;
    left: 0;
  }
  .left-btn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    width: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    text-align: center;
  }
  .right-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    width: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    text-align: center;
  }
</style>
