<template>
    <div class="site_management">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">袋鼠帮帮</h1>
        <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>袋鼠帮帮</h2>
        <p>Customer management</p>
      </div>
      <!--九宫格-->
      <div class="mui-content app">
      <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in list">
          <router-link :to="item.href">
            <img :src="item.listImg" alt="">
              <div class="mui-media-body">{{item.name}}</div>
          </router-link>
      </li>
      </ul>
      </div>
    </div>
</template>

<script>
  export default {
   name: 'site_management',
  data () {
    return {
      list: [
        { name: '工人录入', listImg: require('../image/bi.png'), href: 'workers_enter' },
        { name: '工人统计', listImg: require('../image/data.png'), href: 'list_workers' },
        { name: '工地评论', listImg: require('../image/cheliang.png'), href: 'site_Inspection' },
        { name: '其他', listImg: require('../image/cheliang.png'), href: 'site_Inspection' }
      ]
    }
  },
  }
</script>

<style scoped>
  .mui-bar-nav~.mui-content{padding-top: 31px}
  *{font-size: 15px}
  span{display: block}
</style>
