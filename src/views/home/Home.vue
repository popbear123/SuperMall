<template>
  <div id="home">
    <Navbar class="Navbar">
      <div slot="center">首页</div>
    </Navbar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="TabControl1"
      class="TabControl1"
      v-show="isFixedTabControl"
    >
    </TabControl>
    <Scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      @scroll="scrollPosition"
      @pullingUp="pullingUp"
    >
      <HomeSwiper :banners="banners" @swiperLoaded="swiperLoaded"></HomeSwiper>
      <HomeRecommends :recommends="recommends"></HomeRecommends>
      <FeatureView></FeatureView>
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl2" v-show="!isFixedTabControl"></TabControl>
      <Goods :goodsList="goods[tabIndex].list" :class="{fixedTop: isFixedTabControl}"></Goods>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowScrollTop"></BackTop>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/item/tabControl/TabControl'
import Goods from 'components/item/goods/Goods'

import HomeSwiper from './childComponents/HomeSwiper.vue'
import HomeRecommends from './childComponents/HomeRecommends'
import FeatureView from './childComponents/FeatureView.vue'

import { getHomeMultidata, getHomeData } from 'network/home'
import { debounce } from 'common/utils'
import { mixin, backTopMixin } from 'common/mixin'

export default {
  name: 'Home',
  mixins: [mixin, backTopMixin],
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      tabIndex: 'pop',
      FixedTop: null,
      isFixedTabControl: false
    }
  },
  components: {
    Navbar,
    Scroll,
    TabControl,
    Goods,
    HomeSwiper,
    HomeRecommends,
    FeatureView
  },
  created () {
    // 请求许多数据
    this.getHomeMultidata()
    // 请求goods的数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted () {
    // 调用防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 100)

    // 组件挂载完毕就监听图片加载
    this.$bus.$on('imageLoaded', () => {
      if (this.$refs.scroll && this.$refs.scroll.bs) {
        refresh()
      }
    })
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick (index) {
      switch (index) {
        case 0:
          this.tabIndex = 'pop'
          break
        case 1:
          this.tabIndex = 'new'
          break
        case 2:
          this.tabIndex = 'sell'
          break
      }
      this.$refs.TabControl1.currentIndex = index
      this.$refs.TabControl2.currentIndex = index
    },

    scrollPosition (position) {
      this.isShowScrollTop = (-position.y) > 1000
      this.isFixedTabControl = (-position.y) > this.FixedTop
    },

    pullingUp () {
      this.getHomeData(this.tabIndex)
    },

    swiperLoaded () {
      // console.log(this.$refs.TabControl2.$el.offsetTop)
      this.FixedTop = this.$refs.TabControl2.$el.offsetTop
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },

    getHomeData (type) {
      getHomeData(type, this.goods[type].page + 1).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 40px;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }
  .Navbar {
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
    font-weight: bold;
  }
  .wrapper {
    position: absolute;
    top: 40px;
    bottom: 52px;
    left: 0;
    right: 0;
  }
  .TabControl1 {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
  }
  .fixedTop {
    margin-top: 40px;
  }
</style>
