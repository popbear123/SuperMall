<template>
    <Tabbar>
      <Tabbar-item path='/home'>
        <span slot="item-img" class="iconfont icon-home"></span>
        <div slot="item-text">首页</div>
      </Tabbar-item>
      <Tabbar-item path='/category'>
        <span slot="item-img" class="iconfont icon-leimupinleifenleileibie"></span>
        <div slot="item-text">分类</div>
      </Tabbar-item>
      <Tabbar-item path='/cart'>
        <span slot="item-img" class="iconfont icon-gouwuche"></span>
        <div slot="item-text">购物车</div>
      </Tabbar-item>
      <Tabbar-item path='/profile'>
        <span slot="item-img" class="iconfont icon-wode"></span>
        <div slot="item-text">我的</div>
      </Tabbar-item>
    </Tabbar>
</template>

<script>
import Tabbar from './Tabbar.vue'
import TabbarItem from './Tabbar-item.vue'

export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>
