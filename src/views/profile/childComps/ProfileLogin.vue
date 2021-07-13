<template>
  <div class="ProfileLogin">
    <img src="~assets/img/profile/avatar.svg" alt="">
    <div class="login">
      <span class="sp1">登录/注册</span>
      <div class="sp2">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <span class="arrow">></span>
  </div>
</template>

<script>
export default {
  name: 'ProfileLogin',
  data () {
    return {
    }
  }
}

</script>

<style scoped>
  .ProfileLogin {
    background-color: #ff8198;
    height: 90px;
    margin-top: 39px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
  }
  .ProfileLogin img {
    height: 60px;
    width: 60px;
  }
  .login {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    color: #fff;
  }
  .sp2 {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .sp2 span{
    font-size: 12px;
  }
  .sp2 img {
    height: 20px;
    width: 20px;
  }
  .arrow {
    color: #fff;
    position: absolute;
    right: 10px;
  }
</style>
