<template>
    <div class="userNameUpdate">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'Setting'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">个人修改</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--top-->
      <!--菜单-->
      <div class="one-noble">
        <h2>个人中心</h2>
        <p>userNameUpdate</p>
      </div>
      <!--views-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>姓名</label>
            <input type="text" class="mui-input-clear" placeholder="请输入姓名" v-model="name">
          </div>
          <div class="mui-input-row">
            <label>电话号</label>
            <input type="text" class="mui-input-clear" placeholder="请输入电话号" v-model="phone_number">
          </div>
          <div class="mui-input-row">
            <label>部门</label>
            <select name="" v-model="department" :class="{gred:department=='',black:department!=''}">
              <option value="">请选择</option>
              <option value="" v-for="item in list_department" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>职务</label>
            <select name="" v-model="Position" :class="{gred:Position=='',black:Position!=''}">
              <option value="">请选择</option>
              <option v-for="item in list_Position" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>身份证号</label>
            <input type="text" class="mui-input-clear" placeholder="请输入身份证号" v-model="id_card">
          </div>
          <!--<div class="mui-input-row">
            <label>生日</label>
            <input type="text" class="mui-input-clear" placeholder="请输入生日" v-model="birthday">
          </div>-->
          <div class="mui-input-row">
            <label>毕业院校</label>
            <input type="text" class="mui-input-clear" placeholder="请输入毕业院校" v-model="graduation">
          </div>
          <div class="mui-input-row">
            <label>学历</label>
<!--            <input type="text" class="mui-input-clear" placeholder="请输入学历" v-model="Education">-->
            <select name="" v-model="Education" :class="{gred:Education=='',black:Education!=''}">
              <option value="">请选择</option>
              <option v-for="item in list_Education" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>入职时间</label>
            <el-date-picker v-model="Entry" type="date" placeholder="请输入入职时间"></el-date-picker>
          </div>
        </form>
        <!--button-->
        <button-save @click.native="add"></button-save>
      </div>
    </div>
</template>

<script>
export default {
  name: 'userNameUpdate',
  data(){
    return{
      imgUrl_loading:false,//动画
      name:'',//用户名
      phone_number:'',//电话号
      department:'',//部门
      list_department:[
        {text:'设计部门'},
        {text:'远控部门'},
        {text:'袋鼠帮帮部门'},
        {text:'工程部门'},
      ],
      Position:'',//职务
      list_Position:[
        {text:'总经理'},
        {text:'副总经理'},
        {text:'销售部长'},
        {text:'技术部长'},
        {text:'物控部长'},
        {text:'财务部长'},
        {text:'品管部长'},
        {text:'人事部长'},
        {text:'项目监理'},
      ],
      id_card:'',//身份证号
      // birthday:'',//生日
      graduation:'',//学校
      Education:'',//学历
      list_Education:[
        {text:'小学'},
        {text:'初中'},
        {text:'高中'},
        {text:'职高'},
        {text:'专科'},
        {text:'函授'},
        {text:'本科'},
        {text:'硕士研究生'},
        {text:'博士研究生'},
      ],
      Entry:'',//入职事件
      msg:'',//数据查询
    }
  },
  methods:{
    /*forbid () {
      // 禁止软键盘弹出
      document.activeElement.blur()
    },*/
    //信息查询
    info(){
      this.axios.get('/User/Select_User?user_id='+sessionStorage.getItem('loginUserId')).then(res=>{
        this.msg = res.data.data
        for (var index in this.msg) {
          this.name = this.msg[index].user_name
          if (this.msg[index].user_phone != undefined) {
            this.phone_number = this.msg[index].user_phone
          }
          if (this.msg[index].user_section != undefined) {
            this.department = this.msg[index].user_section
          }
          if (this.msg[index].user_duty != undefined) {
            this.Position = this.msg[index].user_duty
          }
          if (this.msg[index].user_IDNumber != undefined) {
            this.id_card = this.msg[index].user_IDNumber
          }
          if (this.msg[index].user_school != undefined) {
            this.graduation = this.msg[index].user_school
          }
          if (this.msg[index].user_education != undefined) {
            this.Education = this.msg[index].user_education
          }
          if (this.msg[index].user_startdate != undefined) {
            this.Entry = this.msg[index].user_startdate
          }
        }
      })
    },
    add(){
      var then = this
      var _true = true
      var pattern = /^1[0-9]{10}$/ // 验证手机号
      var nameReg = /^[\u4E00-\u9FA5]{2,10}$/ // 验证人的名字
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      var age = /^[0-9]*$/ // 验证数字
      var card = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/ // 身份证验证
      //姓名
      if (this.name == '' || !nameReg.test(this.name)) {
        mui.toast('姓名不能为空或格式错误')
        _true = false
        return false
      }
      //电话号
      if (this.phone_number == '' || !pattern.test(this.phone_number)) {
        mui.toast('电话号不能为空或格式错误')
        _true = false
        return false
      }
      //部门
      if (this.department == '') {
        mui.toast('部门不能为空')
        _true = false
        return false
      }
      //职务
      if (this.Position == '') {
        mui.toast('职务不能为空')
        _true = false
        return false
      }
      //身份证
      if (this.id_card == '' || !card.test(this.id_card)) {
        mui.toast('身份证不能为空或身份证格式错误')
        _true = false
        return false
      }
      //毕业学校
      if (this.graduation == '') {
        mui.toast('毕业学校学校不能为空')
        _true = false
        return false
      }
      //学历
      if (this.Education == '') {
        mui.toast('学历不能为空')
        _true = false
        return false
      }
      //入职时间
      if (this.Entry == '') {
        mui.toast('入职时间不能为空')
        _true = false
        return false
      }
      //入职时间
      var data = new Date(this.Entry)
      var d = data.getFullYear()
      var y = data.getMonth() + 1
      var m = data.getDate()
      var dates = d+'-'+y+'-'+m
      this.imgUrl_loading = true
      var add = '?user_id='+sessionStorage.getItem('loginUserId')+'&user_name='+this.name+'&user_IDNumber='+this.id_card+
        '&user_section='+this.department+ '&user_duty='+this.Position+'&user_school='+this.graduation+'&user_education='+this.Education+'&user_startdate='+dates+
        '&user_phone='+this.phone_number
      this.axios.get('/User/update_user'+add).then(res=>{
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert('保存成功',function () {
            then.$router.go(0)
          })
        }
      })
    }
  },
  created () {
  //  查询信息
  this.info()
  }
}
</script>

<style scoped>
  .gred{color: gray}
  .black{color: #000;}
  /deep/input::-webkit-input-placeholder{color: #818181}
  /deep/.el-input__prefix{display: none}
  /deep/.el-input--prefix .el-input__inner{font-size: 15px}
  select{font-size: 15px}
   input[type=datetime-local]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline:none;border:none;}
      select{-webkit-appearance: none;}
</style>
