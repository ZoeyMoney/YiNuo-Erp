<template>
    <div class="money_sale">
      <!--头部-->
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">售后管理</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户管理-->
      <div class="one-noble">
        <h2>售后管理</h2>
        <p>Customer management</p>
      </div>
      <!--九宫格-->
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
  name: 'money_sale',
  data () {
    return {
      msg: [
        { href: 'After_sales_entry', ImgArr: require('../image/shouhou.png'), text: '售后录入' },
        { href: 'After_sales_statistics', ImgArr: require('../image/tongji.png'), text: '售后统计' },
        { href: 'Follow_up_after_sale', ImgArr: require('../image/genjin.png'), text: '售后跟进' },
        { href: 'money_projet', ImgArr: require('../image/shouhou.png'), text: '项目录入' },
        { href: 'money_Responsible', ImgArr: require('../image/Responsible.png'), text: '责任人录入' },
        { href: 'Follow_up', ImgArr: require('../image/Responsible.png'), text: '跟进人录入' },
      ]
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
</style>
