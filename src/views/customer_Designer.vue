<template>
    <div class="customer_Designer">
      <!--头部-->
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'customer_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">设计师添加</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户管理-->
      <div class="one-noble">
        <h2>设计师添加</h2>
        <p>Customer management</p>
      </div>
      <!--input-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>设计师</label>
            <input type="text" class="mui-input-clear" placeholder="请输入设计师名字" v-model="name">
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
  name: 'customer_Designer',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    add () {
      var then = this
      this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist?Customer_stylist=' + this.name + '&Customer_aftersale=0').then(res => {
        mui.alert(res.data.msg, function () {
          then.$router.push({ name: 'customer_management' })
        })
      })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
.mui-input-group{margin-bottom: 10px;}
/*按钮*/
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
.form-botton{text-align: center;}
</style>
