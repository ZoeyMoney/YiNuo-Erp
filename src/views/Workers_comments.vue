<template>
    <div class="site_Inspection">
       <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'informaction'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地巡检</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户统计-->
      <div class="mui-content">
        <div class="customer">
          <h2>工人评论</h2>
          <p>/site_Inspection</p>
        </div>
      </div>
      <!--input-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>工人名称</label>
            <select name="">
              <option value="">请选择</option>
              <option value="0">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>负责人</label>
            <select name="">
              <option value="">请选择</option>
              <option value="0">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label></label>
            <select name="">
              <option value="">请选择</option>
              <option value="0">123</option>
            </select>
          </div>
        </form>
      </div>
      <template>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </template>
      <div @click="ac">123456789</div>
    </div>
</template>

<script>
export default {
  name: 'site_Inspection',
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A']
    }
  },
  created () {

  },
  methods: {
    axcc (id) {
      console.log(id)
    },
    ac () {
      console.log(x)
    }
  }
}
</script>

<style scoped>
  select{font-size: 15px}
</style>
