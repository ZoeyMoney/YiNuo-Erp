<template>
    <div class="Project_Reconciliation">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">项目对账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--项目对账-->
      <div class="mui-content">
        <div class="ok">
          <div>您好：宝源板材</div>
          <div>待付款：￥87680</div>
        </div>
        <div class="all-hot">
          <div>总款项：￥100000</div>
          <div>已付款：￥100000</div>
        </div>
        <div class="yes-all">
          <ul>
            <li>奖励金额：￥100000</li>
            <li>罚款金额：￥100000</li>
            <li>质保金额：￥100000</li>
            <li>其他费用：￥100000</li>
          </ul>
        </div>
      </div>
      <template>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="已付款" name="first">
            <table>
              <tr>
                <th>工地名称</th>
                <th>金额</th>
                <th :style="lefta">期数</th>
                <th>实付</th>
                <th :style="lefta">日期</th>
              </tr>
              <tr>
                <td><span :style="hid">第一工地多开几个数据库</span></td>
                <td><span :style="money">￥300,000,0</span></td>
                <td><span :style="fund_name">5</span></td>
                <td><span :style="money">￥90000</span></td>
                <td><span :style="paLft">2019-10-27</span></td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="未付款" name="second">
            <table>
              <tr>
                <th>工地名称</th>
                <th>金额</th>
                <th :style="lefta">期数</th>
                <th>实付</th>
                <th :style="lefta">日期</th>
              </tr>
              <tr>
                <td><span :style="hid">地多几个数据库</span></td>
                <td><span :style="money">￥-20,000,0</span></td>
                <td><span :style="fund_name">50</span></td>
                <td><span :style="money">￥-80000</span></td>
                <td><span :style="paLft">2019-10-30</span></td>
              </tr>
            </table>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
</template>

<script>
  mui.init()
  export default {
    name: 'Project_Reconciliation',
    data(){
      return{
        activeName: 'first',

        paLft: {
          display: 'block',
          padding: '0 10px',
          whiteSpace:'nowrap'
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
    methods:{

    }
  }
</script>

<style>
@import "../css/public.css";
  .mui-content{padding-left: 13px}
/*待付款*/
  .ok{margin-top: 30px;border-bottom: 1px solid black;padding-bottom: 10px;margin-bottom: 10px;}
  .ok div:nth-child(1){font-size: 18px;margin-bottom: 10px}
  .ok div:nth-child(2){font-size: 26px;font-weight: 600}
  /*总款项*/
  .all-hot{border-bottom: 1px solid black;display: flex;padding-bottom: 10px;margin-bottom: 10px;}
  .all-hot div{flex: 1;font-size: 15px}
  /*4项金额*/
  .yes-all ul{list-style: none;margin: 0;padding: 0 0 10px 0;font-size: 15px;border-bottom: 1px solid black;}
.el-tabs__header{margin: 0!important;}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color: #000!important;}
.el-tabs--card>.el-tabs__header{border-bottom: 2px solid #000!important;}
.el-tabs__item.is-active{background-color: black}
.el-tabs__item.is-active{color: white!important;}
.el-tabs__item:hover{color: white!important;background-color: black!important;}
  /*table*/
table{width: 100%;text-align: left;font-size: 15px;}
table tr {line-height: 29px;border-bottom: 1px solid #DADADA}
table th{text-align: left;background-color: #DADADA;line-height: 32px;white-space: nowrap}
</style>
