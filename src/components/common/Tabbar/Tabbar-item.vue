<template>
    <div class="tabbar-item" @click="handleClick">
      <div :style="ActiveColor">
        <slot name="item-img"></slot>
      </div>
      <div :style="ActiveColor">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Tabbar-item',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    ActiveColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    box-sizing: border-box;
    padding-top: 5px;
  }
  .tabbar-item span {
    font-size: 24px;
  }
</style>
