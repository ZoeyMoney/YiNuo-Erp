<template>
    <div class="edit_bank">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">编辑银行卡</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>户主</label>
            <input type="text" class="mui-input-clear" :value="bank_person" placeholder="无" disabled="disabled">
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'edit_bank',
    data(){
      return{

      }
    },
    created () {
      console.log(JSON.parse(localStorage.bank_bank))
    }
  }
</script>

<style scoped>

</style>
