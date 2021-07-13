<template>
  <div class="center">
    <div class="msg item">
      <img src="~assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="shop item">
      <img src="~assets/img/profile/shopping.svg" alt="">
      <span>积分商城</span>
    </div>
    <div class="member item">
      <img src="~assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCenter',
  data () {
    return {
    }
  }
}

</script>

<style scoped>
  .center {
    display: flex;
    flex-direction: column;
    border-bottom: 12px solid #f2f2f2;
  }
  .item {
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 15px;
  }
  .item img {
    height: 22px;
    width: 22px;
  }
  .item span {
    height: 100%;
    line-height: 45px;
    flex: 1;
    padding-left: 10px;
  }
  .item:first-child span, .item:nth-child(2) span {
    border-bottom: 1px solid #f2f2f2;
  }
</style>
