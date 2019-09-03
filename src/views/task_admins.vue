<template>
    <div class="task_admins">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">审批统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--center-->
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--菜单-->
      <div class="mui-content">
        <!--任务下达-->
        <div class="mui-content">
          <div class="customer">
            <h2>审批统计</h2>
            <p>/task admin</p>
          </div>
        </div>
        <!--top-->
        <div class="mui-content app">
          <form class="mui-input-group">
            <div class="mui-input-row" v-if="task_people_if">
              <label>审批人</label>
              <select name="" v-model="zhiX" @change="zhiXClick(zhiX)">
                <option value="">请选择</option>
                <option v-for="item in list_inform" :value="item.approve_inform_person_id">{{item.approve_inform_person}}</option>
              </select>
            </div>
            <div class="mui-input-row" v-if="Release_if">
              <label>执行人</label>
              <select name="" v-model="renW" @change="renWClick(renW)">
                <option value="">请选择</option>
                <option v-for="item in list_make" :value="item.approve_make_person_id">{{item.approve_make_person}}</option>
              </select>
            </div>
            <!--<div class="mui-input-row">
              <label>状态</label>
              <select name="" v-model="radio" @change="radioClick(radio)">
                <option value="">请选择</option>
                <option v-for="item in list_radio" :value="item.id">{{item.text}}</option>
              </select>
            </div>-->
            <div class="mui-input-row dian">
              <div class="mui-input-row mui-radio dian-a" v-for="item in list_radio">
                <label>{{item.text}}</label>
                <input name="radio1" type="radio" checked="a" :value="item.id" v-model="radio" @change="radioClick(radio)">
              </div>
            </div>
          </form>
          <table border="0">
            <tr>
              <th><span :style="lefta">审批人</span></th>
              <th><span>执行人</span></th>
              <th><span>时间</span></th>
              <th><span>状态</span></th>
            </tr>
            <tr v-for="item in list" @click="idClick(item.approve_id)">
              <td><span :style="lefta">{{item.approve_inform_person}}</span></td>
              <td><span>{{item.approve_make_person}}</span></td>
              <td>
                <span v-show="item.mission_startDate">{{item.mission_startDate | data}}</span>
                <span v-show="item.mission_startDate == undefined">暂无</span>
              </td>
              <td>
                <div v-show="item.approve_stale == '0'">待审核</div>
                <div v-show="item.approve_stale == '1'">已同意</div>
                <div v-show="item.approve_stale == '2'">已拒绝</div>
              </td>
            </tr>
          </table>
          <div class="mui-content msgbox" v-show="msg_box" v-for="item in msg_list">
            <div class="close">
              <div class="close-i">
                <i class="el-icon-close" @click="closeClick"></i>
              </div>
            </div>
            <form class="mui-input-group" v-show="internal_content">
              <div class="mui-input-row">
                <label>下达人</label>
                <input type="text" class="mui-input-clear" :value="item.approve_inform_person" placeholder="无" disabled="disabled">
              </div>
              <div class="mui-input-row">
                <label>任务人</label>
                <input type="text" class="mui-input-clear" :value="item.approve_make_person" placeholder="无" disabled="disabled">
              </div>
              <div class="mui-input-row">
                <label>完成时间</label>
                <div v-show="item.mission_startDate">{{item.mission_startDate | data}}</div>
                <div v-show="item.mission_startDate == undefined">暂无</div>
              </div>
              <!--<div class="mui-input-row">
                <label>天数</label>
                <input type="text" class="mui-input-clear" :value="item.mission_day" placeholder="无" disabled="disabled">
              </div>-->
              <div class="mui-input-row">
                <label>状态</label>
                <div v-show="item.approve_stale == '0'">待审核</div>
                <div v-show="item.approve_stale == '1'">已同意</div>
                <div v-show="item.approve_stale == '2'">已拒绝</div>
              </div>
              <div class="mui-input-row">
                <label>任务信息</label>
                <input type="text" class="mui-input-clear" :value="item.mission_text" placeholder="无" disabled="disabled">
              </div>
            </form>
            <div class="mui-input-row form-btn" v-show="item.approve_stale =='0'">
              <button type="button" class="mui-btn mui-btn-blue" @click="add(item.approve_id)">同意</button>
              <button type="button" class="mui-btn mui-btn-blue" @click="on_no(item.approve_id)">拒绝</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'task_admins',
  data () {
    return {
      imgUrl_loading: false,
      task_people_if: true,
      zhiX: '', // 执行人查询
      renW: '', // 任务人查询
      task_people: '', // 执行人
      task_people_id: '',
      Release_if: true,
      msg_box: false, // 弹出层
      internal_content: true, // 内部信息
      msg_list: '', // 弹出层数据
      Release: '', // 下达人
      list_inform: '',
      list_make: '',
      Release_id: '',
      radio: '0',
      list_radio: [
        { text: '待审核', id: '0' },
        { text: '已同意', id: '1' },
        { text: '已拒绝', id: '2' }
      ],
      list: '', /* table */
      lefta: {
        paddingLeft: '17px'
      }
    }
  },
  created () {
    if (JSON.parse(localStorage.data).role[0].role_name != '总权限') {
      this.task_people_if = false
      this.Release_if = false
    }
    // table数据
    this.axios.get('/Administration/Select_approve?approve_stale=0').then(res => {
      this.list = res.data.list_administration
      this.list_inform = res.data.list_inform_person
      this.list_make = res.data.list_make_person
    })
    this.task_people = window.fund_people
    this.task_people_id = window.fund_people_name
    this.Release = window.fund_people_huan
    this.Release_id = window.fund_people_huan_name
  },
  methods: {
    // 查询审批
    zhiXClick (id) {
      var add = '?'
      if (this.zhiX != '') {
        add += 'approve_inform_person=' + id
      }
      if (this.renW != '') {
        add += '&approve_make_person=' + this.renW
      }
      if (this.radio != '') {
        add += '&approve_stale=' + this.radio
      }
      this.axios.get('/Administration/Select_approve' + add).then(res => {
        this.list = res.data.list_administration
        this.list_inform = res.data.list_inform_person
        this.list_make = res.data.list_make_person
      })
    },
    // 查询执行
    renWClick (id) {
      var add = '?'
      if (this.renW != '') {
        add += 'approve_make_person=' + id
      }
      if (this.zhiX != '') {
        add += '&approve_inform_person=' + this.zhiX
      }
      if (this.radio != '') {
        add += '&approve_stale=' + this.radio
      }
      this.axios.get('/Administration/Select_approve' + add).then(res => {
        this.list = res.data.list_administration
        this.list_inform = res.data.list_inform_person
        this.list_make = res.data.list_make_person
      })
    },
    // 状态
    radioClick (id) {
      var add = '?approve_stale=' + id
      if (this.zhiX != '') {
        add += '&approve_inform_person=' + this.zhiX
      }
      if (this.renW != '') {
        add += '&approve_make_person=' + this.renW
      }
      this.axios.get('/Administration/Select_approve' + add).then(res => {
        this.list = res.data.list_administration
        this.list_inform = res.data.list_inform_person
        this.list_make = res.data.list_make_person
      })
    },
    // 执行人
    task_peopleClick () {
      var prosen = 'task_admins_user'
      this.$router.push({ path: 'relevant_people' })
      window.prosen = prosen
    },
    // 下达人
    Release_peopleClick () {
      var prosen = 'Release_admins_user'
      this.$router.push({ path: 'relevant_people' })
      window.prosen = prosen
    },
    //  覆盖页
    idClick (id) {
      this.msg_box = true
      // 传入点入的数据
      var list = []
      for (var index in this.list) {
        if (id == this.list[index].approve_id) {
          list.push(this.list[index])
        }
      }
      this.msg_list = list
      // console.log(this.msg_list)
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
    //  同意
    add (id) {
      var then = this
      var _true = true
      this.imgUrl_loading = true
      this.axios.post('/Administration/Update_approve' + '?approve_id=' + id + '&approve_stale=1').then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.data, function () {
            then.$router.go(0)
          })
        }
      })
    },
    //  拒绝
    on_no (id) {
      var then = this
      var _true = true
      this.imgUrl_loading = true
      this.axios.post('/Administration/Update_approve' + '?approve_id=' + id + '&approve_stale=2').then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.data, function () {
            then.$router.go(0)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  select{font-size: 15px}
  /*table*/
  table{width:100%;font-size: 14px;display: block;text-align: left;white-space: nowrap;margin-bottom: 100px}
  table tr th{background-color: #dadada;line-height: 27px}
  table tr th:nth-child(1){width: 5%;min-width: 102px}
  table tr th:nth-child(2),table tr th:nth-child(3){min-width: 55px;width: 14%}
  table tr th:nth-child(4){min-width: 30px;width: 12%}
  table tr td:nth-child(1) span{display: block;overflow: hidden;width: 84px;text-overflow: ellipsis}
  table tr{border-bottom: 1px solid #dadada;line-height: 28px}
  /*msgbox*/
  .msgbox{position: absolute;top: 6%;left: 0;right: 0;bottom: 0;background-color: white;z-index: 40}
  .msgbox .close{line-height: 30px}
  .msgbox .close .close-i{text-align: right;padding-right: 14px;padding-top: 7px}
  .msgbox form .mui-input-row div{font-size: 15px;padding: 11px}
  /deep/.el-icon-close{font-size: 28px}
  .dian{display: flex;white-space: nowrap;padding-left: 11px}
  .dian-a{position: relative;right: 11px}
  /*btn*/
  .form-btn button{width: 41%!important;margin: 0 3px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
