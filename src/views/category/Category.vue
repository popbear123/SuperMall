<template>
  <div id="category">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
    <Scroll class="leftScroll" ref="leftScroll">
      <CategoryLeft :categoryList="categoryList" ref="left" @currentChange="currentChange"></CategoryLeft>
    </Scroll>
    <Scroll class="rightScroll" :observeImage="true">
      <CategoryRightTop :subcategoryList="subcategoryList"></CategoryRightTop>
      <CategoryRightBottom :categoryDetail="categoryDetail" @tabClick="tabClick"></CategoryRightBottom>
    </Scroll>
  </div>
</template>

<script>
import CategoryLeft from './childComps/CategoryLeft.vue'
import CategoryRightTop from './childComps/CategoryRightTop.vue'
import CategoryRightBottom from './childComps/CategoryRightBottom.vue'

import Scroll from 'components/common/scroll/Scroll'
import Navbar from 'components/common/navbar/Navbar'

import { getCategoryList, subCategory, getCategoryDetail } from 'network/category'

export default {
  name: 'Category',
  data () {
    return {
      categoryList: [],
      subcategoryList: [],
      categoryDetail: [],
      type: ['pop', 'new', 'sell'],
      typeIndex: 0
    }
  },
  components: {
    CategoryLeft,
    CategoryRightTop,
    CategoryRightBottom,
    Scroll,
    Navbar
  },
  created () {
    this.getCategoryList()
  },
  mounted () {
  },
  methods: {
    /**
     *  网络请求相关方法
     */
    getCategoryList () {
      getCategoryList().then(res => {
        // console.log(res)
        this.categoryList = res.data.category.list
        this.subCategory()
        this.getCategoryDetail()
        this.$nextTick(() => {
          this.$refs.leftScroll.refresh()
        })
      })
    },

    subCategory () {
      subCategory(this.categoryList[this.$refs.left.currentIndex].maitKey).then(res => {
        // console.log(res)
        this.subcategoryList = res.data.list
      })
    },

    getCategoryDetail () {
      getCategoryDetail(this.categoryList[this.$refs.left.currentIndex].miniWallkey, this.type[this.typeIndex]).then(res => {
        console.log(res)
        this.categoryDetail = res
      })
    },

    /**
     *  事件监听相关方法
     */
    tabClick (index) {
      this.typeIndex = index
      this.getCategoryDetail()
    },

    currentChange () {
      this.subCategory()
    }
  }
}
</script>

<style scoped>
  #category {
    position: relative;
    height: 100vh;
  }
  .nav-bar {
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
    font-weight: bold;
  }
  .leftScroll {
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
    width: 30%;
  }
  .rightScroll {
    position: absolute;
    top: 40px;
    bottom: 49px;
    right: 0;
    width: 70%;
  }
</style>
