<template>
    <div class="site_project_inspection">
      <!--header-->
      <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">保护标准化</h1>
      </header>
      <!--center-->
      <div class="mui-content pading-thirty">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="item in list_checkbox">
              <div class="mui-input-row mui-checkbox checkbox-label mui-left">
                <label>{{item.text}}</label>
                <input name="checkbox1" :value="item.text" type="checkbox">
              </div>
            </li>
          </ul>
      </div>
<!--btn-->
      <div class="mui-input-row form-btn">
        <button type="button" class="mui-btn mui-btn-blue" @click="returnName">返回</button>
        <button type="button" class="mui-btn mui-btn-blue" @click="saveName">保存</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'site_project_inspection',
    data(){
      return{
        Vcheckbox:'',
          list_checkbox:[
            {text:'下水口未保护(1分/10分)'},
            {text:'地漏未保护(1分/10分)'},
            {text:'进户门地面，电梯门套未使用公司保护膜(1分/10分)'},
            {text:'铺设完成地砖未使用公司指定塑料保护膜、。。。。。(1分/10分)'},
            {text:'进户门、室内玻璃窗未使用公司保护膜保护(1分/10分)'},
            {text:'门、窗、把手未保护(1分/10分)'},
            {text:'洁具、灯具未做保护(1分/10分)'},
            {text:'成品、半成品家具未按规定保护(1分/10分)'},
            {text:'客户自购材料未保护(1分/10分)'},
            {text:'暗保护盖未做一支(1分/10分)'},
            {text:'管线走向标识未作(1分/10分)'},
            {text:'强弱电箱未保护(1分/10分)'},
          ]
      }
    },
    methods:{
      returnName(){
        this.$router.push({name:'site_statistics'})
      },
      saveName(){
        mui.alert('未完成')
      }
    }
  }
</script>

<style scoped>
.pading-thirty{padding-top: 30px}
  .checkbox-label label{width: 100% !important;padding: 3px 22px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
  .checkbox-label input[type='checkbox']{top: 0!important;left: 0!important;}
/*btn*/
.form-btn button{width: 29%!important;margin: 0 3px!important;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
