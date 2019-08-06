<template>
    <div class="reward_statistics">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">奖励统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--center-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>奖励统计</h2>
          <p>reward_statistics</p>
        </div>
        <div class="mui-img">
          <div class="money_img">
            <router-link :to="{name:''}"><img :src="money_plus" alt="增加"></router-link>
          </div>
        </div>
      </div>
      <!--center-->

    </div>
</template>

<script>
  export default {
    name: 'reward_statistics',
    data(){
      return{
        money_plus: require('../image/plus.png'),
      }
    },
    methods:{
      add(){
        console.log('123')
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .customer{flex: 1}
  .one-img{display: flex;}
  .money_img{width: 36px;padding-top: 37px;padding-right: 10px}
  .money_img a img{width: 100%;}
  select{font-size: 15px}
</style>
