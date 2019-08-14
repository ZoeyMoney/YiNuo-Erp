<template>
    <div class="site_stage">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地阶段</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--tabs-->
      <login-loading v-if="imgUrl_loading"></login-loading>
      <div class="mui-content pad">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="洽谈阶段" name="first">
              <template>
                <el-table :data="listProjet_A" style="width: 100%">
                  <el-table-column label="工地名称" width="180">
                    <template slot-scope="scope">
                      <span style="white-space: nowrap;width: 167px;display: block;overflow: hidden;text-overflow: ellipsis">{{ scope.row.customer_name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="施工阶段" name="second">
              <template>
                <el-table :data="listProjet_B" style="width: 100%">
                  <el-table-column label="工地名称" width="180">
                    <template slot-scope="scope">
                      <span style="white-space: nowrap;width: 167px;display: block;overflow: hidden;text-overflow: ellipsis">{{ scope.row.customer_name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="回款阶段" name="third">
              <template>
                <el-table :data="listProjet_C" style="width: 100%">
                  <el-table-column label="工地名称" width="180">
                    <template slot-scope="scope">
                      <span style="white-space: nowrap;width: 167px;display: block;overflow: hidden;text-overflow: ellipsis">{{ scope.row.customer_name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="完成阶段" name="fourth">
              <template>
                <el-table :data="listProjet_D" style="width: 100%">
                  <el-table-column label="工地名称" width="180">
                    <template slot-scope="scope">
                      <span style="white-space: nowrap;width: 167px;display: block;overflow: hidden;text-overflow: ellipsis">{{ scope.row.customer_name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
          </el-tabs>
        </template>
        <div class="aleft" v-if="alerto">
          <div class="asd">
            <div>详情阶段</div>
            <div><i class="el-icon-close" @click="close"></i></div>
          </div>
          <div class="radio">
            <div class="mui-input-row mui-radio mui-left radio-text" v-for="item in listRadio">
              <label>{{item.text}}</label>
              <input name="radio1" type="radio" v-model="radio" :value="item.id">
            </div>
          </div>
          <div class="mui-input-row mui-radio mui-left button-el">
            <el-button @click="add">保存</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'site_stage',
    data(){
      return{
        show: true,
        activeName: 'first',
        imgUrl_loading:false,
        radio: '',
        listRadio:[
          {text:'洽谈阶段',id:'1'},
          {text:'施工阶段',id:'2'},
          {text:'回款阶段',id:'3'},
          {text:'完成阶段',id:'4'},
        ],
        Aprojet:true,
        Bprojet:true,
        Cprojet:true,
        Dprojet:true,
        listProjet_A:[{
            customer_name:''
          }],
        listProjet_B:[{
          customer_name:''
        }],
        listProjet_C:[{
          customer_name:''
        }],
        listProjet_D:[{
          customer_name:''
        }],
        customer_id:'',
        alerto:false,
      }
    },
    created(){
      this.imgUrl_loading = true
      this.axios.get('/SelectAllCustomer'+'?Customer_A=1').then(res=>{
        if (res.status === 200) {
          this.imgUrl_loading = false
          this.listProjet_A = res.data.data
        }
      });
    },
    methods:{
      handleClick(tab) {
        if (tab.index === '0') {
          this.imgUrl_loading = true
          this.axios.get('/SelectAllCustomer'+'?Customer_A=1').then(res=>{
            if (res.status === 200) {
              this.imgUrl_loading = false
              this.listProjet_A = res.data.data
            }
          })
        }else if (tab.index === '1') {
          this.imgUrl_loading = true
          this.axios.get('/SelectAllCustomer'+'?Customer_B=2').then(res=>{
            if (res.status === 200) {
              this.imgUrl_loading = false
              this.listProjet_B = res.data.data
            }
          })
        }else if (tab.index === '2') {
          this.axios.get('/SelectAllCustomer'+'?Customer_C=3').then(res=>{
            this.imgUrl_loading = true
            if (res.status === 200) {
              this.imgUrl_loading = false
              this.listProjet_C = res.data.data
            }
          })
        }else if (tab.index === '3') {
          this.axios.get('/SelectAllCustomer'+'?Customer_D=4').then(res=>{
            this.imgUrl_loading = true
            if (res.status === 200) {
              this.imgUrl_loading = false
              this.listProjet_D = res.data.data
            }
          })
        }
      },
      //修改
      handleEdit(index, row) {
          this.customer_id = row.customer_id
          this.alerto = true
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },
      //删除
      handleDelete(index, row) {
        var then = this
        this.imgUrl_loading = true
        this.customer_id = row.customer_id
        console.log(this.customer_id)
        mui.confirm('是否删除',function (e) {
          if (e.index == 1) {
            then.axios.get('/Customer/DeleteCustomer'+'?Customer='+row.customer_id).then(res=>{
              if (res.status === 200) {
                then.imgUrl_loading = false
                mui.alert(res.data,function () {
                  then.$router.go(0)
                })
              }
            })
          }else{
            mui.alert('取消成功')
          }
        })

      },
    //  弹窗关闭
      close(){
        this.alerto = false
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
      },
    //  阶段保存
      add(){
        var then = this
        var check=true
        if (this.radio == '') {
          mui.toast('阶段不能为空')
          check = false
          return false
        }
        this.imgUrl_loading = true
        this.axios.get('/Customer/Update_Customer'+'?Customer_id='+this.customer_id+'&Customer_name_state='+this.radio).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert(res.data.data,function () {
              then.$router.go(0)
            })
          }
        })
        this.alerto = false
      }
    }
  }
</script>

<style scoped>
  *{touch-action: pan-y;}
  .pad{margin-top: 11px;}
  /deep/.el-tabs__header{margin-bottom: 0}
  /deep/.el-table th,.el-table tr{color: black}
  /deep/.el-table th{background-color: #dadada;padding: 4px 0}
  /deep/.el-table tr{background-color: #efeff4}
  /deep/.el-table td, .el-table th.is-leaf{border-bottom: 1px solid #dadada}
  /deep/.el-button--danger{background-color: #dadada;border-color: #dadada;color: #717171}
  /deep/.el-table td, .el-table th{padding: 4px 0}
  .aleft{position: absolute;z-index: 1000;top: 5%;width: 100%;height: 95%;padding-top: 13px;background: rgba(0, 0, 0, 0.81);color: white}
  .asd{width: 80%;margin: 0 auto;padding-bottom: 12px;display: flex}
  .asd div:nth-child(1){flex: 1;text-align: center}
  .asd div:nth-child(2) i{font-size: 26px;position: absolute;}
  .radio div label{white-space: nowrap}
/deep/.mui-btn-blue[data-v-750f7e24], .mui-btn-primary[data-v-750f7e24], input[type=submit][data-v-750f7e24]{border: 1px solid #adadad;background-color: #ffffff}
/deep/.mui-btn-blue, .mui-btn-primary, input[type=submit]{color: black}
  /deep/.el-table__body, .el-table__footer, .el-table__header{display: block;height: 592px;overflow: auto;position: relative}
  /deep/.el-table__body-wrapper{background-color: #EFEFF4}
  /deep/.el-table__empty-block{position: absolute;top: 0}
  /deep/.el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{padding-left: 0}
  .button-el{text-align: center;position: relative;top: 93px;}
  .button-el button{width: 205px}
  .radio{position: relative;top: 88px}
  .radio-text{text-align: center}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 0}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 230px!important;}
</style>
