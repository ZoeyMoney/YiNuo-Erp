<template>
    <div class="rate">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">费率录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>费率录入</h2>
          <p>/rate</p>
        </div>
      </div>
      <!--input-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>费率录入</label>
            <input type="text" class="mui-input-clear" v-model="rate" placeholder="请输入费率">
          </div>
        </form>
        <button-save @click.native="add()"></button-save>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rate',
  data () {
    return {
      rate: ''
    }
  },
  methods: {
    add () {
      console.log('345')
    }
  }
}
</script>

<style scoped>
  .mui-input-group{margin-bottom: 10px;}
</style>
