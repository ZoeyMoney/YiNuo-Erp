<template>
    <div class="company_announcement">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">公司公告</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>公司公告</h2>
          <p>/company_announcement</p>
        </div>
        <div class="mui-img">
          <router-link :to="{name:'announcement_entry'}"><img :src="money_plus" alt="增加"></router-link>
        </div>
      </div>
      <!--公告-->
      <div class="mui-content app">
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-collapse" v-for="item in listNotice">
		        <a class="mui-navigate-right" href="#">
              <div class="projet-data">
                  <label>标题：{{item.notice_title}}</label>
                  <label>时间：{{item.notice_date | data}}</label>
              </div>
            </a>
		        <div class="mui-collapse-content">
		            <div :style="notice_text">{{item.notice_text}}</div>
		            <div :style="numbering">编号：{{item.notice_number}}</div>
		        </div>
		    </li>
		</ul>

      </div>
    </div>
</template>

<script>
export default {
  name: 'company_announcement',
  data () {
    return {
      money_plus: require('../image/plus.png'),
      listNotice: '', // 公告

      // 内容
      notice_text: {
        fontSize: '15px'
      },
      // 编号
      numbering: {
        fontSize: '15px',
        textAlign: 'right'
      }
    }
  },
  created () {
    // 公告
    this.axios.get('https://formattingclub.com/YiNuoLogin/notice/select_notice').then(res => {
      this.listNotice = res.data
      console.log(res.data)
    })
  },
  methods: {

  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .customer{flex: 1;}
  .one-img{display: flex;}
  .mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
  .mui-img a img{width: 100%;}
  /*超链接*/
  .projet-data{font-size: 15px;display: flex}
  .projet-data label{width: 50%;display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
</style>
