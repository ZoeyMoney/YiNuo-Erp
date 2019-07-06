<template>
    <div class="customer_management">
      <!--头部-->
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户管理</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户管理-->
      <div class="one-noble">
        <h2>客户管理</h2>
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
  name: 'customer_management',
  data () {
    return {
      msg: [
        { href: 'customer_entry', ImgArr: require('../image/bi.png'), text: '客户录入' },
        { href: 'customer_statistics', ImgArr: require('../image/data.png'), text: '客户统计' },
        { href: 'customer_follow_up', ImgArr: require('../image/liaotian.png'), text: '客户跟进' },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  @import "../css/public.css";
</style>
