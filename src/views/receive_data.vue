<template>
    <div class="receive_data">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">已收数据</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--已收-->
      <div class="mui-content">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>项目名称</label>
            <input type="text" placeholder="请选择" v-model="site" @click="siteChange">
          </div>
          <div class="mui-input-row">
            <label>相关人</label>
            <input type="text" placeholder="请选择" v-model="fund_person" @click="relecant">
          </div>
          <div class="mui-input-row">
            <label>已付金额</label>
            <input type="text" placeholder="请选择" v-model="paid_money">
          </div>
          <div class="mui-input-row">
            <label>未付金额</label>
            <input type="text" placeholder="请选择" v-model="no_paid_money">
          </div>
        </form>
        <button-save @click.native="add"></button-save>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'receive_data',
    data(){
      return{
        imgUrl_loading:false,
        fund_person:'',
        fund_people_name:'',
        paid_money:'',
        no_paid_money:'',
        site:'',
        test_id:'',
      }
    },
    created(){
      //接收项目名称
      this.site = window.test
      this.test_id = window.test_id
      //接收相关人
      this.fund_person = window.fund_people
      this.fund_people_name = window.fund_people_name
    },
    methods:{
      //工地名称
      siteChange(){
        var expenditure = 'receive_data'
        this.$router.push({path:'siteList',})
        window.expenditure = expenditure
      },
      //相关人
      relecant(){
        var expenditure = 'receive_data'
        this.$router.push({path:'relevant_people',})
        window.prosen = expenditure
      },
      add(){
        var check = true
        var then = this
        var nuber_two = /^\d+(\.\d+)?$/ // 验证带点的数字
        if (this.fund_person == '') {
          mui.toast('相关人不能为空')
          check = false
          return false
        }
        if (this.paid_money ==''){
          mui.toast('金额不能为空')
          check = false
          return false
        }
        if (!nuber_two.test(this.paid_money)) {
          mui.toast('金额格式错误')
          check = false
          return false
        }
        this.imgUrl_loading = true
        var add = '?person_id=' + this.fund_people_name + '&customer_id='+this.test_id+'&moneyA='+this.paid_money +'&moneyB='+this.no_paid_money
        this.axios.get(url.add_customer_person_fund+add).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
          mui.alert(res.data.data,function () {
            then.$router.go(0)
          })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
