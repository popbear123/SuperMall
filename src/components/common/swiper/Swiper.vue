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
    <ul class="circle">
      <li
        v-for="(item, idx) in banners"
        :key="idx"
        :class="{active: idx === currentIndex}"
        @click="circleClick(idx)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
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
      index: 0,
      currentIndex: 0,
      timer: null
    }
  },
  mounted () {
    this.$bus.$on('bannerLoaded', () => {
      const box1 = this.$refs.swiperBox.children[0].cloneNode(true)
      this.$refs.swiperBox.appendChild(box1)
      this.slide()
    })
    document.addEventListener('touchstart', () => {
      clearInterval(this.timer)
    })
    document.addEventListener('touchend', () => {
      setTimeout(() => {
        clearInterval(this.timer)
        this.slide()
      }, 2000)
    })
  },
  methods: {
    turnLeft () {
      if (this.index > 0) {
        this.index--
        this.currentIndex--
        this.$refs.swiperBox.style.left = this.index * -this.$refs.swiperBox.offsetWidth + 'px'
      }
    },

    turnRight () {
      if (this.index < this.$refs.swiperBox.children.length - 1) {
        this.index++
        this.currentIndex++
        this.$refs.swiperBox.style.left = this.index * -this.$refs.swiperBox.offsetWidth + 'px'
      }
    },

    slide () {
      this.timer = setInterval(() => {
        if (this.$refs.swiperBox.style.transition === 'none 0s ease 0s') {
          this.$refs.swiperBox.style.transition = '0.5s ease'
        }
        this.index++
        this.currentIndex++
        this.$refs.swiperBox.style.left = (this.index * -this.$refs.swiperBox.offsetWidth) + 'px'
        if (this.index === 4) {
          this.currentIndex = 0
        }
        if (this.index === 5) {
          this.$refs.swiperBox.style.transition = 'none'
          this.$refs.swiperBox.style.left = 0
          this.index = 0
          this.currentIndex = 0
        }
      }, 1500)
    },

    circleClick (index) {
      this.index = index
      this.currentIndex = index
      this.$refs.swiperBox.style.left = (this.index * -this.$refs.swiperBox.offsetWidth) + 'px'
    }
  }
}
</script>

<style scoped>
  .swiper {
    height: 170px;
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
  ul {
    height: 8px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    padding: 0;
    margin: 0;
  }
  li {
    flex: 1;
    height: 100%;
    width: 8px;
    border-radius: 50%;
    background-color: red;
    margin-right: 8px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  li:last-child {
    margin-right: 0;
  }
  .active {
    background-color: #fff;
  }
</style>
