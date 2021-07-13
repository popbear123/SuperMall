<template>
  <div class="toast" v-show="isShow">
    {{content}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      isShow: false,
      content: ''
    }
  },
  methods: {
    show (content = '默认文字', duration = 2000) {
      this.content = content
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}

</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.75);
    width: 40%;
    color: #fff;
    text-align: center;
    padding: 8px 10px;
    font-size: 14px;
    z-index: 99;
  }
</style>
