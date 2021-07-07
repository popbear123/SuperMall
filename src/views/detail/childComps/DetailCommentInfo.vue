<template>
  <div class="detail-comment-info" v-if="Object.keys(UserCommentInfo).length > 0 && UserCommentInfo.list">
    <div class="title">
      <span class="title-left">
        用户评价
      </span>
      <span class="title-right">
        更多
      </span>
    </div>
    <div class="user">
      <span class="avatar">
        <img :src="UserCommentInfo.list[0].user.avatar" alt="">
      </span>
      <span class="name">
        {{UserCommentInfo.list[0].user.uname}}
      </span>
    </div>
    <div class="comment">
      {{UserCommentInfo.list[0].content}}
    </div>
    <div class="format">
      <span class="time">
        <!-- {{UserCommentInfo.list[0].created}} -->
        {{getDate}}
      </span>
      <span class="size">
        {{UserCommentInfo.list[0].style}}
      </span>
    </div>
    <span class="img" v-for="(item, index) in UserCommentInfo.list[0].images" :key="index" :v-if="UserCommentInfo.list[0].images">
      <img :src="item" alt="">
    </span>
  </div>
</template>

<script>
import { formatDate } from 'network/detail'

export default {
  name: 'DetailCommentInfo',
  props: {
    UserCommentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    getDate () {
      const time = new Date(this.UserCommentInfo.list[0].created * 1000)
      return formatDate(time, 'yyyy/MM/dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
  .detail-comment-info {
    padding: 0 10px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 3px solid #eee;
  }
  .title-left {
    font-size: 14px;
  }
  .title-right {
    font-size: 12px;
  }
  .user {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  .avatar {
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
  }
  .avatar img{
    height: 100%;
    width: 100%;
  }
  .name {
    font-size: 12px;
  }
  .comment {
    font-size: 12px;
    padding-bottom: 5px;
    color: #666;
  }
  .format {
    font-size: 12px;
    color: #999;
  }
  .img {
    margin-top: 10px;
    display: inline-block;
    height: 70px;
    width: 70px;
    margin-right: 5px;
  }
  .img img {
    height: 100%;
    width: 100%;
  }
</style>
