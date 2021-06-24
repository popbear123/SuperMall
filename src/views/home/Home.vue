<template>
  <div id="home">
    <Navbar class="Navbar">
      <div slot="center">首页</div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .Navbar {
    background-color: pink;
    color: #fff;
  }
</style>
