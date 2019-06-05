<template>
    <div class="adminPunishment">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">行政处罚</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--行政处罚-->
      <div class="one-noble">
        <h2>行政处罚</h2>
        <p>adminPunishment</p>
      </div>
      <!--处罚单子-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>姓名</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in listName" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>处罚场地</label>
            <select name="" v-model="punshment" @change="push(punshment)">
              <option value="">请选择</option>
              <option v-for="item in listPunshment" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row site" ref="site">
            <label>工地名称</label>
            <select name="">
              <option value="">请选择</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" class="mui-input-clear" v-model="money" placeholder="请输入金额">
          </div>
          <div class="mui-input-row form-textarea row-textarea">
            <label>处罚详情</label>
            <textarea name="Customer_demand" rows="" cols="" placeholder="请输入处罚详情"></textarea>
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'adminPunishment',
    data(){
      return{
        name:'',  //名字
        listName:[{text:'张三'},{text:'李四'}], //名字
        punshment:'',//场地
        listPunshment:[{text:'工地'},{text:'公司'},{text:'其他'}],
        money:'',//金额
      }
    },
    created(){

    },
    methods:{
      push(){
        if (this.punshment === '工地') {
          this.$refs['site'].style.display = 'block'
        }else if (this.punshment === '公司') {
          this.$refs['site'].style.display ='none'
        }
      },
      add(){

      }
    }
  }
</script>

<style scoped>
@import "../css/public.css";
  select{font-size: 15px}
  .site{display: none}
.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{width: 70%;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*    x */
</style>
