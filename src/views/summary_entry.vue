<template>
    <div class="summary_entry">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">数据汇总录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>数据汇总录入</h2>
          <p>/Data summary entry</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'summary_entry'
  }
</script>

<style scoped>

</style>
