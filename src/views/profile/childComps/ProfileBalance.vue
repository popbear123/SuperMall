<template>
  <div class="balance">
    <div class="price item">
      <div>
        <span>0.00</span>
        <span>元</span>
      </div>
      <span>我的余额</span>
    </div>
    <div class="discount item">
      <div>
        <span>0</span>
        <span>个</span>
      </div>
      <span>我的优惠</span>
    </div>
    <div class="point item">
      <div>
        <span>0</span>
        <span>分</span>
      </div>
      <span>我的积分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBalance',
  data () {
    return {
    }
  }
}

</script>

<style scoped>
  .balance {
    display: flex;
    height: 83.6px;
    align-items: center;
    font-size: 13px;
    color: #666;
    border-bottom: 12px solid #f2f2f2;
  }
  .item {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  .item div span:first-child {
    font-weight: bold;
    color: #ff5f3e;
    font-size: 24px;
  }
  .item >span {
    margin-top: 5px;
  }
  .item:first-child, .item:nth-child(2) {
    border-right: 1px solid #f2f2f2;
  }
</style>
