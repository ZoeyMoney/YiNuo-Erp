<template>
    <div class="cash_flow">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金流水</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>现金流水</h2>
        <p>administration</p>
      </div>
      <!--九宫格-->
      <div class="mui-content app">
        <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in list">
            <router-link :to="item.href">
              <img :src="item.listImg" alt="">
                <div class="mui-media-body">{{item.text}}</div>
            </router-link>
        </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'cash_flow',
    data(){
      return{
        list:[
          {href:'running_money',listImg:require('../image/xianjin.png'),text:'流水'},
          {href:'transfer_money',listImg:require('../image/zhuanzhang.png'),text:'转账'},
          {href:'income',listImg:require('../image/shouru_1.png'),text:'收入'},
          {href:'expenditure',listImg:require('../image/zhichu_1.png'),text:'支出'},
        ]
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  @import "../css/public.css";
</style>
