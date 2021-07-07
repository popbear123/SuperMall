<template>
  <div class="detail-nav">
    <NavBar>
      <div slot="left" class="back" @click="backItem">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in titles"
          :key="index"
          class="titles-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)"
        >
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'

export default {
  name: 'DetailNav',
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backItem () {
      this.$router.back()
    },
    titleClick (index) {
      this.currentIndex = index
      this.$emit('NavClickIndex', this.currentIndex)
    }
  }
}
</script>

<style scoped>
  .titles {
    display: flex;
    font-size: 13px;
  }
  .titles-item {
    flex: 1;
  }
  .back {
    text-align: center;
    height: 100%;
  }
  .back img {
    margin-top: 10px;
    height: 20px;
    width: 20px;
  }
  .active {
    color: #ff5777;
  }
</style>
