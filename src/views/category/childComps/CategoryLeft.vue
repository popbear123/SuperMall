<template>
  <div class="left">
    <ul>
      <li
        v-for="(item, index) in categoryList"
        :key="index"
        :class="{active: index === currentIndex}"
        @click.prevent="itemClick(index)"
      >
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryLeft',
  props: {
    categoryList: {
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
      this.$emit('currentChange')
    }
  }
}

</script>

<style scoped>
  ul {
    background-color: #f6f6f6;
    padding: 0;
    text-align: center;
    font-size: 14px;
    margin: 0;
  }
  li {
    padding: 14px 0;
    color: #666;
  }
  .active {
    background-color: #fff;
    font-weight: bold;
    color: #ff5777;
    box-sizing: border-box;
    border-left: 3px solid #ff5777;
  }
</style>
