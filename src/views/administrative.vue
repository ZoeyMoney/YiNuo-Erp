<template>
    <div class="administrative">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">行政管理</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>行政管理</h2>
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
  name: 'administrative',
  data () {
    return {
      list: [
        { href: 'company_announcement', listImg: require('../image/gg.png'), text: '公司公告' },
        { href: '../', listImg: require('../image/jd.png'), text: '任务管理' },
        { href: '', listImg: require('../image/jb.png'), text: '奖励统计' },
        { href: '', listImg: require('../image/chufa.png'), text: '处罚统计' },
        { href: '', listImg: require('../image/sj.png'), text: '周三事件' },
        { href: '', listImg: require('../image/sp.png'), text: '审批管理' },
        { href: '', listImg: require('../image/r.png'), text: '个人中心' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
