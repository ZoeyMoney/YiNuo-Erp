<template>
    <div class="userNameUpdate">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'admin_nameUpdate'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">用户信息管理</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--top-->
      <!--菜单-->
      <div class="one-noble">
        <h2>修改中心</h2>
        <p>userNameUpdate</p>
      </div>
      <!--views-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>姓名</label>
            <input type="text" class="mui-input-clear" placeholder="请输入姓名">
          </div>
          <div class="mui-input-row">
            <label>部门</label>
            <input type="text" class="mui-input-clear" placeholder="请输入部门">
          </div>
          <div class="mui-input-row">
            <label>职务</label>
            <input type="text" class="mui-input-clear" placeholder="请输入职务">
          </div>
          <div class="mui-input-row">
            <label>身份证号</label>
            <input type="text" class="mui-input-clear" placeholder="请输入身份证号">
          </div>
          <div class="mui-input-row">
            <label>年龄</label>
            <input type="text" class="mui-input-clear" placeholder="请输入年龄">
          </div>
          <div class="mui-input-row">
            <label>生日</label>
            <input type="text" class="mui-input-clear" placeholder="请输入生日">
          </div>
          <div class="mui-input-row">
            <label>毕业院校</label>
            <input type="text" class="mui-input-clear" placeholder="请输入毕业院校">
          </div>
          <div class="mui-input-row">
            <label>学历</label>
            <input type="text" class="mui-input-clear" placeholder="请输入学历">
          </div>
          <div class="mui-input-row">
            <label>入职时间</label>
            <input type="text" class="mui-input-clear" placeholder="请输入入职时间">
          </div>
          <div class="mui-input-row">
            <label>入职年限</label>
            <input type="text" class="mui-input-clear" placeholder="请输入入职年限">
          </div>
          <div class="mui-input-row">
            <label>岗位工资</label>
            <input type="text" class="mui-input-clear" placeholder="请输入岗位工资">
          </div>
        </form>
        <!--button-->
        <div class="table-row">
          <div></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'userNameUpdate'
  }
</script>

<style scoped>

</style>
