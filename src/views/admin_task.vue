<template>
    <div class="admin_task">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">任务统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--center-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>任务统计</h2>
          <p>Statistics on incentives</p>
        </div>
        <div class="mui-img">
          <div class="money_img">
            <router-link :to="{name:'task_people'}"><img :src="money_plus" alt="增加"></router-link>
          </div>
        </div>
      </div>
      <!--top-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <!--input_search-->
          <div class="mui-input-row input-top">
            <label>输入关键字</label>
            <input type="text" class="mui-input-clear" placeholder="请输入关键字" v-model="customer_name">
          </div>
        </form>
        <form class="mui-input-group black_mui">
          <div class="mui-input-row">
            <label>下达人</label>
            <select name="" v-model="Release" @click="releaseClick(Release)">
              <option value="">请选择</option>
              <option v-for="item in list_tesl" :value="item.fund_person_id">{{item.fund_person}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>任务人</label>
            <select name="" v-model="task" @click="teskClick(task)">
              <option value="">请选择</option>
              <option v-for="item in list_tesl" :value="item.fund_person_id">{{item.fund_person}}</option>
            </select>
          </div>
          <div class="mui-input-row goOver">
            <label>起始时间</label>
            <input type="date" class="mui-input-clear">
            <span class="go-span"></span>
            <input type="date" class="mui-input-clear">
          </div>
          <div class="mui-input-row">
            <label>状态</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in list_data" :value="item.text">{{item.text}}</option>
            </select>
          </div>
        </form>
        <table>
          <tr>
            <th><span :style="peopleTenLeft">任务人</span></th>
            <th><span :style="peopleTenLeft">下达人</span></th>
            <th><span :style="leftPx">时间</span></th>
            <th><span :style="leftPx">天数</span></th>
            <th><span :style="leftPx">状态</span></th>
          </tr>
          <tr v-for="item in listTables" @click="tableClick(item.mission_id)">
            <td><span :style="tenPx">{{item.mission_inform_person}}</span></td>
            <td><span :style="tenPx">{{item.mission_make_person}}</span></td>
            <td><span>{{dates(item.mission_startDate)}}</span></td>
            <td><span>{{item.mission_day}}</span></td>
            <td>
              <div v-show="item.mission_state == '0'">进行中</div>
              <div v-show="item.mission_state == '1'">已完成</div>
              <div v-show="item.mission_state == '2'">审批中</div>
            </td>
          </tr>
        </table>
      </div>
      <div class="mui-content msgbox" v-show="msg_box" v-for="item in msg_list">
        <div class="close">
          <div class="close-i">
            <i class="el-icon-close" @click="closeClick"></i>
          </div>
        </div>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>下达人</label>
            <input type="text" class="mui-input-clear" :value="item.mission_inform_person" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>任务人</label>
            <input type="text" class="mui-input-clear" :value="item.mission_make_person" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>期限</label>
            <div>{{dates(item.mission_startDate)}}</div>
          </div>
          <div class="mui-input-row">
            <label>天数</label>
            <input type="text" class="mui-input-clear" :value="item.mission_day" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>状态</label>
            <div v-show="item.mission_state == '0'">进行中</div>
            <div v-show="item.mission_state == '1'">已完成</div>
            <div v-show="item.mission_state == '2'">审批中</div>
          </div>
          <div class="mui-input-row">
            <label>任务信息</label>
            <input type="text" class="mui-input-clear" :value="item.mission_text" placeholder="无" disabled="disabled">
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="del(item.mission_id,item.mission_inform_person)">删除</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="add" v-if="item.mission_state =='0'">提交审批</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'admin_task',
    data(){
      return{
        customer_name:'',
        imgUrl_loading:false,//加载图片
        money_plus: require('../image/plus.png'),
        list_tesl:[
          {text:'张三'},
          {text:'李四'},
          {text:'王五'},
          {text:'奥利弗就会物理'},
        ],
        Release:'',//下达人
        task:'',//任务人
        list_data:[
          {text:'进行中'},
          {text:'完成'},
          {text:'已超时'},
          {text:'超时完成'},
          ],
        listTable: [], // table数据
        msg_box:false,//弹出层
        msg_list:'',//弹出层数据
        msg_add:true,//提交审批
        tenPx:{
          display:'block',
          paddingLeft:'10px'
        },
        leftPx:{
          display:'block',
          textAlign:'left'
        },
        peopleTenLeft:{
          display:'block',
          textAlign:'left',
          paddingLeft:'10px'
        }
      }
    },
    created(){
      //  下达人 任务人
      this.axios.get('/fund/Select_fund_person'+'?fund_person_state_A=2').then(res=>{
        this.list_tesl = res.data.data
      })
    //  table数据
      this.axios.get('/Administration/Select_mission').then(res=>{
        this.listTable = res.data.data
      })
    },
    computed:{
      //  关键字查询
      listTables(){
        var then = this
        var lists = []
        then.listTable.map(function (item) {
          if (item.mission_inform_person.search(then.customer_name) != -1) {
            lists.push(item)
          }
        })
        return lists
      }
    },
    methods:{
    //  封装全局
      model_id(res){

      },
    //  下达人
      releaseClick(id){
        this.axios.get(''+'?mission_inform_person='+id).then(res=>{

        })
      },
      teskClick(id){
        this.axios.get(''+'?mission_make_person='+id).then(res=>{

        })
      },
      //时间转换
      dates(data){
        var datas = new Date(data)
        var d = datas.getFullYear()
        var m = datas.getMonth() + 1
        var y = datas.getDate()
        var mm = datas.getHours()
        return d+'-'+m+'-'+y
      },
      //弹出层打开
      tableClick(id){
        this.msg_box = true
        //传入点入的数据
        var list = []
        for (var index in this.listTable) {
          if (id == this.listTable[index].mission_id) {
            list.push(this.listTable[index])
          }
        }
        this.msg_list = list
        //打开后后禁止页面滑动
        var mo = function (e) {
          e.preventDefault()
        }
        document.body.style.overflow = 'hidden'
        document.removeEventListener("touchmove",mo,true)
      },
      //弹出层关闭
      closeClick(){
        this.msg_box = false
        //关闭后后打开页面滑动
        var mo = function (e) {
          e.preventDefault()
        }
        document.body.style.overflow = ''
        document.removeEventListener("touchmove",mo,false)
      },
    //  删除
      del(id,prosen){
        var then = this
        this.imgUrl_loading = true
        this.axios.post('/Administration/Delete_mission'+'?mission_id='+id).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert(res.data.data,function () {
              then.$router.go(0)
            })
          }
        })
      },
    //  提交审批
      add(){
        var then = this
        var add='?'
        for (var index in this.msg_list) {
          if (this.msg_list[index].mission_state == '0') {
          add+='approve_stale=0'+'&approve_make_person='+this.msg_list[index].mission_make_person_id+'&approve_inform_person='+this.msg_list[index].mission_inform_person_id
          +'&mission_id='+this.msg_list[index].mission_id
            this.imgUrl_loading = true
            this.axios.post('/Administration/Add_Approve'+add).then(res=>{
              if (res.status === 200) {
                this.imgUrl_loading = false
                mui.alert(res.data.data,function () {
                  then.$router.go(0)
                })
              }
            })
          }else{
            mui.alert('已在进行中')
          }
        }
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .customer{flex: 1}
  .one-img{display: flex;}
  .money_img{width: 36px;padding-top: 37px;padding-right: 10px}
  .money_img a img{width: 100%;}
  select{font-size: 15px}
  /*form*/
  .black_mui{margin-top: 5px;}
  /*timeData*/
  .goOver{display: flex;}
  .goOver label{flex: 0.8;}
  .goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
  .goOver input{flex: 1;}
  /*table*/
  table{width: 100%;font-size: 14px;}
  table tr th{background-color: #DADADA;line-height: 32px}
  table tr {border-bottom: 1px solid rgb(218, 218, 218)}
  /*msgbox*/
  .msgbox{position: absolute;top: 6%;left: 0;right: 0;bottom: 0;background-color: white;z-index: 40}
  .msgbox .close{position: absolute;top: 0;width: 100%;line-height: 30px}
  .msgbox .close .close-i{text-align: right;padding-right: 14px;padding-top: 7px}
  /deep/.el-icon-close{font-size: 28px}
  .msgbox form .mui-input-row div{font-size: 15px;padding: 11px}
  /*btn*/
  .form-btn button{width: 34%!important;margin: 0 3px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
  /deep/input::-webkit-input-placeholder{color: #818181}
</style>
