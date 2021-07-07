<template>
  <div class="detail-params">
    <div class="rule">
      <div class="rule-item" v-for="(item, index) in GoodsParams.tables" :key="index">
        <div class="sp" v-for="(item1, index1) in item" :key="index1">{{item1}}</div>
      </div>
    </div>
    <div class="info">
        <div class="info-item" v-for="(item, index) in GoodsParams.set" :key="index">
          <span class="pattern">{{item.key}}</span>
          <span class="text">{{item.value}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    GoodsParams: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .detail-params {
    padding: 10px 10px;
  }
  .rule {
    border-bottom: 2px solid #eee;
  }
  .rule-item {
    width: 100%;
    display: flex;
    font-size: 12px;
    border-bottom: 2px solid #eee;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .sp:first-child {
    flex: 0.4;
  }
  .sp:nth-child(2) {
    flex: 0.2;
  }
  .sp:nth-child(3) {
    flex: 0.2;
  }
  .sp:nth-child(4) {
    flex: 0.2;
  }
  .info-item {
    display: flex;
    width: 100%;
    font-size: 12px;
    border-bottom: 2px solid #eee;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .pattern {
    flex: 0.25;
  }
  .text {
    flex: 0.75;
    color: #ff5777;
  }
</style>
