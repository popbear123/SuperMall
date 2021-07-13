<template>
  <div class="rightBottom">
    <TabControl
      :titles="['综合', '新品', '销量']"
      @tabClick="tabClick"
    ></TabControl>
    <Goods :goodsList="categoryDetail"></Goods>
  </div>
</template>

<script>
import TabControl from 'components/item/tabControl/TabControl'
import Goods from 'components/item/goods/Goods'

export default {
  name: 'CategoryRightBottom',
  props: {
    categoryDetail: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
    TabControl,
    Goods
  },
  methods: {
    tabClick (index) {
      this.$emit('tabClick', index)
    }
  }
}

</script>

<style scoped>

</style>
