<template>
    <div class="log_statistics">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'log_admin'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">日志统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
    </div>
</template>

<script>
  export default {
    name: 'log_statistics'
  }
</script>

<style scoped>

</style>
