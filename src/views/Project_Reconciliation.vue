<template>
    <div class="Project_Reconciliation">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">项目对账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--项目对账-->
      <div class="mui-content projet-recon">
        <div class="username" v-if="divinput">
          <label>账号：</label>
          <div>{{divname}}</div>
        </div>
        <div class="mui-input-row input-top" v-if="AdminName">
          <!--<label>相关人</label>
          <input type="text" v-model="userName" placeholder="请选择" @click="userNameClick">-->
          <select v-model="userName" @change="userClick(userName)">
            <option value="">请选择</option>
            <option v-for="item in listHos" :value="item.fund_person_id"><div>{{item.user_name}}</div></option>
          </select>
        </div>
        <div class="ok">
          <div>总计金额：￥{{all_money | negative}}</div>
        </div>
        <div class="all-hot">
          <div>已付金额：￥{{all_paid | negative}}</div>
          <div>质保金额：￥{{no_paid | negative}}</div>
          <div>应付金额：￥{{enter_paid | negative}}</div>
        </div>
        <div class="Comment">
          <p>注：金额显示红色,表示该金额未最终确定,请尽快与监理联系确认.时间显示为'待确认',表示为该款项付款时间待定,会计会根据工程完成时间及财务状况及时更新,请关注核对.</p>
        </div>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="first_hos" >
            <el-tab-pane label="已处理" name="first" v-model="hos">
              <tbody ref="activeName">
              <select name="" v-model="value" @change="projetClick(value)" class="tableSelect">
                <option value="">请选择</option>
                <option v-for="item in projetName" :value="item.customer_id">{{item.customer_name}}</option>
              </select>
              </tbody>
              <table>
                <tr>
                  <th><span>工地名称</span></th>
                  <th :style="lefta"><span>款项名称</span></th>
                  <th><span>金额</span></th>
                  <th :style="lefta"><span>日期</span></th>
                </tr>
                <tr v-for="item in yesFu" @click="rinningClick(item.fund_details_id)">
                  <td><span>{{item.customer_name}}</span></td>
                  <td>
                    <span v-if="item.fund_details_batch ==='99'" :style="fund_name">质保金</span>
                    <span v-else-if="item.fund_name" :style="fund_name">{{item.fund_name}}</span>
                    <span v-else-if="item.fund_name===undefined" :style="fund_name">{{item.fund_names}}</span>
                  </td>
                  <td><span :style="money" :class="{clasred:item.fund_details_type === 1}">￥{{item.fund_details_money | negative}}</span></td>
<!--                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>-->
                  <td>
                    <span :style="paLft" v-show="item.fund_details_date">{{item.fund_details_date | NoYes}}</span>
                    <span :style="paLft" v-show="item.fund_details_date==undefined">待确认</span>
                  </td>
                </tr>
              </table>
            </el-tab-pane>
            <el-tab-pane label="未处理" name="second" v-model="second">
              <tbody ref="second">
              <select name="" v-model="value" @change="projetClick(value)" class="tableSelect">
                <option value="">请选择</option>
                <option v-for="item in projetName" :value="item.customer_id">{{item.customer_name}}</option>
              </select>
              </tbody>
              <table>
                <tr>
                  <th><span>工地名称</span></th>
                  <th :style="lefta"><span>款项名称</span></th>
                  <th><span>金额</span></th>
                  <th :style="lefta"><span>日期</span></th>
                </tr>
                <tr v-for="item in listSecond" @click="nodeal(item.fund_details_id)">
                  <td><span>{{item.customer_name}}</span></td>
                  <td>
                    <span v-if="item.fund_details_batch ==='99'" :style="fund_name">质保金</span>
                    <span v-else-if="item.fund_name" :style="fund_name">{{item.fund_name}}</span>
                    <span v-else-if="item.fund_name===undefined" :style="fund_name">{{item.fund_names}}</span>
                  </td>
                  <td><span :style="money" :class="{clasred:item.fund_details_type === 1}">￥{{item.fund_details_money | negative}}</span></td>
                  <td>
                    <span :style="paLft" v-show="item.fund_details_date">{{item.fund_details_date | NoYes}}</span>
                    <span :style="paLft" v-show="item.fund_details_date==undefined">待确认</span>
                  </td>
