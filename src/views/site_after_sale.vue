<template>
  <div class="Project_Reconciliation">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'site_statistics'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">工地详细</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <div class="mui-content">
      <div class="customer">
        <h2>工地详细</h2>
        <p>/The customer details</p>
      </div>
    </div>
    <login-loading v-if="imgUrl_loading"></login-loading>
    <!--项目对账-->
    <div class="mui-content projet-recon">
      <div class="username" v-if="divinput">
        <label>账号：</label>
        <div>{{divname}}</div>
      </div>
      <div class="all-hoh" style="padding-bottom:12px;font-size: 14px;">
        <div class="all-name">工地名称&nbsp;&nbsp;</div>
 
        <div style="height: 300px;padding-right:13px;padding-bottom:30px;">
          <span class="font">
            <span>时间进度</span>&nbsp;&nbsp; 2018.9.15 — 2019-10.10
          </span>
          <el-progress :text-inside="true" :stroke-width="24"  :percentage="99" status="success" class="jindu"></el-progress>

          <ul class="fenlei">
            <li>
              木工&nbsp;&nbsp;
              <span>2019-10-5</span>
              <el-progress :percentage="percentage" :color="customColor"></el-progress>
            </li>

            <li>
              水电&nbsp;&nbsp;
              <span>2019-10-5</span>
              <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
            </li>
            <li>
              油漆&nbsp;&nbsp;
              <span>2019-10-5</span>
              <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
            </li>
            <li>
              杂工&nbsp;&nbsp;
              <span>2019-10-5</span>
              <el-progress :percentage="percentage" :color="customColors"></el-progress>
            </li>
          </ul>

          <div style="margin-right: 13px;">
            <el-button-group>
              <el-button icon="el-icon-plus" @click="increase" class="jia"></el-button>
            </el-button-group>
          </div>
        </div>
        <!-- 人工列表 -->
       <div class="all-name2"><span>用工总数&nbsp;&nbsp;</span>100000</div>
          <el-collapse v-model="activeName" accordion @change="handleChange"  class="xiala">
          <el-collapse-item title="人工分类" name="1">
            <div>
             <table>
                <tr class="biaotou">
                  <th><span>工种</span></th>
                  <th><span>人数</span></th>
                
                </tr>
                <tr>
                  <td>工程款</td>
                  <td>9999</td>
                  
                </tr>
                <tr>
                  <td>设计费</td>
                  <td>8888</td>
                  
                </tr>
                <tr>
                  <td>增项款</td>
                  <td>66666</td>
                  
                </tr>
              </table>
            </div>
          </el-collapse-item>
        </el-collapse>

