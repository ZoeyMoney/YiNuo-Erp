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
      <!--center-->
      <div class="mui-content app">
        <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in msg">
            <router-link :to="item.href">
              <img :src="item.ImgArr" alt="">
              <div class="mui-media-body">{{item.text}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'summary_entry',
    data(){
      return{
        msg: [
          { href: 'customer_Designer', ImgArr: require('../image/Designer.png'), text: '设计师添加' },
          { href: 'bank_card', ImgArr: require('../image/bank_card.png'), text: '银行卡录入' },
          { href: 'rate', ImgArr: require('../image/rate.png'), text: '费率录入' },
          { href: 'money_projet', ImgArr: require('../image/shouhou.png'), text: '项目录入' },
          { href: 'money_Responsible', ImgArr: require('../image/Responsible.png'), text: '责任人录入' },
          { href: 'Follow_up', ImgArr: require('../image/Responsible.png'), text: '跟进人录入' },
          { href: 'profit_edit', ImgArr: require('../image/profit_edit.png'), text: '利润修改' },
        ]
      }
    },
  }
</script>

<style scoped>
  @import "../css/public.css";
</style>
