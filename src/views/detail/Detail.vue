<template>
  <div class="detail">
    <DetailNav class="detail-nav" @NavClickIndex="NavClickIndex" ref="nav"></DetailNav>
    <Scroll class="content" ref="scroll" :probeType="3" @scroll="scrollPosition">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DatailBaseInfo :GoodsInfo="GoodsInfo"></DatailBaseInfo>
      <DetailShop :GoodsShop="GoodsShop" class="detail-shop"></DetailShop>
      <DetailGoodsInfo :DetailInfo="DetailInfo" @detailInfoImgLoad="detailInfoImgLoad" class="detail-info"></DetailGoodsInfo>
      <DetailParams :GoodsParams="GoodsParams" class="detail-Params" ref="params"></DetailParams>
      <DetailCommentInfo :UserCommentInfo="UserCommentInfo" class="detail-comment-info" ref="comments"></DetailCommentInfo>
      <Goods :goodsList="goodsList" class="Goods" ref="recommends"></Goods>
    </Scroll>
    <DetailBottomBar @putInCart="putInCart"></DetailBottomBar>
    <BackTop @click.native="backTop" v-show="isShowScrollTop"></BackTop>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DatailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShop from './childComps/DetailShop.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParams from './childComps/DetailParams.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll'
import Goods from 'components/item/goods/Goods'

import { getDetailList, GoodsInfo, Shop, Params, getDetailRecommends } from 'network/detail'
import { debounce } from 'common/utils'
import { mixin, backTopMixin } from 'common/mixin'

export default {
  name: 'Detail',
  mixins: [mixin, backTopMixin],
  data () {
    return {
      id: null,
      topImages: [],
      GoodsInfo: {},
      GoodsShop: {},
      DetailInfo: {},
      GoodsParams: {},
      UserCommentInfo: {},
      goodsList: [],
      scrollTop: [],
      getScrollTopDebounce: null
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DatailBaseInfo,
    DetailShop,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    Goods
  },
  created () {
    // 获取详情页的id
    this.id = this.$route.params.id

    // 请求详情页的数据
    this.getDetailList()

    // 请求recommends数据
    this.getDetailRecommends()

    // 获取高度
    this.getScrollTopDebounce = debounce(() => {
      this.$nextTick(() => {
        this.scrollTop = []
        this.scrollTop.push(0)
        this.scrollTop.push(this.$refs.params.$el.offsetTop - 40)
        this.scrollTop.push(this.$refs.comments.$el.offsetTop - 40)
        this.scrollTop.push(this.$refs.recommends.$el.offsetTop - 40)
        this.scrollTop.push(Number.MAX_VALUE)
      })
    })
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('detailImgLoad', () => {
      if (this.$refs.scroll && this.$refs.scroll.bs) {
        refresh()
        this.getScrollTopDebounce()
      }
    })
  },
  methods: {
    getDetailList () {
      getDetailList(this.id).then(res => {
        console.log(res, 'Detail')
        const data = res.result
        // 获取轮播图
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.GoodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

        // 获取商店信息
        this.GoodsShop = new Shop(data.shopInfo)

        // 获取穿着效果图
        this.DetailInfo = data.detailInfo

        // 获取商品参数
        this.GoodsParams = new Params(data.itemParams.info, data.itemParams.rule)

        // 获取用户评价信息
        this.UserCommentInfo = data.rate
      })
    },
    detailInfoImgLoad () {
      if (this.$refs.scroll && this.$refs.scroll.bs) {
        this.$refs.scroll.refresh()
        this.getScrollTopDebounce()
      }
    },
    getDetailRecommends () {
      getDetailRecommends().then(res => {
        // 获取recommends
        this.goodsList = res.data.list
      })
    },
    NavClickIndex (index) {
      this.$refs.scroll.bs.scrollTo(0, -this.scrollTop[index], 200)
    },
    scrollPosition (position) {
      for (let item in this.scrollTop) {
        item = Number(item)
        // if (item !== this.$refs.nav.currentIndex && ((-position.y >= this.scrollTop[item] && -position.y < this.scrollTop[item + 1] && item < this.scrollTop.length - 1) ||
        // (item === this.scrollTop.length - 1 && -position.y >= this.scrollTop[item]))) {
        //   this.$refs.nav.currentIndex = item
        //   console.log(this.$refs.nav.currentIndex)
        // }
        if (item !== this.$refs.nav.currentIndex && (-position.y >= this.scrollTop[item] &&
        -position.y <= this.scrollTop[item + 1]) && item < this.scrollTop.length - 1) {
          this.$refs.nav.currentIndex = item
        }
      }
      this.isShowScrollTop = (-position.y) > 1000
    },
    putInCart () {
      const obj = {}
      obj.title = this.GoodsInfo.title
      obj.desc = this.GoodsInfo.desc
      obj.img = this.topImages[0]
      obj.price = this.GoodsInfo.lowPrice
      obj.id = this.id
      this.$store.dispatch('addGoods', obj)
    }
  }
}
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 40px - 45px);
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-shop {
    margin-bottom: 15px;
    border-bottom: 4px solid #eee;
  }
  .detail-info {
    border-bottom: 4px solid #eee;
    padding-bottom: 15px;
  }
  .detail-Params{
    border-bottom: 4px solid #eee;
    padding-bottom: 20px;
  }
  .detail-comment-info {
    border-bottom: 4px solid #eee;
    padding-bottom: 20px;
  }
  .Goods {
    margin-top: 5px;
    padding: 0 5px;
  }
</style>
