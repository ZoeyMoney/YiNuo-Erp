<template>
    <div class="customer_statistics">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'customer_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户统计-->
      <div class="mui-content">
        <div class="customer">
          <h2>客户统计</h2>
          <p>/Customer input</p>
        </div>
      </div>
      <!--表格-->
      <div class="mui-content">
        <!--关键字-->
        <div class="mui-input-row input-top">
          <label>工地搜索</label>
          <input type="text" class="mui-input-clear" placeholder="请输入关键字" v-model="search">
        </div>
        <!--表格-->
        <div class="mui-content label-flex">
          <div class="mui-input-row">
            <label>设计师</label>
            <select v-model="customer_stylist" :class="{classGary:customer_stylist=='',classBlack:customer_stylist!=''}" @change="styleClick">
              <option value="" selected="selected">请选择</option>
              <option v-for="(item,index) in listName" :value="item.fund_person">{{item.fund_person}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>设计阶段</label>
            <select v-model="stage_name"  :class="{classGary:stage_name=='',classBlack:stage_name!=''}" @change="stage_nameClick">
              <option value="" selected="selected">请选择</option>
              <option v-for="index in stageName" :value="index.text">{{index.text}}</option>
            </select>
          </div>
        </div>
        <table border="0">
          <tr>
            <th><span :style="lefta">工地名称</span></th>
            <th><span>设计师</span></th>
            <th><span>阶段</span></th>
            <th><span>预算</span></th>
            <th><span>天</span></th>
            <th><span>级</span></th>
          </tr>
          <tr v-for="item in lists" @click="mername(item.customer_id)">
            <td><span :style="lefta">{{item.customer_name}}</span></td>
            <td><span>{{item.fund_person}}</span></td>
            <td>
              <span v-show="item.follow_stage!=''">{{item.follow_stage}}</span>
              <span v-show="item.follow_stage =='' || item.follow_stage==undefined">无</span>
            </td>
            <td><span>{{item.customer_budget}}</span></td>
            <td>
              <span v-show="item.date!=''">{{item.date}}</span>
              <span v-show="item.date ==undefined">无</span>
            </td>
            <td>
              <span v-show="item.customer_grade !=''">{{item.customer_grade}}</span>
              <span v-show="item.customer_grade ==''||item.customer_grade==undefined">无</span>
            </td>
          </tr>
        </table>
      </div>
      <!--底部-->
      <div class="footer">
        <div class="footer-botton">
          <p>TOTAL</p>
        </div>
        <div class="footer-botton">
          <p>总人数:<em :style="listRad">{{lengths}}</em></p>
          <em>￥:{{add}}W</em>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'customer_statistics',
  data () {
    return {
      imgUrl_loading: false,
      search: '', // 关键字
      customer_stylist: '', // 设计师
      stage_name: '', // 阶段
      dates: '',
      listName: '',
      osd: true,
      optioos: '',
      list: [],
      lengths: '',
      add: '', // 钱总
      listtime: '', // 倒计时
      all_list:'',//备份table数据
      stageName:[
        {text:'平面图'},
        {text:'施工图'},
        {text:'未量尺'},
      ],
      ooliust:[],
      /* table */
      /* table的最后一个td */
      listRad: {
        color: 'red',
        fontWeight: 'bold'
      },
      lefta: {
        paddingLeft: '10px'
      },
    }
  },
  computed: {
    // 搜索+统计金额+统计人数的合
    lists () {
      var then = this
      var newList = []
      var all = 0
      then.list.map(function (item) {
        if (item.customer_name.search(then.search) != -1 ||
            item.fund_person.search(then.search) != -1) {
          newList.push(item)
        }
      })
      if (newList != '') {
        for (var index in newList) {
          all += newList[index].customer_budget
        }
        this.add = Math.floor(all * 100) / 100
        this.lengths = newList.length
      }
      return newList
    }
  },
  methods: {
    // 设计师
    styleClick () {
      var then = this
      var newList = []
      then.lists.map(function (item) {
        if (item.fund_person.search(then.customer_stylist) != -1) {
          newList.push(item)
        }
      })
      this.ooliust = newList
      if (this.customer_stylist ==''){
        this.list = this.all_list
      }else{
        this.list = newList
      }
    },
    //阶段
    stage_nameClick(){
      var list = []
      if(this.customer_stylist !=''){
      for(var index in this.ooliust) {
        if (this.stage_name == this.ooliust[index].follow_stage){
          list.push(this.ooliust[index])
        }
      }
      }else{
        for(var index in this.all_list) {
          if (this.stage_name == this.all_list[index].follow_stage){
            list.push(this.all_list[index])
          }
        }
      }
        if (this.stage_name ==''){
          this.list = this.ooliust
        }else{
          this.list = list
        }


    },
    // 页面传参
    mername (id) {
      var lists = {}
      for (var index in this.list) {
        if (id == this.list[index].customer_id) {
          lists = this.list[index]
        }
      }
      localStorage.customer_statistics = JSON.stringify(lists)
      this.$router.push({ name: 'customer_details', query: { lists } })
      // console.log(list)
      // this.$router.push({ path: 'customer_details', query: { id: id.customer_id } })
    },
  },
  created () {
    this.imgUrl_loading = true
    // table数据
    this.axios.get('/Customer/SelectStageCustomer').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.list = res.data
        this.all_list = res.data
        var ids = []
        for (var index in this.list) {
          ids.push(this.list[index].customer_id)
        }
      }
    })
    // 设计师
    this.axios.get('/select_follow_person' + '?fund_person_state=3').then(res => {
      this.listName = res.data.data
    })
    //  倒计时
    setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000)
  },
}
</script>

