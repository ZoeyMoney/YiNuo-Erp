<template>
    <div class="login_loading">
      <!--loading-->
      <div class="loading">
        <img :src="imgUrl" alt="加载中">
      </div>
    </div>
</template>

<script>
export default {
  name: 'login_loading',
  data () {
    return {
      imgUrl: require('../image/loading-msg.gif')
    }
  }
}
</script>

<style scoped>
  .loading{background: white;position: absolute;z-index: 2000;width: 100%;height: 100%;opacity: 0.6}
  .loading img{position: relative;top: 34%;left: 40%;}
</style>
