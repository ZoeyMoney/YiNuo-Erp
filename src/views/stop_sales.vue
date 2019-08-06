<template>
    <div class="stop_sales">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">暂支销账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--table-->
      <div class="mui-content">
        <input type="text" v-model="searchData" placeholder="请输入id或姓名">
        <ul>
          <li v-for="(item,index) in Newitems" :key="index">
            <span>{{item.id}}</span>
            <span>{{item.name}}</span>
            <span>{{item.time}}</span>
          </li>
        </ul>
        <!--<template>
          <el-table :data="tableData" style="width: 100%;white-space: nowrap">
            <el-table-column prop="date" label="日期" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>-->
      </div>
    </div>
</template>

<script>
  export default {
    name: 'stop_sales',
    data(){
      return{
        imgUrl_loading:false,
        searchData: "",
        items: [
          { id: "1001", name: "哈哈", time: "20170207" },
          { id: "1002", name: "呵呵", time: "20170213" },
          { id: "1103", name: "晓丽", time: "20170304" },
          { id: "1104", name: "小兰", time: "20170112" },
          { id: "1205", name: "财务", time: "20170203" },
          { id: "1206", name: "嘻嘻", time: "20170208" },
          { id: "1307", name: "测试", time: "20170201" }
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]

      }
    },
    created(){

    },
    component:{
      Newitems() {
        var _this = this;
        var Newitems = [];
        _this.items.map(function(item) {
          if (
            item.id.search(_this.searchData) != -1 ||
            item.name.search(_this.searchData) != -1
          ) {
            Newitems.push(item);
          }
        });
        return Newitems;
      }
    },
    methods:{
      /*asg(text){
        var listall = []
        this.list.forEach(item=>{
          if (item.text.indexOf(text) != -1) {
            listall.push(item)
          }
        })
        this.list = listall
      }*/
    }
  }
</script>

<style scoped>

</style>