<style scoped>
  @import "../css/public.css";
  [v-cloak]{
    display: none;
  }
  .classGary{color: gray}
  .classBlack{color: black}
  /*头部*/
  .customer{margin-top: 70px;}
  .mui-bar-nav~.mui-content{padding-top: 3px;}
  /*搜索*/
  .input-top{background-color: white;}
  .mui-icon-clear{display: none!important;}
  /*设计师一行*/
  .label-flex select{font-size: 15px}
  .row-flex label{flex: 1;line-height: 40px;text-align: left;font-size: 15px;padding: 0 15px}
  .row-flex select{padding: 9px 15px!important;margin-bottom: 0;flex: 4;}
  /*table*/
  table{width:100%;font-size: 14px;display: block;text-align: left;white-space: nowrap;margin-bottom: 100px}
  table tr th{background-color: #dadada;line-height: 27px}
  table tr th:nth-child(1){width: 50%;min-width: 130px}
  table tr th:nth-child(2),table tr th:nth-child(3){min-width: 55px;width: 14%}
  table tr th:nth-child(4){min-width: 30px;width: 12%}
  table tr th:nth-child(5){width: 10%}
  table tr th:nth-child(6){min-width: 34px}
  table tr td:nth-child(1) span{display: block;overflow: hidden;width: 160px;text-overflow: ellipsis}
  table tr{border-bottom: 1px solid #dadada;line-height: 28px}
  .element::-webkit-scrollbar {display:none}
  /deep/.el-radio{padding-left: 9px;line-height: 36px}
  /*底部*/
  .footer{background-color: #dedcdc;position: fixed;width: 100%;bottom: 0;display: flex;padding-top: 10px;z-index: 1000}
  .footer .footer-botton:nth-child(1){flex: 1;padding-left: 8px;}
  .footer .footer-botton:nth-child(2){flex: 1;display: flex;}
  .footer .footer-botton p{color: black;font-weight: bold;font-size: 15px}
  .footer .footer-botton:nth-child(2) p{flex: 1;text-align: center;font-size:15px;}
  .footer .footer-botton:nth-child(2) em{flex: 1;font-size: 15px;font-weight:bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
</style>
