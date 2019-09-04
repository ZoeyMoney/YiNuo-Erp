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
          <p>/Statistics on incentives</p>
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
            <select name="" v-model="Release" @change="releaseClick(Release)">
              <option value="">请选择</option>
              <option v-for="item in list_inform" :value="item.mission_inform_person_id">{{item.mission_inform_person}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>任务人</label>
            <select name="" v-model="task" @change="teskClick(task)">
              <option value="">请选择</option>
              <option v-for="item in list_make" :value="item.mission_make_person_id">{{item.mission_make_person}}</option>
            </select>
          </div>
          <div class="mui-input-row dian">
            <div class="mui-input-row mui-radio dian-a" v-for="item in list_data">
              <label>{{item.text}}</label>
              <input name="radio1" type="radio" checked="a" :value="item.id" v-model="radio" @change="radioClick(radio)">
            </div>
          </div>
        </form>
        <table>
          <tr>
            <th><span :style="peopleTenLeft">任务人</span></th>
            <th><span :style="peopleTenLeft">下达人</span></th>
            <th><span :style="leftPx">时间</span></th>
            <th><span :style="leftPx">状态</span></th>
          </tr>
          <tr v-for="item in listTable" @click="tableClick(item.mission_id)">
            <td><span :style="tenPx">{{item.mission_inform_person}}</span></td>
            <td><span :style="tenPx">{{item.mission_make_person}}</span></td>
            <td><span>{{dates(item.mission_startDate)}}</span></td>
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
        <form class="mui-input-group" v-show="internal_content">
          <div class="mui-input-row">
            <label>下达人</label>
            <input type="text" class="mui-input-clear" :value="item.mission_inform_person" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>任务人</label>
            <input type="text" class="mui-input-clear" :value="item.mission_make_person" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>完成时间</label>
            <div>{{dates(item.mission_startDate)}}</div>
          </div>
          <!--<div class="mui-input-row">
            <label>天数</label>
            <input type="text" class="mui-input-clear" :value="item.mission_day" placeholder="无" disabled="disabled">
          </div>-->
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
        <div class="mui-input-row form-btn" v-show="btn_no">
          <button type="button" class="mui-btn mui-btn-blue" v-show="item.mission_state =='2' || item.mission_state=='0'" @click="del(item.mission_id,item.mission_inform_person)">删除</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="add" v-if="item.mission_state =='0'">提交审批</button>
        </div>
        <form class="mui-input-group" v-if="text_ad">
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" placeholder="请输入备注" v-model="text_admin">
          </div>
        </form>
        <div class="mui-input-row form-btn" v-show="btn_yes">
          <button type="button" class="mui-btn mui-btn-blue" @click="cancel">取消</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="yes">确定</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'admin_task',
  data () {
    return {
      customer_name: '',
      admin: '', // 总权限设置
      user: '', // 登录名称
      radio: '0', // radio按钮
      imgUrl_loading: false, // 加载图片
      money_plus: require('../image/plus.png'),
      Release: '', // 下达人
      task: '', // 任务人
      list_data: [
        { text: '进行中', id: '0' },
        { text: '审批中', id: '2' },
        { text: '已完成', id: '1' }
      ],
      listTable: [], // table数据
      msg_box: false, // 弹出层
      msg_list: '', // 弹出层数据
      msg_add: true, // 提交审批
      list_inform: '',
      list_make: '',
      internal_content: true, // 内部信息
      btn_no: true, // 按钮
      text_ad: false, // 备注
      text_admin: '', // 备注model
      btn_yes: false,
      tenPx: {
        display: 'block',
        paddingLeft: '10px'
      },
      leftPx: {
        display: 'block',
        textAlign: 'left'
      },
      peopleTenLeft: {
        display: 'block',
        textAlign: 'left',
        paddingLeft: '10px'
      }
    }
  },
  created () {
    // 权限分配
    var adminnostorm = JSON.parse(localStorage.data).role
    this.admin = adminnostorm[0].role_name
    this.user = JSON.parse(localStorage.data).userNumber
    //  table数据
    this.axios.get('/Administration/Select_mission' + '?mission_stale=' + this.radio).then(res => {
      this.listTable = res.data.list_mission
      this.list_inform = res.data.list_inform_person
      this.list_make = res.data.list_make_Person
    })
  },
  computed: {
    //  关键字查询
    /* listTables(){
        var then = this
        var lists = []
        then.listTable.map(function (item) {
          if (item.mission_inform_person.search(then.customer_name) != -1) {
            lists.push(item)
          }
        })
        return lists
      } */
  },
  methods: {
    //  封装全局
    model_id (res) {
      this.listTable = res.data.list_mission
      this.list_inform = res.data.list_inform_person
      this.list_make = res.data.list_make_Person
    },
    //  下达人
    releaseClick (id) {
      var add = '?'
      if (this.Release != '') {
        add += 'mission_inform_person=' + id
      }
      if (this.task != '') {
        add += '&mission_make_person=' + this.task
      }
      if (this.radio != '') {
        add += '&mission_stale=' + this.radio
      }
      this.axios.get('/Administration/Select_mission' + add).then(res => {
        this.model_id(res)
      })
    },
    // 任务人
    teskClick (id) {
      var add = '?'
      if (this.task != '') {
        add += 'mission_make_person=' + id
      }
      if (this.Release != '') {
        add += '&mission_inform_person=' + this.Release
      }
      if (this.radio != '') {
        add += '&mission_stale=' + this.radio
      }
      this.axios.get('/Administration/Select_mission' + add).then(res => {
        this.model_id(res)
      })
    },
    // 状态
    radioClick (id) {
      var add = '?mission_stale=' + id
      if (this.Release != '') {
        add += '&mission_inform_person=' + this.Release
      }
      if (this.task != '') {
        add += '&mission_make_person=' + this.task
      }
      this.axios.get('/Administration/Select_mission' + add).then(res => {
        this.model_id(res)
      })
    },
    // 时间转换
    dates (data) {
      var datas = new Date(data)
      var d = datas.getFullYear()
      var m = datas.getMonth() + 1
      var y = datas.getDate()
      var mm = datas.getHours()
      return d + '-' + m + '-' + y
    },
    // 弹出层打开
    tableClick (id) {
      this.msg_box = true
      // 传入点入的数据
      var list = []
      for (var index in this.listTable) {
        if (id == this.listTable[index].mission_id) {
          list.push(this.listTable[index])
        }
      }
      this.msg_list = list
      // 打开后后禁止页面滑动
      var mo = function (e) {
        e.preventDefault()
      }
      document.body.style.overflow = 'hidden'
      document.removeEventListener('touchmove', mo, true)
    },
    // 弹出层关闭
    closeClick () {
      this.msg_box = false
      // 关闭后后打开页面滑动
      var mo = function (e) {
        e.preventDefault()
      }
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
    },
    //  删除
    del (id, prosen) {
      var then = this
      if (this.user == prosen || this.admin == '总权限') {
        this.imgUrl_loading = true
        this.axios.post('/Administration/Delete_mission' + '?mission_id=' + id).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert(res.data.data, function () {
              then.$router.go(0)
            })
          }
        })
      } else {
        mui.alert('您不是下达人所以无法删除')
      }
    },
    //  提交审批
    add () {
      // 内容消失
      this.internal_content = false
      //  按钮消失
      this.btn_no = false
      //  新按钮出现
      this.btn_yes = true
      //  备注出现
      this.text_ad = true
    },
    //  取消
    cancel () {
      //  新按钮消失
      this.btn_yes = false
      // 内容出现
      this.internal_content = true
      //  按钮出现
      this.btn_no = true
      //  备注出现
      this.text_ad = false
    },
    //  确定
    yes () {
      var then = this
      var _true = true
      var add = '?'
      if (this.text_admin == '') {
        mui.toast('备注不能为空')
        _true = false
        return false
      }
      for (var index in this.msg_list) {
        if (this.msg_list[index].mission_state == '0') {
          add += 'approve_stale=0' + '&approve_make_person=' + this.msg_list[index].mission_make_person_id + '&approve_inform_person=' + this.msg_list[index].mission_inform_person_id +
              '&mission_id=' + this.msg_list[index].mission_id + '&approve_text=' + this.text_admin
          this.imgUrl_loading = true
          this.axios.post('/Administration/Add_Approve' + add).then(res => {
            if (res.status === 200) {
              this.imgUrl_loading = false
              mui.alert(res.data.data, function () {
                then.$router.go(0)
              })
            }
          })
        } else {
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
  /*radio*/
  .radio-left{display: flex;position: relative;right: 7px;white-space: nowrap}
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
  .mui-checkbox input[type=checkbox], .mui-radio input[type=radio]{top: 8px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
  /deep/input::-webkit-input-placeholder{color: #818181}
  .dian{display: flex;white-space: nowrap;padding-left: 11px}
  .dian-a{position: relative;right: 11px}
</style>
