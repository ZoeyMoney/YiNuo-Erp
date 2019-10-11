<template>
  <div class="Follow_people">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">相关人录入</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户详情-->
    <div class="mui-content">
      <div class="customer">
        <h2>相关人录入</h2>
        <p>/people input</p>
      </div>
    </div>
    <!--center-->
    <div class="mui-content app">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>相关人</label>
          <input type="text" class="mui-input-clear" placeholder="请输项目名称" v-model="people_name">
        </div>
         <div class="mui-input-row radio-left">
            <label>类别选择</label>
              <select name="" v-model="people_list">
                <option value="1">个人</option>
                <option value="2">公司</option>
              </select>
         </div>
         
      </form>
      <div class="form-botton">
        <button type="button" class="mui-btn mui-btn-black" @click="add">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Follow_people",
    data(){
      return{
        imgUrl_loading:false,
        people_name:'',//相关人
        people_list:2,//相关人类型
      }
    },
    methods:{
        add() {
          var then = this
          var check = true
          var nameReg = /^[\u4E00-\u9FA5]{2,10}$/ // 验证人的名字
          if (this.people == '') {
            mui.toast('相关人不能为空')
            check = false
            return false
          }
          this.axios.get('/Add_fund_person?fund_person=' + this.people_name +'&fund_person_state='+this.people_list).then(res => {
              if (res.status === 200) {
                   mui.toast('保存成功')
              }
           })

        }
    },
    created() {

    }
  }
</script>

<style scoped>
    .mui-input-group{margin-bottom: 22px;}
    /*按钮*/
    .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
    .form-botton{text-align: center;}
</style>
