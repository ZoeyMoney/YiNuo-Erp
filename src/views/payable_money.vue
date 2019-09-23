<template>
  <div class="payable_money">
    <!--头部-->
    <header class="mui-bar mui-bar-nav">
      <router-link to="" @click.native="hregGO" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">应付款汇总</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户录入-->
    <div class="mui-content one-img">
      <div class="customer">
        <h2>应付款汇总</h2>
        <p>/Summary of payable</p>
      </div>
      <div class="mui-img">
        <router-link :to="{name:'accounts_payable'}"><img :src="money_plus" alt="增加"></router-link>
      </div>
    </div>
    <!--form-->
    <div class="mui-content app">
        <form class="mui-input-group">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right search" href="#">筛选</a>
              <div class="mui-collapse-content content">
                <div class="mui-input-row">
                  <label>类别名称</label>
                  <select name="" v-model="list_fund_namea" @change="listProjetChange">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="(item,i) in list_projet" :value="item" :key="i">{{item}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>相关人</label>
                  <select name="" v-model="Related" @change="RelatedChange">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="(item,i) in RelatedList" :value="item" :key="i">{{item}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>工地名称</label>
                  <select name="" v-model="customer_name" @change="ProjetChange">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="(item,i) in projetList" :value="item" :key="i">{{item}}</option>
                  </select>
                </div>
              </div>
            </li>
          </ul>
      </form>
      <!--table-->
      <table border="0">
        <tr>
          <th :style="lefta">应付日期</th>
          <th>类别</th>
          <th>项目</th>
          <th>相关人</th>
          <th>金额</th>
        </tr>
        <tr v-for="(item,i) in listTable" :key="i" @click="msg(item.fund_details_id,item.fund_person_id)" :class="{clasred:item.dates <= datesdm,}">
          <td>
            <span v-if="item.dates" :style="paLft">{{item.dates}}</span>
            <span v-if="item.fund_details_date===undefined" :style="paLft">待定</span>
          </td>
          <td>
            <span v-if="item.fund_details_batch==='99'" :style="fund_name">质保金</span>
            <span v-else-if="item.fund_name" :style="fund_name">{{item.fund_name}}</span>
            <span v-else-if="item.fund_name===undefined" :style="fund_name">无</span>
          </td>
          <td>
            <span :style="hid" v-if="item.customer_name">{{item.customer_name}}</span>
            <span v-if="item.customer_name===undefined">无</span>
          </td>
          <td><span :style="person">{{item.fund_person}}</span></td>
          <td><span :style="money" :class="{clasyews:item.fund_details_type =='1'}">￥{{item.fund_details_money | negative}}</span></td>
        </tr>
      </table>
    </div>
    <div class="footer">
      <div class="box">
      总金额:￥{{allMoney | negative}}
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../js/index'
export default {
  name: 'payable_money',
  data () {
    return {
      imgUrl_loading: false,
      fund_nameo: '', // 项目类别
      datesdm: '',  //今天时间
      customer_name: '', // 项目名称
      projetList:'',//项目名称数据
      listTable: '', // table
      alllistTable:'',//备份数据列表
      Related: '', // 相关人
      RelatedList:'',//相关人数据
      list_fund_namea: '',//类别名称
      list_projet:'', //类别名称数据
      allMoney: '',
      money_plus: require('../image/plus.png'),
      paLft: {
        display: 'block',
        padding: '0 10px',
        whiteSpace: 'nowrap'
      },
      hid: {
        display: 'block',
        width: '94px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      boder: {
        border: '1px solid #565656',
        display: 'block',
        width: '63px'
      },
      person: {
        display: 'block',
        width: '62px',
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
      lefta: {
        paddingLeft: '10px'
      },
      fund_name: {
        display: 'block',
        width: '74px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  methods: {
    //  总金额
    moneyAll() {
      var allMoney = 0;
      for (var index in this.listTable) {
        allMoney += this.listTable[index].fund_details_money;
      }
      this.allMoney = Math.floor(allMoney * 100) / 100;
    },
    // 详情
    msg(id, prosen) {
      var payable_entry = {};
      for (var index in this.listTable) {
        if (id === this.listTable[index].fund_details_id) {
          payable_entry = this.listTable[index];
        }
      }
      localStorage.payable_entry = JSON.stringify(payable_entry);
      this.$router.push({path: 'payable_entry', query: {id: payable_entry}});
    },
    //类别选择
    listProjetChange() {
      var newlist = [];
      sessionStorage.setItem(config.SEARCH.SEARCH_LIST_NAME, this.list_fund_namea);
      this.$store.commit('yingshou', this.list_fund_namea);
      if (this.list_fund_namea != '') {
        for (var index in this.listTable) {
          if (this.list_fund_namea == this.listTable[index].fund_name) {
            newlist.push(this.listTable[index]);
          }
        }
        this.listTable = newlist;
        sessionStorage.setItem(config.LIST.LIST_PROJET, JSON.stringify(newlist));
        this.$store.commit('list_backuo', JSON.stringify(newlist));
        this.moneyAll(); //总金额
      } else {
        this.listTable = this.alllistTable;
      }
    },
    //项目名称
    ProjetChange() {
      var projet = [];
      sessionStorage.setItem(config.SEARCH.SEARCH_LIST_PROJET, this.customer_name);
      this.$store.commit('projet', this.customer_name);
      if (this.customer_name != '') {
        for (var index in this.listTable) {
          if (this.customer_name == this.listTable[index].customer_name) {
            projet.push(this.listTable[index]);
          }
        }
        this.listTable = projet;
        this.backupData = projet;
        sessionStorage.setItem(config.LIST.LIST_PROJET, JSON.stringify(projet));
        this.$store.commit('list_backuo', JSON.stringify(projet));
        this.moneyAll(); //总金额;
      } else {
        this.listTable = this.alllistTable;
      }
    },
    //相关人
    RelatedChange() {
      var Related = [];
      sessionStorage.setItem(config.SEARCH.SEARCH_LIST_PEOPLE, this.Related);
      this.$store.commit('people', this.Related);
      if (this.Related != '') {
        for (var index in this.listTable) {
          if (this.Related == this.listTable[index].fund_person) {
            Related.push(this.listTable[index]);
          }
        }
        this.listTable = Related;
        this.backupData = Related;
        sessionStorage.setItem(config.LIST.LIST_PROJET, JSON.stringify(Related));
        this.$store.commit('list_backuo', JSON.stringify(Related));
        this.moneyAll(); //总金额
      } else {
        this.listTable = this.alllistTable;
      }
    },
    tableData() {
      /* table */
      this.imgUrl_loading = true;
      this.axios.get('/fund/select_fund_sum' + '?fund_type=1').then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false;
          var newlist = [];  //类别名称有重复数据
          var projet = []; //项目名称筛选有重复数据
          var Related = [];//相关人有重复数据
          var resArr, projetArr, RelatedArr;  //类别名称筛选过后无重复的数据
          //如果vuex里面有数据则触发有数据的，无的话返回后台所有数据
          if (sessionStorage.getItem(config.LIST.LIST_PROJET) != null) {
            console.log(sessionStorage.getItem(config.SEARCH.SEARCH_LIST_NAME))
            var list = sessionStorage.getItem(config.LIST.LIST_PROJET);
            var obj = JSON.parse(list);
            this.listTable = obj
          } else {
            this.listTable = res.data.list_fund; //数据筛选
            this.alllistTable = res.data.list_fund;  //备份数据
          }
          //金钱合计
          if (this.list_fund_namea == '' && this.Related == '' && this.customer_name == '') {
            this.moneyAll(); //总合计
          }

          //循环筛选
          for (var index in this.listTable) {
            newlist.push(this.listTable[index].fund_name);
            projet.push(this.listTable[index].customer_name);
            Related.push(this.listTable[index].fund_person);
          }
          //类别名称
          resArr = newlist.filter(function (item, index, self) {
            return self.indexOf(item) == index;
          });
          //项目名称
          projetArr = projet.filter(function (item, index, self) {
            return self.indexOf(item) == index;
          });
          //相关人
          RelatedArr = Related.filter(function (item, index, self) {
            return self.indexOf(item) == index;
          });
          if (newlist != '' || projet != '' || Related != '') {
            this.list_projet = resArr;
            this.projetList = projetArr;
            this.RelatedList = RelatedArr;
          }
        }
      })
    },
    //  返回页面清除数据
    hregGO(){
      sessionStorage.removeItem(config.SEARCH.SEARCH_LIST_PROJET);
      sessionStorage.removeItem(config.SEARCH.SEARCH_LIST_PEOPLE);
      sessionStorage.removeItem(config.SEARCH.SEARCH_LIST_NAME);
      sessionStorage.removeItem(config.LIST.LIST_PROJET);
      this.$store.commit('people');
      this.$store.commit('projet');
      this.$store.commit('yingshou');
      this.$store.commit('list_backuo');
      this.$router.push({name:'money_management'});
    },
  },
  created () {

      this.tableData();
    /* data */
    var data = new Date();
    var dt = new Date(data);
    var y = dt.getFullYear();
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (d < 10) {
      d = '0' + d;
    }
    var dd = y + '-' + mm + '-' + d;
    this.datesdm = dd;
  },
}
</script>

<style scoped>
  @import "../css/public.css";
  select{font-size: 15px!important;}
  .clasred{color: #007aff}
  .clasyews{color: red}
.customer{flex: 1;}
.one-img{display: flex;}
.mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
.mui-img a img{width: 100%;}
form{margin-bottom: 20px;}
.goOver{display: flex;}
.goOver label{flex: 0.8;}
.goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
.goOver input{flex: 1;}
  .radio-left{display: flex}
  .mui-checkbox.mui-left label, .mui-radio.mui-left label{width: 100%;padding-left: 0;margin-right: 27px}
  .mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 34px!important;}
  /*折叠地方*/
  .search{font-size: 15px}
  .mui-table-view-cell.mui-collapse .mui-collapse-content{padding: 0}
  .mui-table-view,.mui-table-view-cell.mui-collapse .mui-collapse-content{background-color: transparent}
/*table*/
table{width: 100%;text-align: left;font-size: 13px;overflow: auto}
table tr {line-height: 29px;border-bottom: 1px solid #DADADA}
table th{text-align: left;background-color: #DADADA;line-height: 32px;white-space: nowrap}
  /*底部*/
  .footer{position: fixed;bottom: 0;background-color: #acacac;width: 100%;line-height: 29px;font-size: 15px;text-align: right;padding-right: 30px}
</style>
