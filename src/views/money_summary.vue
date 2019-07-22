<template>
    <div class="money_summary">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">款项汇总</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--searchInput-->
      <div class="mui-content">
        <div class="flexq">
          <label>时间</label>
          <!--<input type="text" v-model="value2" list="fruit">
          <datalist id="fruit">
            <option v-for="item in ListData" :value="item.text">{{item.text}}</option>
          </datalist>-->
          <select name="">
            <option value="">请选择</option>
            <option v-for="item in ListData" :value="item.text">{{item.text}}</option>
          </select>
        </div>
        <div class="flexq">
          <label>时间</label>
          <input type="date" v-model="DataValue">
        </div>
      </div>
      <div class="mui-content">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <template>
                    <el-table :data="tableData" stripe style="width: 100%">
                      <el-table-column prop="" label="" width="45"></el-table-column>
                      <el-table-column prop="name" label="名称" width="97"></el-table-column>
                      <el-table-column prop="date" label="时间" width="90"></el-table-column>
                      <el-table-column prop="address" label="金额"></el-table-column>
                      <el-table-column prop="address" label="备注"></el-table-column>
                    </el-table>
                  </template>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="公司" prop="id"></el-table-column>
            <el-table-column label="商品名称" prop="name"></el-table-column>
            <el-table-column label="描述" prop="desc">
            </el-table-column><el-table-column label="描述" prop="desc"></el-table-column>
          </el-table>
        </template>
      </div>
      <div class="mui-content">
        <template>
          <el-table :data="tableData" style="width: 100%" :cell-style="cellStyle">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <template>
                    <el-table :data="tableData" stripe style="width: 100%">
                      <el-table-column prop="" label="" width="45"></el-table-column>
                      <el-table-column prop="name" label="名称" width="97"></el-table-column>
                      <el-table-column prop="date" label="时间" width="90"></el-table-column>
                      <el-table-column prop="address" label="金额"></el-table-column>
                      <el-table-column prop="address" label="备注"></el-table-column>
                    </el-table>
                  </template>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="应收应付" prop="id"></el-table-column>
<!--            <el-table-column label="商品名称" prop="name"></el-table-column>-->
            <el-table-column v-if="money>0" :label="money" prop="name">
            </el-table-column>
            <el-table-column label="描述" prop="desc">
            </el-table-column><el-table-column label="描述" prop="desc"></el-table-column>
          </el-table>
        </template>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'money_summary',
    data(){
      return{
        ListData:[
          {text:'本月'},
          {text:'本周'},
          {text:'本日'},
          {text:'本年'},
        ],
        value2:'',
        DataValue:'',
        money:'123',
        tableData: [{
          date: '2016-05-02',
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          money:'123'
        }, {
          date: '2016-05-02',
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        classRed:{
          color:'red'
        }
      }
    },
    methods:{
      cellStyle(row,column,rowIndex,columnIndex){//根据报警级别显示颜色
        // console.log(row);
        // console.log(row.column);
        if(row.column.label==="123"&& row.row.label==="123"){
          console.log('123')
          return 'color:red'
        }else if(row.column.label==="123"&& row.row.label==="123" ){
          return 'color:yellow'
        }
      }
    }
  }
</script>

<style scoped>
  .flexq{display: flex;padding-left: 7%;padding-top: 8%;font-size: 17px}
  .flexq label{border-left: 9px solid #000000;padding-left: 6px}
  .flexq input{background-color: transparent;border-left: none;border-right: none;border-top: none;padding-left: 6px;width: 42%;height: 0;margin-bottom: 0;}
  .flexq select{border-bottom: 1px solid rgba(0,0,0,.2) !important;width: 42%;margin-bottom: 0;padding: 0 8px}
  .flexq:nth-child(2){padding-top: 7px}
  .goOver{display: flex;padding-top: 4px}
  .goOver span{width: 67px;height: 1px;background-color: black;position: relative;right: 24px;top: 50%}
  .goOver label{width: 45%}
  /deep/.demo-table-expand {font-size: 0;}
  /deep/.demo-table-expand label {width: 90px;color: #99a9bf;}
  /deep/.demo-table-expand .el-form-item {margin-right: 0;margin-bottom: 0;width: 50%;}
  /deep/.el-table .cell{white-space: nowrap}
  /deep/.el-table__header th, .el-table__header tr{background-color: #dadada;color: black;padding: 4px 0;}
  /deep/.el-table td, .el-table th.is-leaf{border-bottom: 1px solid #dadada;padding: 4px 0;background-color: #efeff4;}
  .element::-webkit-scrollbar {display:none}
  /deep/.el-radio{padding-left: 9px;line-height: 36px}
  /deep/[data-v-91726806] .el-table td, .el-table th.is-leaf[data-v-91726806]{padding: 0 0}
  /deep/.styleRed{color:red}
</style>