<!--                  <td><span :style="paLft" v>{{item.fund_details_date | NoYes}}</span></td>-->
                </tr>
              </table>
            </el-tab-pane>
            <!--<el-tab-pane label="已收款" name="paid_for" v-if="paid_for">
            ###有可能有用
              <tbody ref="paid_for">
              <template>
                <el-select v-model="value" placeholder="关键字搜索" @change="projetClick(value)">
                  <el-option
                    v-for="item in projetName"
                    :key="item.customer_name"
                    :label="item.customer_name"
                    :value="item.customer_id">
                  </el-option>
                </el-select>
              </template>
              </tbody>
              <table>
                <tr>
                  <th>工地名称</th>
                  <th>金额</th>
&lt;!&ndash;                  <th :style="lefta">批次</th>&ndash;&gt;
                  <th :style="lefta">日期</th>
                </tr>
                <tr v-for="item in listPaid_for">
                  <td><span :style="hid">{{item.customer_name}}</span></td>
                  <td><span :style="money">￥{{item.fund_details_money}}</span></td>
&lt;!&ndash;                  <td><span :style="fund_name">{{item.fund_details_batch}}</span></td>&ndash;&gt;
                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>
                </tr>
              </table>
            </el-tab-pane>
            <el-tab-pane label="未收款" name="Uncollected" v-if="Uncollected">
              <tbody ref="Uncollected">
              <template>
                <el-select v-model="value" placeholder="关键字搜索" @change="projetClick(value)">
                  <el-option
                    v-for="item in projetName"
                    :key="item.customer_name"
                    :label="item.customer_name"
                    :value="item.customer_id">
                  </el-option>
                </el-select>
              </template>
              </tbody>
              <table>
                <tr>
                  <th>工地名称</th>
                  <th>金额</th>
&lt;!&ndash;                  <th :style="lefta">批次</th>&ndash;&gt;
                  <th :style="lefta">日期</th>
                </tr>
                <tr v-for="item in listUncollected">
                  <td><span :style="hid">{{item.customer_name}}</span></td>
                  <td><span :style="money">￥{{item.fund_details_money}}</span></td>
