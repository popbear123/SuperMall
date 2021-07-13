<template>
  <div class="rightTop">
    <a
      :href="item.link"
      class="rightTop-item"
      v-for="(item, index) in subcategoryList"
      :key="index"
    >
      <img :src="item.image" alt="">
      <span>{{item.title}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CategoryRightTop',
  props: {
    subcategoryList: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
    }
  }
}

</script>

<style scoped>
  .rightTop {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    box-sizing: border-box;
    padding: 20px 10px;
    justify-content: space-between;
  }
  .rightTop-item{
    display: flex;
    width: 62px;
    flex-direction: column;
    align-items: center;
  }
  img {
    height: 85%;
    width: 85%;
    margin: 10px 0
  }
</style>
