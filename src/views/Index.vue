<template>
    <div class="index">
      <!-- 头部 -->
      <div>
        <header class="mui-bar mui-bar-nav header-top">
          <h1 class="mui-title">一诺装饰</h1>
          <router-link :to="{name:'Setting'}" class="mui-icon mui-icon mui-icon-gear mui-pull-right"></router-link>
        </header>
      </div>
      <!-- 一诺装饰 -->
      <div class="one-noble">
        <div class="one">
          <h2>一诺装饰</h2>
          <p>版本号：0.2.0</p>
        </div>
        <p class="left-p">Enterprise Resource Planning</p>
      </div>
      <!--管理处-->
      <div class="mui-content">
			  <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
			    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in mgrid">
			      <router-link :to="item.href">
              <img :src="item.ImgArr" alt="">
			        <div class="mui-media-body">{{item.text}}</div>
            </router-link>
			    </li>
        </ul>
      </div>
      <!-- 待办事项 -->
      <div class="botton-top">
        <h5>待办事项</h5>
        <ul>
          <li>待办事项</li>
          <li>待办事项</li>
          <li>待办事项</li>
          <li>待办事项</li>
        </ul>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      mgrid: [
        { href: 'customer_management', ImgArr: require('../image/admin.png'), text: '客户管理' },
        { href: 'site_management', ImgArr: require('../image/gongdi.png'), text: '工地管理' },
        { href: 'money_management', ImgArr: require('../image/caiwu.png'), text: '财务管理' },
        { href: 'administrative', ImgArr: require('../image/xingzheng.png'), text: '行政管理' },
        { href: '', ImgArr: require('../image/cangku.png'), text: '库存管理' },
        { href: '', ImgArr: require('../image/data.png'), text: '数据汇总' },
        { href: 'cash_flow', ImgArr: require('../image/xianjin.png'), text: '现金流水' },
        { href: 'Project_Reconciliation', ImgArr: require('../image/xiangmduiz.png'), text: '项目对账' },
        { href: 'money_sale', ImgArr: require('../image/souhou.png'), text: '售后信息' },
        { href: 'summary_entry', ImgArr: require('../image/Summary.png'), text: '数据录入' },
      ]
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .one{display: flex;line-height: 38px}
  .one p{flex: 1;text-align: right;padding-right: 13px;}
  .left-p{text-align: left}
  .jiugongge li a img{width: 37px}
  .botton-top h5{padding-left: 6%;padding-top: 7%;font-size: 18px;color: #000000;}
  .mui-table-view{background-color: #f2f2f2;}
  .botton-top h5{line-height: 1px;}
  .botton-top ul{padding-left: 26px;}
  .botton-top ul li{font-size: 15px;color: #848484;line-height: 20px;}
</style>
