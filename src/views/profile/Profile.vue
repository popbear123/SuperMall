<template>
  <div class="profile">
    <Navbar class="nav-bar">
      <div slot="center">我的资料</div>
    </Navbar>
    <ProfileLogin></ProfileLogin>
    <ProfileBalance></ProfileBalance>
    <ProfileCenter></ProfileCenter>
    <ProfileBottom></ProfileBottom>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

import ProfileLogin from './childComps/ProfileLogin.vue'
import ProfileBalance from './childComps/ProfileBalance.vue'
import ProfileCenter from './childComps/ProfileCenter.vue'
import ProfileBottom from './childComps/ProfileBottom.vue'

export default {
  name: 'Profile',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    ProfileLogin,
    ProfileBalance,
    ProfileCenter,
    ProfileBottom
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
    font-weight: bold;
  }
</style>
