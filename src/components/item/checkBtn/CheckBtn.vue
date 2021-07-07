<template>
  <div class="check-btn">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .check-btn img {
    height: 100%;
    width: 100%;
  }
  .check-btn {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #aaa;
    box-sizing: border-box;
  }
</style>
