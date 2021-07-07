<template>
  <div class="cart-list-item">
    <CheckBtn :class="{checked: isChecked}" @click.native="btnClick"></CheckBtn>
    <div class="img">
      <img :src="product.img" alt="">
    </div>
    <div class="content">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="bottom">
        <div class="price">￥{{product.price}}</div>
        <div class="num">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/item/checkBtn/CheckBtn'

export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  components: {
    CheckBtn
  },
  methods: {
    btnClick () {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    box-sizing: border-box;
    padding: 10px 5px;
    font-size: 12px;
    align-items: center;
  }

  .checked {
    background-color: red;
    border-color: red;
  }
  .img {
    flex: 0.3;
    border-radius: 3px;
    overflow: hidden;
    height: 100%;
  }
  .img img {
    height: 100%;
    width: 100%;
  }
  .content {
    flex: 0.7;
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 5px;
  }
  .title {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #ccc;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .price {
    color: red;
  }
</style>