&lt;!&ndash;                  <td><span :style="fund_name">{{item.fund_details_batch}}</span></td>&ndash;&gt;
                  <td><span :style="paLft">{{item.fund_details_date | NoYes}}</span></td>
                </tr>
              </table>
            </el-tab-pane>-->
          </el-tabs>
        </template>
      </div>
      <div class="footer">
        <div class="box">
          已处理:￥{{all_paid | negative}}
        </div>
        <div class="box">
          未处理:￥{{ou_paid | negative}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Project_Reconciliation',
  data () {
    return {
      imgUrl_loading: false,
      AdminName: false,
      divinput: false,
      activeName: 'first',
      projetName: '',
      value: '',
      // NewUserName:'',
      userName: '',
      list: '',
      first: '',
      hos: '已付款',
      listHos: '',
      second: '未付款',
      name_num: '',
      listSecond: '',
      yesFu: '',
      paid_for: true,
      divname: '',
      listPaid_for: '',
      Uncollected: '',
      listUncollected: '',
      userName_id: '',
      all_money: '0', // 总计金额
      all_paid: '0', // 已付金额
      no_paid: '0', // 质保金额
      ou_paid: 0,
      enter_paid: '0', // 应付金额
      paLft: {
        display: 'block',
        padding: '0 10px',
        width: '150px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      lefta: {
        paddingLeft: '10px',
        minWidth: '85px'
      },
      money: {
        display: 'block',
        width: '72px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      fund_name: {
        display: 'block',
        width: '57px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: '10px'
      }
    }
  },
  created () {
    //  接收返回来的参数
    /* this.userName = window.fund_people
        this.userName_id = window.fund_people_name */
    this.imgUrl_loading = true
    // 查询
    var then = this
    this.axios.get('/User/Select_accounting').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.NewUserName = JSON.parse(localStorage.data).role
        // console.log(this.NewUserName)
        for (var index in this.NewUserName) {
          this.projetName = res.data.list_fund_customer_name
          if (this.NewUserName[index].jurisdiction_name === '项目对账') {
            if (this.NewUserName[index].role_name === '总权限') {
              this.AdminName = true
              this.divinput = false
            } else {
              this.divname = res.data.name
              this.yesFu = res.data.list_fund_Already_out
              this.listSecond = res.data.list_fund_pre_out
              this.divinput = true
              this.AdminName = false
            }
            this.listHos = res.data.list_fund_user_number
            if (this.userName != '') {
              this.yesFu = res.data.list_fund_Already_out
              this.listSecond = res.data.list_fund_pre_out
              this.listPaid_for = res.data.list_fund_Already_enter
              this.listUncollected = res.data.list_fund_pre_enter
            }
          }
        }
      }
    })
    //  相关人查询
    /* if (this.userName != undefined) {
        var add = '?'
        if (this.userName_id == '') {
          add+= 'user_number=0'
        }else{
          add+='user_number='+this.userName_id
        }
        this.axios.get(url.selectSerch+add).then(res=>{
          this.list_model_search(res)
          this.all_model_money(res)
        })
      } */
  },
  methods: {
    // 未处理进入应付详情
    nodeal (val) {
      var listVal = {}
      if (JSON.parse(localStorage.data).role[0].role_name == '总权限') {
        for (var index in this.listSecond) {
          if (val == this.listSecond[index].fund_details_id) {
            listVal = this.listSecond[index]
          }
        }
      }
      localStorage.payable_entry = JSON.stringify(listVal)
      this.$router.push({ path: 'payable_entry', query: { listVal: listVal } })
    },
    // 已处理进入流水详情
    rinningClick (val) {
      var listVal = {}
      if (JSON.parse(localStorage.data).role[0].role_name == '总权限') {
        for (var index in this.yesFu) {
          if (val == this.yesFu[index].fund_details_id) {
            listVal = this.yesFu[index]
          }
        }
      }
      localStorage.msg = JSON.stringify(listVal)
      // console.log(listVal)
      this.$router.push({ path: 'running_details', query: { listVal: listVal } })
    },
    // 封装筛选总计所有金额
    all_model_money (res) {
      //   所有总计金额
      var enter = 0 // 已付款总计金额
      var out = 0 // 未付款总计金额
      var no_paid = 0 // 未付款总计金额
      var enter_paid = 0 // 应付总计金额
      // 已处理
      for (var index in res.data.list_fund_Already_out) {
        enter += res.data.list_fund_Already_out[index].fund_details_money
      }
      // 未处理
      for (var index in res.data.list_fund_pre_out) {
        out += res.data.list_fund_pre_out[index].fund_details_money
      }
      // 质保金
      for (var index in res.data.list_fund_pre_out) {
        // 质保金
        if (res.data.list_fund_pre_out[index].fund_details_batch === '99') {
          no_paid += res.data.list_fund_pre_out[index].fund_details_money
        }
        // 应付
        if (res.data.list_fund_pre_out[index].fund_details_batch !== '99') {
          enter_paid += res.data.list_fund_pre_out[index].fund_details_money
        }
      }
      this.all_money = parseFloat(enter) + parseFloat(out) // 总计金额相加
      this.all_paid = enter // 已处理金额
      this.ou_paid = out
      this.no_paid = no_paid // 质保
      this.enter_paid = enter_paid // 应付
    },
    // 封装分类
    list_model_search (res) {
      this.yesFu = res.data.list_fund_Already_out
      this.listSecond = res.data.list_fund_pre_out
      this.listPaid_for = res.data.list_fund_Already_enter
      this.listUncollected = res.data.list_fund_pre_enter
      this.projetName = res.data.list_fund_customer_name
    },
    /* userNameClick(){
        var prosen = 'Project_Reconciliation'
        this.$router.push({path:'relevant_people'})
        window.prosen = prosen
      }, */

    // 账号选择
    userClick (id) {
      var add = '?'
      if (id == '') {
        add += 'user_number=0'
      } else {
        add += 'user_number=' + id
      }
      this.axios.get('/User/Select_accounting' + add).then(res => {
        this.list_model_search(res)
        this.all_model_money(res)
      })
    },
    // 筛选
    projetClick (id) {
      var add = '?'
      if (this.userName == '') {
        add += 'Customer_name=' + id
      } else {
        if (this.value != '') {
          add += '&Customer_name=' + id + '&user_number=' + this.userName
        } else {
          add += '&user_number=' + this.userName
        }
      }
      this.axios.get('/User/Select_accounting' + add).then(res => {
        this.imgUrl_loading = false
        this.list_model_search(res)
        this.all_model_money(res)
      })
    },
    first_hos (tab) {
      /* if (tab.index === '0') {
          this.axios.get(url.selectSerch+'?fund_details_state=1').then(res=>{
            this.listHos = res.data.data
          })
        }else if (tab.index === '1') {
          this.axios.get(url.selectSerch+'?fund_details_state=0').then(res=>{
            this.listSecond = res.data.data
          })
        }else if (tab.index === '2') {
          this.axios.get(url.selectSerch+'?fund_details_state=1&fund_details_money=1').then(res=>{
            this.listPaid_for = res.data.data
          })
        }else if (tab.index === '3') {
          this.axios.get(url.selectSerch+'?fund_details_state=1&fund_details_money=0').then(res=>{
            this.listUncollected = res.data.data
          })
        } */
    }
  }
}
</script>

