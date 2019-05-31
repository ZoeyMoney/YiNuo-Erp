<template>
    <div class="Project_Reconciliation">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">项目对账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--项目对账-->
      <div class="mui-content projet-recon">
        <div class="ok">
          <div>账号登陆：{{name}}</div>
          <div>待付款：￥87680</div>
        </div>
        <div class="all-hot">
          <div>总计金额：￥100000</div>
          <div>已付金额：￥100000</div>
        </div>
        <div class="yes-all">
          <ul>
            <li>奖励金额：￥100000</li>
            <li>罚款金额：￥100000</li>
            <li>质保金额：￥100000</li>
            <li>其他费用：￥100000</li>
          </ul>
        </div>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="first_hos" >
            <el-tab-pane label="已付款" name="first" v-model="hos">
              <table>
                <tr>
                  <th>工地名称</th>
                  <th>金额</th>
                  <th :style="lefta">批次</th>
                  <th :style="lefta">日期</th>
                </tr>
                <tr v-for="item in listHos">
                  <td><span :style="hid">{{item.customer_name}}</span></td>
                  <td><span :style="money">￥{{item.fund_details_money}}</span></td>
                  <td><span :style="fund_name">{{item.fund_details_batch}}</span></td>
                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>
                </tr>
              </table>
            </el-tab-pane>
            <el-tab-pane label="未付款" name="second" v-model="second">
              <table>
                <tr>
                  <th>工地名称</th>
                  <th>金额</th>
                  <th :style="lefta">批次</th>
                  <th :style="lefta">日期</th>
                </tr>
                <tr v-for="item in listSecond">
                  <td><span :style="hid">{{item.customer_name}}</span></td>
                  <td><span :style="money">￥{{item.fund_details_money}}</span></td>
                  <td><span :style="fund_name">{{item.fund_details_batch}}</span></td>
                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>
                </tr>
              </table>
            </el-tab-pane>
            <el-tab-pane label="未付款" name="paid_for" v-if="paid_for">
              <table>
                <tr>
                  <th>工地名称</th>
                  <th>金额</th>
                  <th :style="lefta">批次</th>
                  <th :style="lefta">日期</th>
                </tr>
                <tr v-for="item in listPaid_for">
                  <td><span :style="hid">{{item.customer_name}}</span></td>
                  <td><span :style="money">￥{{item.fund_details_money}}</span></td>
                  <td><span :style="fund_name">{{item.fund_details_batch}}</span></td>
                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>
                </tr>
              </table>
            </el-tab-pane>
            <el-tab-pane label="已付款" name="Uncollected" v-if="Uncollected">
              <table>
                <tr>
                  <th>工地名称</th>
                  <th>金额</th>
                  <th :style="lefta">批次</th>
                  <th :style="lefta">日期</th>
                </tr>
                <tr v-for="item in listUncollected">
                  <td><span :style="hid">{{item.customer_name}}</span></td>
                  <td><span :style="money">￥{{item.fund_details_money}}</span></td>
                  <td><span :style="fund_name">{{item.fund_details_batch}}</span></td>
                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>
                </tr>
              </table>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Project_Reconciliation',
    data(){
      return{
        activeName: 'first',
        name:'',
        list:'',
        first:'',
        hos:'已付款',
        listHos:'',
        second:'未付款',
        listSecond:'',
        paid_for:'',
        listPaid_for:'',
        Uncollected:'',
        listUncollected:'',
        paLft: {
          display: 'block',
          padding: '0 10px',
          width:'94px',
          whiteSpace:'nowrap',
          overflow:'hidden',
          textOverflow:'ellipsis'
        },
        lefta: {
          paddingLeft: '10px'
        },
        hid: {
          display: 'block',
          width: '94px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        money: {
          display: 'block',
          width: '72px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        fund_name:{
          display:'block',
          width:'45px',
          whiteSpace:'nowrap',
          overflow:'hidden',
          textOverflow:'ellipsis',
          paddingLeft:'10px'
        }
      }
    },
    created(){
      //查询
      var then = this
      this.axios.get('https://formattingclub.com/YiNuoLogin/User/Select_accounting').then(res=>{
        this.list = res.data.user[0]
        var name = this.list.user_name
        this.name = name
          if (res.data.user[0].role_name === '总权限' || res.data.user[0].role_name === '二级管理员'){
            /*有权限则显示*/
            this.paid_for = true
            this.Uncollected = true
          }else{
            /*无权限则消失*/
            this.paid_for =false
            this.Uncollected = false
          }
      })
        this.axios.get('https://formattingclub.com/YiNuoLogin/User/Select_accounting?fund_details_state=1').then(res=>{
          this.listHos = res.data.data
        })
    },
    methods:{
      first_hos(tab){
        if (tab.index === '0') {
          this.axios.get('https://formattingclub.com/YiNuoLogin/User/Select_accounting?fund_details_state=1').then(res=>{
            this.listHos = res.data.data
          })
        }else if (tab.index === '1') {
          this.axios.get('https://formattingclub.com/YiNuoLogin/User/Select_accounting?fund_details_state=0').then(res=>{
            this.listSecond = res.data.data
          })
        }else if (tab.index === '2') {
          this.axios.get('https://formattingclub.com/YiNuoLogin/User/Select_accounting?fund_details_state=1&fund_details_money=1').then(res=>{
            this.listPaid_for = res.data.data
          })
        }else if (tab.index === '3') {
          this.axios.get('https://formattingclub.com/YiNuoLogin/User/Select_accounting?fund_details_state=1&fund_details_money=0').then(res=>{
            this.listUncollected = res.data.data
          })
        }
      }
    }
  }
</script>

<style lang="scss">
@import "../css/public.css";
.Project_Reconciliation{
  .projet-recon{padding-left: 13px}
  /*待付款*/
  .ok{margin-top: 30px;border-bottom: 1px solid black;padding-bottom: 10px;margin-bottom: 10px;}
  .ok div:nth-child(1){font-size: 18px;margin-bottom: 10px}
  .ok div:nth-child(2){font-size: 26px;font-weight: 600}
  /*总款项*/
  .all-hot{border-bottom: 1px solid black;display: flex;padding-bottom: 10px;margin-bottom: 10px;}
  .all-hot div{flex: 1;font-size: 15px}
  /*4项金额*/
  .yes-all{margin-bottom: 20px}
  .yes-all ul{list-style: none;margin: 0;padding: 0 0 10px 0;font-size: 15px;border-bottom: 1px solid black;}
  .el-tabs__header{margin: 0!important;}
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color: #000!important;border-radius:3px}
  .el-tabs--card>.el-tabs__header{border-bottom: 2px solid #000!important;}
  .el-tabs__item.is-active{background-color: black}
  .el-tabs__item.is-active{color: white!important;}
  .el-tabs__item:hover{color: white!important;background-color: black!important;}
  /*table*/
  table{width: 100%;text-align: left;font-size: 15px;}
  table tr {line-height: 29px;border-bottom: 1px solid #DADADA}
  table th{text-align: left;background-color: #DADADA;line-height: 32px;white-space: nowrap}
}

</style>
