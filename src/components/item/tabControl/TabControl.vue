<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index">
      <span :class="{active: index === currentIndex}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    height: 40px;
    line-height: 40px;
    display: flex;
    position: sticky;
    top: 40px;
    background-color: #fff;
    z-index: 99;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
  }
  .tab-control-item span {
    font-size: 15px;
  }
  .active {
    color: #ff5777;
    border-bottom: 3px solid #ff5777;
    padding-bottom: 3px;
  }
</style>
