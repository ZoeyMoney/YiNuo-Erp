<template>
    <div class="profit_edit">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">利润原始数据修改</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--top-->
      <div class="mui-content">
        <div class="customer">
          <h2>利润原始数据修改</h2>
          <p>/profit_edit</p>
        </div>
      </div>
      <!--content-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>项目名称</label>
            <input type="text" v-model="site" @click="siteChange" placeholder="请选择">
          </div>
          <div class="mui-input-row">
            <label>已收款</label>
            <input type="text" class="mui-input-clear" v-model="paid_for" placeholder="请输入用户名">
          </div>
          <div class="mui-input-row">
            <label>已付款</label>
            <input type="text" class="mui-input-clear" v-model="Paid_out_for" placeholder="请输入用户名">
          </div>
        </form>
        <button-save @click.native="add"></button-save>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'profit_edit',
    data(){
      return{
        site:'',
        test_id:'',
        paid_for:'',
        Paid_out_for:'',
      }
    },
    created(){
      this.site = window.test
      this.test_id = window.test_id
      this.search_for()
    },
    methods:{
      siteChange(){
        var expenditure = 'profit_edit'
        this.$router.push({path:'siteList',})
        window.expenditure = expenditure
      },
      //search
      search_for(){
        if (this.site !== undefined) {
          this.axios.get(url.clientProjet+"?Customer_id="+this.test_id).then(res=>{
            if (res.status === 200) {
              this.paid_for = res.data[0].customer_enter_money
              this.Paid_out_for = res.data[0].customer_out_money
            }
          })
        }
      },
      add(){
        var then = this
        this.axios({
          url:url.Update_Customer,
          method:'post',
          data:{
            Customer_out_money: this.Paid_out_for,//已付
            Customer_enter_money: this.paid_for,//已收
            Customer_id: this.test_id//项目名称
          },
          //把json格式编码转为x-www-form-urlencoded
          transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
        }).then(res=>{
          mui.alert(res.data.data,function () {
            then.$router.go(0)
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
