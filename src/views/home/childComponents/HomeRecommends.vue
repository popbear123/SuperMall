<template>
  <div class="recommends">
    <div class="recommends-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommends',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommends {
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px 0 0;
    border-bottom: 10px solid #eee;
  }
  .recommends-item {
    flex: 1;
  }
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    text-align: center;
  }
  img {
    width: 70px;
    height: 70px;
  }
  a > div {
    font-size: 14px;
  }
</style>