<style lang="scss">
@import "../css/public.css";
.Project_Reconciliation{
  margin-bottom: 100px;
  .projet-recon{padding-left: 13px}
  .username{display: flex;position: relative;top: 9px;font-weight: bold}
  .clasred{color: red}
  /*待付款*/
  .ok{margin-top: 16px;display: flex;padding-bottom:10px;font-weight: bold}
  .ok div:nth-child(2){font-size: 18px;flex: 1}
  .ok div:nth-child(1){font-size: 15px;flex: 3}
  .input-top{border-bottom: 1px solid black;margin-bottom:10px}
  .input-top label{padding-right: 0;padding-left: 0;width: 22%;}
  .mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{width: 77% !important;}
  /*总款项*/
  .all-hot{padding-bottom: 10px;font-weight: bold}
  .all-hot div{flex: 1;font-size: 15px}
  .all-hot div:nth-child(1),.all-hot div:nth-child(2){padding-bottom: 10px}
  /*4项金额*/
  .yes-all ul{list-style: none;margin: 0;padding: 0 0 10px 0;font-size: 15px;}
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
  table tr td:nth-child(1){min-width: 96px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 98px;display: block}
  tbody{display: block;}
  .tableSelect{margin-bottom: 0;background-color: #fff}
  /*搜索*/
  .mui-input-row select{font-weight: bold;margin-bottom: 0;margin-top: 10px;font-size: 20px}
  .el-input--suffix .el-input__inner{margin-bottom: 0}
  .el-select{width: 100%}
/* 底部 */
  .footer{position: fixed;bottom: 0;background-color: #acacac;width: 100%;line-height: 29px;font-size: 15px;display: flex;justify-content: flex-end}
  .footer .box{margin-right: 15px}
}

</style>