<!-- 
利潤列表 -->
       <div class="all-name2"><span>工地利润&nbsp;&nbsp;</span>￥100000</div>
        <el-collapse v-model="activeNames" accordion @change="handleChange"  class="xiala">
          
          </el-collapse-item>
          <el-collapse-item title="已收款￥9999" name="1">
            <div >
             <table>
                <tr class="biaotou">
                  <th><span>款项名称</span></th>
                  <th><span>金额</span></th>
                  <th><span>日期</span></th>
                  <th class="beizhu"><span>备注</span></th>
                </tr>
                <tr>
                  <td>工程款</td>
                  <td>9999</td>
                  <td>2019-08-10</td>
                  <td>花开也落花满天南岸按的撒水电按属地按属地</td>
                </tr>
                <tr>
                  <td>设计费</td>
                  <td>8888</td>
                  <td>2019-08-10</td>
                </tr>
                <tr>
                  <td>增项款</td>
                  <td>66666</td>
                  <td>2019-08-10</td>
                </tr>
              </table>
            </div>
           
      </el-collapse-item>
     <el-collapse-item title="待收款￥9999" name="2">
          <div>
             <table>
                <tr class="biaotou">
                  <th><span>款项名称</span></th>
                  <th><span>金额</span></th>
                  <th><span>日期</span></th>
                  <th class="beizhu"><span>备注</span></th>
                </tr>
                <tr>
                  <td>工程款</td>
                  <td>9999</td>
                  <td>2019-08-10</td>
                  <td>花开也落花满天南岸按的撒水电按属地按属地</td>
                </tr>
                <tr>
                  <td>设计费</td>
                  <td>8888</td>
                  <td>2019-08-10</td>
                </tr>
                <tr>
                  <td>增项款</td>
                  <td>66666</td>
                  <td>2019-08-10</td>
                </tr>
              </table>
            </div>
           
      </el-collapse-item>
      <el-collapse-item title="已支出￥88888 " name="3">
           <div>
             <table>
                <tr class="biaotou">
                  <th><span>款项名称</span></th>
                  <th><span>金额</span></th>
                  <th><span>日期</span></th>
                  <th class="beizhu"><span>备注</span></th>
                </tr>
                <tr>
                  <td>工程款</td>
                  <td>9999</td>
                  <td>2019-08-10</td>
                  <td>花开也落花满天南岸按的撒水电按属地按属地</td>
                </tr>
                <tr>
                  <td>设计费</td>
                  <td>8888</td>
                  <td>2019-08-10</td>
                </tr>
                <tr>
                  <td>增项款</td>
                  <td>66666</td>
                  <td>2019-08-10</td>
                </tr>
              </table>
            </div>
           
      </el-collapse-item>
       <el-collapse-item title="待支出￥66666" name="5">
             <table>
                <tr>
                  <th>工种</th>
                  <th>金额</th>
                  <th>人数</th>
                  <th>备注</th>
                </tr>
                <tr>
                  <td>木工</td>
                  <td>9999</td>
                  <td>2019-08-10</td>
                  <td>花开了</td>
                </tr>
                <tr>
                  <td>水电</td>
                  <td>8888</td>
                  <td>2019-08-10</td>
                  <td>w</td>
                </tr>
                <tr>
                  <td>泥工</td>
                  <td>66666</td>
                  <td>2019-08-10</td>
                </tr>
              </table>
      </el-collapse-item>
      <el-collapse-item title="运营费￥66666" name="4">
            <div>2</div>
            <div>2</div>
      </el-collapse-item>
     
        </el-collapse>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      imgUrl_loading: false,
      AdminName: false,
      divinput: false,
      activeName: "first",
      projetName: "",
      value: "",
      // NewUserName:'',
      userName: "",
      list: "",
      first: "",
      hos: "已付款",
      listHos: "",
      second: "未付款",
      name_num: "",
      listSecond: "",
      yesFu: "",
      paid_for: true,
      divname: "",
      listPaid_for: "",
      Uncollected: "",
      listUncollected: "",
      userName_id: "",
      all_money: "0", // 总计金额
      all_paid: "0", // 已付金额
      no_paid: "0", // 质保金额
      ou_paid: 0,
      enter_paid: "0", // 应付金额
     activeName: '1',//统计下拉列表
      //分支进度
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ],
      paLft: {
        display: "block",
        padding: "0 10px",
        width: "150px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      lefta: {
        paddingLeft: "10px",
        minWidth: "85px"
      },
      money: {
        display: "block",
        width: "72px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      fund_name: {
        display: "block",
        width: "57px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: "10px"
      }
    };
  },
  created() {
    //  接收返回来的参数
    /* this.userName = window.fund_people
        this.userName_id = window.fund_people_name */
    this.imgUrl_loading = true;
    // 查询
    var then = this;
    this.axios.get("/User/Select_accounting").then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false;
        this.NewUserName = JSON.parse(localStorage.data).role;
        // console.log(this.NewUserName)
        for (var index in this.NewUserName) {
          this.projetName = res.data.list_fund_customer_name;
          if (this.NewUserName[index].jurisdiction_name === "项目对账") {
            if (this.NewUserName[index].role_name === "总权限") {
              this.AdminName = true;
              this.divinput = false;
            } else {
              this.divname = res.data.name;
              this.yesFu = res.data.list_fund_Already_out;
              this.listSecond = res.data.list_fund_pre_out;
              this.divinput = true;
              this.AdminName = false;
            }
            this.listHos = res.data.list_fund_user_number;
            if (this.userName != "") {
              this.yesFu = res.data.list_fund_Already_out;
              this.listSecond = res.data.list_fund_pre_out;
              this.listPaid_for = res.data.list_fund_Already_enter;
              this.listUncollected = res.data.list_fund_pre_enter;
            }
          }
        }
      }
    });
  },
  methods: {
    //分支进度

    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    
  }
};
</script>

