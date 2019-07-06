<template>
    <div class="money_management">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">财务管理</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>财务管理</h2>
        <p>administration</p>
      </div>
      <!--fomr-->
      <div class="mui-content app">
        <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in listName">
            <router-link :to="item.href">
              <img :src="item.listImg"/>
              <div class="mui-media-body">{{item.text}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'money_management',
  data () {
    return {
      listName: [
        { href: 'money_profit', listImg: require('../image/lirun.png'), text: '利润统计' },
        { href: 'money_receivable', listImg: require('../image/yingshou.png'), text: '应收统计' },
        { href: 'payable_money', listImg: require('../image/yingfu.png'), text: '应付统计' },
        { href: '#', listImg: require('../image/gongzitongji.png'), text: '工资统计' },
      ]
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
</style>
