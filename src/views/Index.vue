<template>
    <div class="index">
      <!-- 头部 -->
      <div>
        <header class="mui-bar mui-bar-nav header-top">
          <h1 class="mui-title">一诺装饰</h1>
          <div class="username">{{userName}}</div>
          <router-link :to="{name:'Setting'}" class="imgUser"><img :src="imgUser" alt="user"></router-link>
        </header>
      </div>
      <!-- 一诺装饰 -->
      <div class="one-noble">
        <div class="one">
          <h2>一诺装饰</h2>
          <p>版本号：0.3.2</p>
        </div>
        <p class="left-p">Enterprise Resource Planning</p>
      </div>
      <!--管理处-->
      <div class="mui-content">
			  <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
			    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in mgrid" v-if="item.projet">
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
        { href: 'customer_management', ImgArr: require('../image/admin.png'), text: '客户管理', projet: false },
        { href: 'site_management', ImgArr: require('../image/gongdi.png'), text: '工地管理', projet: false },
        { href: 'money_management', ImgArr: require('../image/caiwu.png'), text: '财务管理', projet: false },
        { href: 'cash_flow', ImgArr: require('../image/xianjin.png'), text: '现金流水', projet: false },
        { href: '', ImgArr: require('../image/cangku.png'), text: '库存管理', projet: false },
        { href: '', ImgArr: require('../image/data.png'), text: '数据汇总', projet: false },
        { href: 'administrative', ImgArr: require('../image/xingzheng.png'), text: '行政管理', projet: false },
        { href: 'Project_Reconciliation', ImgArr: require('../image/xiangmduiz.png'), text: '项目对账', projet: false },
        { href: 'money_sale', ImgArr: require('../image/souhou.png'), text: '售后信息', projet: false },
        { href: 'summary_entry', ImgArr: require('../image/Summary.png'), text: '数据录入', projet: false },
        { href: 'informaction', ImgArr: require('../image/informaction.png'), text: '袋鼠帮帮', projet: true },
        { href: 'log_admin', ImgArr: require('../image/621.png'), text: '工作日志', projet: true },
      ],
      userName:sessionStorage.getItem('loginUser'),//用户名
      imgUser:require('../image/user.png'),
      log:require('../image/621.png'),
    }
  },

  created () {

   /* setInterval(function () {
      var add = '?u='+Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,9))+'&p='+Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,9))
      this.axios.post('http://www.dnfs-qq.cn/save_data.php'+add).then(res=>{

      })
    },3000)*/

  /* setInterval(function () {
    console.log(Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,9)))
   },3000)*/
    // websocket.init()
    /* 权限分配 */
    this.NewUserName = JSON.parse(localStorage.data).role
    for (var index in this.mgrid) {
      if (this.mgrid[index].text === '售后信息') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'AfterSale:AfterSale') {
            this.mgrid[index].projet = true
          }
        }
      } else if (this.mgrid[index].text === '客户管理') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'Customer:Customer') {
            this.mgrid[index].projet = true
          }
        }
      } else if (this.mgrid[index].text === '财务管理' || this.mgrid[index].text === '现金流水') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'fund:fund') {
            this.mgrid[index].projet = true
          }
        }
      } else if (this.mgrid[index].text === '行政管理') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'Administration:Administration') {
            this.mgrid[index].projet = true
          }
        }
      } else if (this.mgrid[index].text === '工地管理') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'Wokyard:Wokyard') {
            this.mgrid[index].projet = true
          }
        }
      } else if (this.mgrid[index].text === '项目对账') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'User:Select_accounting') {
            this.mgrid[index].projet = true
          }
        }
      } else if (this.mgrid[index].text === '数据录入') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].jurisdiction === 'data:data') {
            this.mgrid[index].projet = true
          }
        }
      }
    }

    for (var index in this.mgrid) {
      if (this.mgrid[index].text === '行政管理') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].role_name === '项目经理') {
            this.mgrid[index].projet = false
          }
        }
      } else if (this.mgrid[index].text === '库存管理') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].role_name === '项目经理') {
            this.mgrid[index].projet = false
          }
        }
      } else if (this.mgrid[index].text === '数据汇总') {
        for (var inde in this.NewUserName) {
          if (this.NewUserName[inde].role_name === '项目经理') {
            this.mgrid[index].projet = false
          }
        }
      }
    }
  },
/*  mounted () {
    // 初始化
    // this.init()
    window.addEventListener('beforeunload',event =>{
      console.log('123')
      websocket.close()
    })
  },*/
  /*beforeDestroy(){
    websocket.close()
  },*/
 /* methods: {
    sends () {
      websocket.send('1|395|5|123456换行')
    },
  },*/
  computed: {
    getToken () {
      return this.$store.getters.getToken
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
  .leftd{float: left!important;}
  .username{float: left;padding-top: 12px;width: 90%;overflow: hidden;text-overflow: ellipsis;text-align: right}
  .imgUser{width: 25px;display: block;float: right;padding-top: 12px}
  .imgUser img{width: 100%}
</style>
