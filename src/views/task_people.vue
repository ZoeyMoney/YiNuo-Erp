<template>
    <div class="task_people">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'admin_task'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">任务下达</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--任务下达-->
      <div class="mui-content">
        <div class="customer">
          <h2>任务下达</h2>
          <p>/admin_task</p>
        </div>
      </div>
      <!--center-->
      <div class="mui-content app">
        <form class="mui-input-group">
            <div class="mui-input-row">
              <label>下达人</label>
              <!--            <input type="text" v-model="Release" @click="Release_peopleClick" placehoolder="请选择下达人">-->
              <select name="" v-model="Release_id" :class="{classGray:Release_id=='',classBlack:Release_id!=''}">
                <option value="">请选择</option>
                <option v-for="item in task_people_list" :value="item.fund_person_id">{{item.fund_person}}</option>
              </select>
            </div>
            <div class="mui-input-row">
            <label>执行人</label>
<!--            <input type="text" v-model="task_people" @click="task_peopleClick" placeholder="请选择执行人">-->
            <select name="" v-model="task_people" :class="{classGray:task_people=='',classBlack:task_people!=''}">
              <option value="">请选择</option>
              <option v-for="item in task_people_list" :value="item.fund_person_id">{{item.fund_person}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>完成时间</label>
            <div class="block">
              <el-date-picker v-model="valueDate" type="date" align="left" placeholder="选择日期时间" @focus="dataFocus"></el-date-picker>
            </div>
          </div>
          <div class="mui-input-row">
            <label>任务详情</label>
            <input type="text" class="mui-input-clear" v-model="task_text" placeholder="请输入任务详情">
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="saveName">下达任务</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'task_people',
  data () {
    return {
      valueDate: '', // 期限
      task_people: '', // 任务人
      // task_people_id:'',//执行人id
      task_people_list: '', // 数据任务人
      Release: '', // 下达人
      Release_id: '', // 下任达id
      task_text: '', // 任务详情
      imgUrl_loading: false,
      user: ''
    }
  },
  created () {
    this.user = JSON.parse(localStorage.data).userNumber
    this.axios.get('/fund/Select_fund_person' + '?fund_person_state_A=2').then(res => {
      var list = {}
      for (var index in res.data.data) {
        if (this.user == res.data.data[index].fund_person) {
          list = res.data.data[index]
        }
      }
    })

    // 所有人数据
    this.axios.get('/fund/Select_fund_person' + '?fund_person_state_A=2').then(res => {
      this.task_people_list = res.data.data
    })
  },
  methods: {
    // 禁止键盘弹出
    dataFocus () {
      document.activeElement.blur()
    },
    // 执行人
    task_peopleClick () {
      var prosen = 'task_admin'
      this.$router.push({ path: 'relevant_people' })
      window.prosen = prosen
    },
    // 下任ren
    Release_peopleClick () {
      var prosen = 'Release_admin'
      this.$router.push({ path: 'relevant_people' })
      window.prosen = prosen
    },
    saveName () {
      var then = this
      var _true = true
      if (this.task_people == '' || this.Release_id == '' || this.valueDate == '' || this.task_text == '') {
        mui.toast('任务下达不能为空')
        _true = false
        return false
      }
      if (this.task_people == this.Release) {
        mui.toast('任务人跟下达人不能相同')
        _true = false
        return false
      }
      // this.imgUrl_loading = true
      var dates = new Date(this.valueDate)
      var d = dates.getFullYear()
      var m = dates.getMonth() + 1
      var y = dates.getDate()
      var date = d + '-' + m + '-' + y
      var add = '?mission_make_person=' + this.task_people + '&mission_inform_person=' + this.Release_id + '&mission_text=' + this.task_text + '&mission_startDate=' + date + '&mission_state=0'
      this.axios.post('/Administration/Add_Mission' + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.data, function () {
            then.$router.push({ name: 'admin_task' })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
    .classGray{color: gray}
    .reds{color: red}
    .classBlack,.blaks{color: black}
    select{font-size: 15px}
    /*data*/
    /deep/.el-input__prefix, .el-input__suffix{display: none}
    /deep/.el-input--prefix .el-input__inner{color: black;padding: 0}
    /*btn*/
    .form-btn button{width: 59%!important;margin: 0 3px!important;}
    .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
    .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
    /deep/input::-webkit-input-placeholder{color: #818181}
</style>
