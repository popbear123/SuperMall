<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/MainTabbar'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
