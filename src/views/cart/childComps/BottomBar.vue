<template>
  <div class="bottom">
    <div class="allSel">
      <CheckBtn class="btn"></CheckBtn>
      <span>全选</span>
    </div>
    <div class="total">
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{calc}})
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/item/checkBtn/CheckBtn'

export default {
  name: 'BottomBar',
  data () {
    return {
    }
  },
  components: {
    CheckBtn
  },
  computed: {
    totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((pre, item) => {
        return pre + item.price * item.count
      }, 0).toFixed(2)
    },
    calc () {
      return this.$store.state.cartList.filter(item => item.checked).length
    }
  }
}
</script>

<style scoped>
  .bottom {
    background-color: #eee;
    height: 40px;
    position: relative;
    z-index: 99;
    display: flex;
    font-size: 13px;
  }
  .allSel {
    flex: 0.25;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn {
    margin-left: 5px;
    margin-right: 5px;
  }
  .total {
    flex: 0.48;
    line-height: 40px;
    text-align: center;
  }
  .calculate {
    flex: 0.27;
    background-color: red;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
</style>