<style lang="scss">
@import "../css/public.css";
ul {
  margin-top: 0;
  list-style: none;
}
.Project_Reconciliation {
  margin-bottom: 100px;
  .projet-recon {
    padding-left: 13px;
  }
  .username {
    display: flex;
    position: relative;
    top: 9px;
    font-weight: bold;
  }
  .clasred {
    color: red;
  }
  /*待付款*/
  .ok {
    margin-top: 16px;
    display: flex;
    padding-bottom: 10px;
    font-weight: bold;
  }
  .ok div:nth-child(2) {
    font-size: 18px;
    flex: 1;
  }
  .ok div:nth-child(1) {
    font-size: 15px;
    flex: 3;
  }
  .input-top {
    border-bottom: 1px solid black;
    margin-bottom: 10px;
  }
  .input-top label {
    padding-right: 0;
    padding-left: 0;
    width: 22%;
  }
  .mui-input-row label ~ input,
  .mui-input-row label ~ select,
  .mui-input-row label ~ textarea {
    width: 77% !important;
  }
  /*总款项*/

  .all-hot {
    padding-bottom: 10px;
  }
  .all-hoh {
    padding-bottom: 10px;
  }
  .all-name {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 15px
  }
  .all-hot div {
    flex: 1;
    font-size: 15px;
  }
  .all-hot div:nth-child(1),
  .all-hot div:nth-child(2) {
    padding-bottom: 5px;
  }
  /*4项金额*/
  .yes-all ul {
    list-style: none;
    margin: 0;
    padding: 0 0 10px 0;
    font-size: 15px;
  }
  .el-tabs__header {
    margin: 0 !important;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #000 !important;
    border-radius: 3px;
  }
  .el-tabs--card > .el-tabs__header {
    border-bottom: 2px solid #000 !important;
  }
  .el-tabs__item.is-active {
    background-color: black;
  }
  .el-tabs__item.is-active {
    color: white !important;
  }
  .el-tabs__item:hover {
    color: white !important;
    background-color: black !important;
  }
  /*table*/
  .fenlei {
    margin-top: 25px;
    padding: 0;
  }
  .fenlei li {
    font-size: 12px;
    margin: 10px 0px;
  }
  .font {
    font-size: 13px;
    display: block;
    margin-bottom: 13px;
  }
  .font span {
    font-weight: 700;
    font-size: 15px;
  }
  h6 {
    float: left;
    margin-right: 5px;
    color: #000;
    margin-bottom: 5px;
  }
  table {
    width: 100%;
    text-align: left;
    font-size: 12px;

  }
  table tr {
    line-height: 29px;
    border-bottom: 1px solid #dadada;
    color: #000;
  }
  table th {
    text-align: left;
    // background-color: #dadada;
    line-height: 32px;
    white-space: nowrap;
    width: 20%;
  }
  table tr th{
    color: #000;
   font-weight: 700;
  }
  table tr td:nth-child(1) {

    min-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
   table tr td:nth-child(4) {
     padding-left: 5px;
     width: 110px;
     height: 30px;
     display: block;
     overflow: hidden;
    white-space: nowrap;
    word-break:keep-all;
    text-overflow:ellipsis;
  }
  tbody {
    display: block;
  }
  .tableSelect {
    margin-bottom: 0;
    background-color: #fff;
  }
  /*搜索*/
  .mui-input-row select {
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 20px;
  }
  .el-input--suffix .el-input__inner {
    margin-bottom: 0;
  }
  .el-select {
    width: 100%;
  }
  .dy3 {
    font-weight: 400;
  }
  /* 底部 */
  .footer {
    position: fixed;
    bottom: 0;
    background-color: #acacac;
    width: 100%;
    line-height: 29px;
    font-size: 15px;
    display: flex;
    justify-content: flex-end;
  }
  .footer .box {
    margin-right: 15px;
  }
}
.ok {
  margin-top: 30px;
}
.demonstration {
  font-size: 15px;
  margin-bottom: 20px;
}
.jia {
  padding: 5px 12px;
}
.fommac {
  margin-top: 20px;
}
.xiala div{
  background-color: #EFEFF4;
  padding: 0px 13px 0px 0px;
}
.jindu{
  padding-right: 10px;
}
th {
  font-weight: 100;
}
.all-name2 {
  font-size: 15px;
margin: 20px 0px 10px 0px;
}
.all-name2 span{
font-weight: 700;
}
.biaotou th:nth-child(1){
width: 20%;
}
.biaotou th:nth-child(4){
width: 140px;
height: 30px;

padding-left: 5px;
}
.el-collapse-item__header{
  height: 24px;
}
</style>
