<template>
    <div class="money_summary">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">款项汇总</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--searchInput-->
      <div class="mui-content">
        <div class="flexq">
          <label>日期</label>
          <!--<input type="text" v-model="value2" list="fruit">
          <datalist id="fruit">
            <option v-for="item in ListData" :value="item.text">{{item.text}}</option>
          </datalist>-->
          <select name="" v-model="data_time" :class="{classgary:data_time==='',classBlack:data_time!==''}">
            <option value="">请选择</option>
            <option v-for="item in ListData" :value="item.text">{{item.text}}</option>
          </select>
        </div>
        <div class="flexq">
          <label>区间</label>
          <input type="date" v-model="DataValue">
        </div>
      </div>
      <div class="mui-content no-btn" v-for="item in listValue">
        <ul class="mui-table-view no-bcg">
          <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">
              <div class="cent black_cent">
                <div class="cent-row blodk">{{item.fund_name_type}}</div>
                <div class="cent-row blodk" :class="{classRed:item.enterSum<0,classGreen:item.enterSum>0}">{{item.enterSum}}</div>
              </div>
            </a>
            <div class="mui-collapse-content no-div-bcg">
              <div class="cent noeflex" v-for="(items,index) in item.list">
                <div class="paf">
                  <div class="cent-row">{{items.fund_names}}</div>
                  <div class="cent-row" :class="{classRed:item.enterSum<0,classGreen:item.enterSum>0}">{{items.enterSum}}</div>
                </div>
                <div class="line" v-for="itemd in items.list" v-if="itemd.fund_name">
                  <div>{{itemd.fund_name}}</div>
                  <div :class="{classRed:item.enterSum<0,classGreen:item.enterSum>0}">{{itemd.enterSum}}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'money_summary',
  data () {
    return {
      imgUrl_loading: true,
      ited_name: false,
      data_time: '', // 时间
      ListData: [
        { text: '本月' },
        { text: '本周' },
        { text: '本日' },
        { text: '本年' }
      ],
      listValue: '',
      DataValue: '',
      list: [
        { text: '收入', money: '￥' + '5000' }
      ],
      lists: [
        { text: '收入', money: '￥' + '5000' }
      ],
      listd: [
        { text: '收入', money: '￥' + '5000' },
        { text: '收入', money: '￥' + '5000' },
        { text: '收入', money: '￥' + '5000' }
      ]
    }
  },
  prop: {
    label: Number,
    prop: Number
  },
  created () {
    this.axios.get('/fund/Select_fund_name_money').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.listValue = res.data.list_fund_name_money
      }
    })
  },
  methods: {
    /* handlemyclass:function(row, column, rowIndex, columnIndex){
        return 'test'
      },
      ssd(id){
        console.log(id)
      } */
  }
}
</script>

<style scoped>
  .flexq{display: flex;padding-left: 7%;padding-top: 8%;font-size: 17px}
  .flexq label{border-left: 9px solid #000000;padding-left: 6px}
  .flexq input{background-color: transparent;border-left: none;border-right: none;border-top: none;padding-left: 6px;width: 42%;height: 0;margin-bottom: 0;}
  .flexq select{border-bottom: 1px solid rgba(0,0,0,.2) !important;width: 42%;margin-bottom: 0;padding: 0 8px}
  .flexq:nth-child(2){padding-top: 7px}
  .no-bcg,.no-div-bcg{background-color: #EFEFF4!important;}
  .no-div-bcg{padding-top: 0!important;margin-top: 0!important;}
  .no-btn{padding-top: 0}
  .black_cent{border-bottom: 2px solid black;}
  .cent{display: flex;width: 93%;margin: auto;white-space: nowrap;font-size: 15px}
  .cent-row{padding: 0 15px;font-size: 15px;}
  .blodk{font-weight: bold}
  .cent .cent-row:nth-child(1){flex: 1;overflow: hidden;text-overflow: ellipsis}
  .cent .cent-row:nth-child(2){flex: 3}
  .paf{padding: 6px 0;border-bottom: 1px solid black;color: #4a4a4a;display: flex;}
  .line{color: #5a5a5a;padding: 6px 14px;display: flex;border-bottom: 1px dotted #747474}
  .line div{overflow: hidden;text-overflow: ellipsis}
  .line div:nth-child(1){flex: 1;}
  .line div:nth-child(2){flex: 3;padding: 0 43px}
  .noeflex{display: block}
  .mui-table-view:before{background-color: transparent}
  .mui-table-view:after{background-color: transparent}
  .classRed{color: red}
  .classGreen{color: green}
  .classBlack{color: black}
  .classgary{color: gray}
/*  .cent{font-size: 15px}
  .cent .cent-row{width: 90%;display: flex;margin: 0 auto;border-bottom: 1px solid black}
  .cent .cent-row div{width: 20%;margin: 0 auto}*/
/*  /deep/.el-table .cell{white-space: nowrap}
  /deep/.el-table__header th, .el-table__header tr{background-color: #dadada;color: black;padding: 4px 0;}
  /deep/.el-table td, .el-table th.is-leaf{border-bottom: 1px solid #dadada;padding: 4px 0;background-color: #efeff4;}
  .element::-webkit-scrollbar {display:none}
  /deep/.el-radio{padding-left: 9px;line-height: 36px}
  /deep/[data-v-91726806] .el-table td, .el-table th.is-leaf[data-v-91726806]{padding: 0 0}
  /deep/.test:nth-child(4){color:red !important;}
  /deep/.test:nth-child(5){color:green !important;}*/
</style>
