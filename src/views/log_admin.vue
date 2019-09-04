<template>
    <div class="log_admin">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">日志管理</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>日志管理</h2>
        <p>admin log</p>
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
    name: 'log_admin',
    data(){
      return{
        list: [
          { href: 'admin_log', listImg: require('../image/log.png'), text: '工作日志' },
          { href: 'log_statistics', listImg: require('../image/log_statistics.png'), text: '日志统计' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
