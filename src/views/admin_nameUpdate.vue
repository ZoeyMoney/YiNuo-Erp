<template>
    <div class="admin_nameUpdate">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">用户信息管理</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>用户信息管理</h2>
        <p>admin userName</p>
      </div>
      <!--views-->
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
    name: 'admin_nameUpdate',
    data(){
      return{
        list:[
          {text:'个人修改',listImg:require('../image/nameUpdate.png'),href:'userNameUpdate'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
