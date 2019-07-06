<template>
  <div class="site_modify">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'customer_statistics'}" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">修改信息</h1>
      <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户详情-->
    <div class="mui-content">
      <div class="customer">
        <h2>修改信息</h2>
        <p>/modify</p>
      </div>
    </div>
    <!--form-->
    <div class="mui-content app">
    	<form class="mui-input-group" v-for="item in projet">
    	    <div class="mui-input-row">
    	        <label>工地名称</label>
    	        <input type="text" class="mui-input-clear" v-model="item.customer_name">
    	    </div>
        <div class="mui-input-row">
          <label>联系人</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_linkman">
        </div>
        <div class="mui-input-row">
          <label>联系方式</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_connect">
        </div>
        <div class="mui-input-row">
          <label>设计师</label>
          <select name="" v-model="item.customer_stylist">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in listName" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>装修面积</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_Decorate">
        </div>
        <div class="mui-input-row">
          <label>客户需求</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_demand">
        </div>
        <div class="mui-input-row">
          <label>项目预算</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_budget">
        </div>
        <div class="mui-input-row">
          <label>当前阶段</label>
          <select name="" v-model="item.stage_name">
            <option v-for="item in vstage_name">{{item.stage_name}}</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>限时</label>
          <input type="text" class="mui-input-clear" v-model="item.stage_stipulate">
        </div>
        <div class="mui-input-row">
          <label>开始时间</label>
          <input type="date" class="mui-input-clear" v-model="item.stage_startdate">
        </div>
    	</form>
      <button-save @click.native="add"></button-save>
    </div>
  </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'site_modify',
  data () {
    return {
      imgUrl_loading:false,
      projet: '', // 项目
      selet_aa: '', // 复制项目
      listName: '', // 设计师
      stage_name: '', // 当前阶段
      customer_linkman: '', // 联系人
      customer_connect: '', // 联系方式
      customer_Decorate: '', // 装修面积
      customer_budget: '', // 项目预算
      stage_stipulate: '', // 限时
      vstage_name: [
        { stage_name: '报价中' },
        { stage_name: '谈价中' },
        { stage_name: '未量尺' },
        { stage_name: '平面图' },
        { stage_name: '效果图' },
        { stage_name: '施工图' }
      ]
    }
  },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.customer_id = id
    this.axios.get(url.modify_projet+'?Customer=' + id).then(res => {
      this.projet = res.data
      this.select_aa = JSON.parse(JSON.stringify(res.data))
    })
    // 设计师
    this.axios.get(url.listName).then(customName => {
      this.listName = customName.data
    })
  },
  methods: {
    add () {
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var pattern = /^1[0-9]{10}$/ // 验证手机号
      // 判断装修面积是否为数字
      if (!nuber.test(this.customer_Decorate)) {
        mui.toast('装修面积格式错误')
        check = false
        return false
      }
      // 判断项目预算是否为数字
      if (!nuber.test(this.customer_budget)) {
        mui.toast('项目预算格式错误')
        check = false
        return false
      }
      // 判断限时是否为数字
      if (!nuber.test(this.stage_stipulate)) {
        mui.toast('限时格式错误')
        check = false
        return false
      }
      var then = this
      var add = '?' + 'Customer_id=' + this.customer_id
      for (var index in this.select_aa) {
        // 项目名称
        if (this.projet[0].customer_name === this.select_aa[index].customer_name) {

        } else {
          add = add + '&Customer_name=' + this.projet[0].customer_name
        }
        // 联系人
        if (this.projet[0].customer_linkman === this.select_aa[index].customer_linkman) {

        } else {
          add = add + '&Customer_linkman=' + this.projet[0].customer_linkman
        }
        //	联系方式
        if (this.projet[0].customer_connect === this.select_aa[index].customer_connect) {

        } else {
          add = add + '&Customer_connect=' + this.projet[0].customer_connect
        }
        // 设计师
        if (this.projet[0].customer_stylist === this.select_aa[index].customer_stylist) {

        } else {
          add = add + '&Customer_stylist=' + this.projet[0].customer_stylist
        }
        //	装修面积
        if (this.projet[0].customer_Decorate === this.select_aa[index].customer_Decorate) {

        } else {
          add = add + '&Customer_Decorate=' + this.projet[0].customer_Decorate
        }
        //	客户需求
        if (this.projet[0].customer_demand === this.select_aa[index].customer_demand) {

        } else {
          add = add + '&Customer_demand=' + this.projet[0].customer_demand
        }
        //	项目预算
        if (this.projet[0].customer_budget === this.select_aa[index].customer_budget) {

        } else {
          add = add + '&Customer_budget=' + this.projet[0].customer_budget
        }
        //	当前阶段
        if (this.projet[0].stage_name === this.select_aa[index].stage_name) {

        } else {
          add = add + '&stage_name=' + this.projet[0].stage_name
        }
        //	限时
        if (this.projet[0].stage_stipulate === this.select_aa[index].stage_stipulate) {

        } else {
          add = add + '&stage_stipulate=' + this.projet[0].stage_stipulate
        }
        //	开始时间
        if (this.projet[0].stage_startdate === this.select_aa[index].stage_startdate) {

        } else {
          add = add + '&stage_startdate=' + this.projet[0].stage_startdate
        }
      }
      if (this.projet === this.select_aa) {
        alert('没有修改任何信息')
      }
      this.imgUrl_loading = true
      this.axios.get(url.clinetModify + add).then(res => {
        this.list = res.data
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert('修改成功', function () {
            then.$router.push({ path: 'customer_statistics' })
          })
        } else {
          mui.alert('修改失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  form{
    margin-bottom: 20px;
  }
  select{font-size: 15px!important;background-color: transparent;}
  /*    x */
  .mui-input-row .mui-input-clear~.mui-icon-clear, .mui-input-row .mui-input-password~.mui-icon-eye, .mui-input-row .mui-input-speech~.mui-icon-speech{display: none!important;}
</style>
