<template>
    <div class="money_entry">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_receivable'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">应收款录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>应收款录入</h2>
          <p>/Receivables entry</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row site_projet" v-if="site_various">
            <label>工地名称</label>
            <input type="text" v-model="customer_name" placeholder="请输入工地名称" @keyup="siteWhite(customer_name)"/>
            <ul class="mui-table-view" v-show="isshow">
              <li class="mui-table-view-cell" v-for="(item,i) in site_projet_name_search" :key="i" @click="siteItem(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
            </ul>
          </div>
          <div class="mui-input-row" v-if="relevant_people">
            <label>债务人</label>
            <input type="text" v-model="fund_debtor" placeholder="请输入债务人" @keyup="listRelevantWhite(fund_debtor)"/>
            <ul class="mui-table-view" v-show="releshow">
              <li class="mui-table-view-cell" v-for="(item,i) in relelist" :key="i" @click="releItem(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
            </ul>
          </div>
          <div class="mui-input-row">
            <label>类别选择</label>
            <select name="" v-model="fund_nameo" @change="fund_namesa(fund_nameo)" :class="{select:fund_nameo==='',selectBlack:fund_nameo!==''}" >
              <option value="">请选择</option>
              <option v-for="item in list_fund_name_type" :value="item.fund_name_type">{{item.fund_name_type}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>类别名称</label>
            <select name="" v-model="list_fund_namea" @change="list_fund_nameas(list_fund_namea)"  :class="{select:list_fund_namea==='',selectBlack:list_fund_namea!==''}" >
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_names" :value="item.fund_names" v-if="cotrProjet">{{item.fund_names}}</option>
              <option v-for="item in list_fund_names" :value="item.fund_name_id" v-if="idProjet">{{item.fund_names}}</option>
            </select>
          </div>
          <div class="mui-input-row" v-if="category">
            <label>类别详情</label>
            <select name="" v-model="all_rate" @change="all_rate_name(all_rate)"  :class="{select:all_rate==='',selectBlack:all_rate!==''}" >
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_name" :value="item.fund_name_id">{{item.fund_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>级别</label>
            <select name="" v-model="level" :class="{select:level==='',selectBlack:level!==''}" >
              <option value="">请选择</option>
              <option v-for="item in list_lev" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>情况</label>
            <select name="" v-model="whether" :class="{select:whether==='',selectBlack:whether!==''}" >
              <option value="">请选择</option>
              <option v-for="item in list_whether" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>总金额</label>
            <input type="text" class="mui-input-clear" placeholder="￥" v-model="fund_money">
          </div>
          <div class="mui-input-row input-radio">
            <div class="mui-input-row mui-left mui-radio">
              <label>阶段付款</label>
              <input v-model="fund_type" @click="stage_one" type="radio" value="阶段付款">
            </div>
            <div class="mui-input-row mui-left mui-radio">
              <label>周期付款</label>
              <input v-model="fund_type" @click="week" type="radio" value="周期付款">
            </div>
          </div>
          <table class="tables" border="0" id="table">
            <tr>
              <th><span :style="paLft">预收日期</span></th>
              <th><span>批次</span></th>
              <th><span>金额</span></th>
              <th><span>备注</span></th>
            </tr>
            <tr v-for="(item,i) in list" :key="i">
              <td><span :style="paLft"><el-date-picker v-model="item.fund_details_date" :editable="false" id="fund_details_date" type="date" placeholder="选择日期"></el-date-picker></span></td>
              <td><span><input type="text" v-model="item.fund_details_batch" placeholder="批次" id="fund_details_batch" :style="paR"></span></td>
              <td><span><input type="text" v-model="item.fund_details_money" id="fund_details_money" placeholder="￥" :style="paR"></span></td>
              <td><span><input type="text" v-model="item.fund_details_text" id="fund_details_text" placeholder="备注" :style="paR"></span></td>
            </tr>
          </table>
        </form>
        <div class="mui-content data-time" id="data-time">
          <form class="mui-input-group">
            <div class="mui-input-row">
              <label>还款时间</label>
              <input type="date" id="data_huan" v-model="data_huan" class="mui-input-clear">
            </div>
            <div class="mui-input-row">
              <label>还款周期</label>
              <select name="" id="yue" v-model="yue">
                <option value="">请选择</option>
                <option value="按月">按月</option>
                <option value="按年">按年</option>
                <option value="按周">按周</option>
              </select>
            </div>
            <div class="mui-input-row">
              <label>还款期数</label>
              <input type="text" class="mui-input-clear" v-model="qi" id="qi" placeholder="请填入期数">
            </div>
          </form>
        </div>
        <p id="btn-form" @click="formAdd">添加新一行</p>
        <p id="btn-del" @click="del(user)">删除</p>
        <button-save @click.native="add"></button-save>
      </div>
    </div>
</template>

<script>
export default {
  name: 'money_entry',
  data () {
    return {
      imgUrl_loading: false,
      user: '',
      all_rate: '',
      all_id: '',
      category: true, // 隐藏
      relevant_people: true, // 相关人
      cotrProjet: false,
      idProjet: true,
      site_various: true,
      level: '', // 级别
      whether: '', // 情况
      list_lev: [ // 级别说明
        { text: 'A' },
        { text: 'B' },
        { text: 'C' }
      ],
      list_whether: [ // 情况说明
        { text: '是' },
        { text: '否' }
      ],
      fund_type: '阶段付款',
      list_fund_name_type: '',
      fund_nameo: '',
      fund_debtor: '',
      fund_debtor_id: '',
      fund_money: '',
      list_fund_debtor: [
        { text: '胡永生' },
        { text: '邱梅' }
      ],
      fund_person: '',
      fund_text: '0',
      list_fund_names: '',
      list_fund_namea: '',
      list_fund_name: '',
      customer_name: '',
      customer_name_id: '',
      list_customer_name: '',
      data_huan: '',
      fund_name: '',
      yue: '',
      qi: '',
      site_projet_name:'',//工地数据
      site_projet_name_search:[],
      relefor:'',//相关人数据
      relelist:[],//相关人数据
      releshow:false,//相关人列表
      test_id: '',
      isshow:false,
      list: [
        { 'fund_details_date': '', 'fund_details_batch': '1'.toString(), 'fund_details_money': '', 'fund_details_text': '' }
      ],
      batch_index: 1,
      list_list: [],
        paLft:{
          paddingLeft:'15px'
        },
        paR:{
          paddingLeft: "0"
        }
    }
  },

  methods: {
    formAdd () {
      this.batch_index++
      var s = { 'fund_details_date': '', 'fund_details_money': '', 'fund_details_batch': '1', 'fund_details_text': '' }
      s.fund_details_batch = this.batch_index.toString()
      this.list.push(s)
    },
    del (user) {
      if (this.list.length === 0) {
        mui.alert('没有可删除的了')
      } else {
        this.list.splice(this.list.indexOf(user), 1)
      }
    },
    // 类别选择
    fund_namesa (id) {
      this.fund_nameso = id
      this.axios.get('/fund/Select_three_fund_name' + '?fund_type=0&fund_name_type=' + this.fund_nameso).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.fund_nameo === '个人') {
          this.category = false
          this.site_various = false
        } else if (this.fund_nameo === '公司') {
          this.category = true
          this.cotrProjet = true
          this.idProjet = false
          this.site_various = true
        }
      })
    },
    // 类别名称
    list_fund_nameas (id) {
      this.fund_name = id
      this.axios.get('/fund/Select_three_fund_name' + '?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + id).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.fund_name === '外借款') {
          this.site_various = false
          this.relevant_people = true
        } else if (this.fund_name === '工程') {
          this.relevant_people = true
          this.site_various = true
        }
      })
    },
    // 类别详细
    all_rate_name (id) {
      this.all_id = id
      this.axios.get('/fund/Select_three_fund_name' + '?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + this.fund_name).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
      })
    },
    //工地传送
    siteItem(val,id){
      this.customer_name = val;
      this.customer_name_id = id;
      this.isshow = false;
    },
    //相关人传送
    releItem(val,id){
      this.fund_debtor = val;
      this.fund_debtor_id = id;
      this.releshow = false;
    },
    //工地
    siteData(){
      this.axios.get('/SelectAllCustomer' + '?Customer_A=1' + '&Customer_B=2' + '&Customer_C=3' + '&Customer_D=4').then(res => {
        if (res.status ===200){
          this.site_projet_name = res.data.data
        }
      })
    },
    //相关人
    person_all(){
      this.axios.get('/fund/Select_fund_person'+'?fund_person_state_A=1').then(res=>{
        if (res.status ===200){
          this.relefor = res.data.data
        }
      })
    },
    //工地键盘监听
    siteWhite(val){
      if (val.length ==0){
        this.isshow = false;
      }else{
        this.isshow = true;
        var then =this
        var citys = [];
        if (this.site_projet_name !=''){
          this.site_projet_name.map(function (item) {
            if (item.customer_name.search(then.customer_name) != -1){
              citys.push(item)
            }
          })
          this.site_projet_name_search = citys
        }
      }
    },
    //相关人键盘监听
    listRelevantWhite(val){
      if (val.length ==0){
        this.releshow = false;
      }else{
        this.releshow = true;
        var then =this
        var citys = [];
        if (this.relefor !=''){
          this.relefor.map(function (item) {
            if (item.fund_person.search(then.fund_debtor) != -1){
              citys.push(item)
            }
          })
          this.relelist = citys
        }
      }
    },
    stage_one () {
      var otable = document.getElementById('table')
      var data_time = document.getElementById('data-time')
      var btn_form = document.getElementById('btn-form')
      var del = document.getElementById('btn-del')
      btn_form.style.display = 'block'
      otable.style.display = 'block'
      del.style.display = 'block'
      data_time.style.display = 'none'
    },
    week () {
      var otable = document.getElementById('table')
      var data_time = document.getElementById('data-time')
      var btn_form = document.getElementById('btn-form')
      var del = document.getElementById('btn-del')
      del.style.display = 'none'
      otable.style.display = 'none'
      btn_form.style.display = 'none'
      data_time.style.display = 'block'
    },
    add () {
      var then = this
      var nuber = /^[0-9]*$/ // 验证数字
      var nuber_two = /^\d+(\.\d+)?$/ // 验证带点的数字
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var check = true
      //  类别选择
      if (this.fund_nameo == '') {
        mui.toast('类别选择不能为空')
        check = false
        return false
      }
      // 类别详情
      if (this.list_fund_namea == '') {
        mui.toast('类别详情不能为空')
        check = false
        return false
      }
      // 级别
      if (this.level == '') {
        mui.toast('级别不能为空')
        check = false
        return false
      }
      // 情况
      if (this.whether == '') {
        mui.toast('情况不能为空')
        check = false
        return false
      }
      // 总金额
      if (this.fund_money == '') {
        mui.toast('总金额不能为空')
        check = false
        return false
      }
      if (!nuber_two.test(this.fund_money)) {
        mui.toast('总金额只能填入数字')
        check = false
        return false
      }
      // 经手人
      /* if (this.fund_person == '') {
        mui.toast('经手人不能为空')
        check = false
        return false
      }
      if (!nameReg.test(this.fund_person)) {
        mui.toast('经手人格式错误')
        check = false
        return false
      } */
      // 判断阶段付款、周期付款
      if (this.fund_type === '阶段付款') {
        var fund_details_date = document.getElementById('fund_details_date').value // 时间
        var data_money = document.getElementById('fund_details_money').value // 金额
        var data_text = document.getElementById('fund_details_batch').value // 批次
        // 金额
        if (data_money == '') {
          mui.toast('金额不能为空')
          check = false
          return false
        }
        if (!nuber_two.test(data_money)) {
          mui.toast('金额只能填入数字')
          check = false
          return false
        }
        // 批次
        if (data_text == '') {
          mui.toast('批次不能为空')
          check = false
          return false
        }
        if (!nuber.test(data_text)) {
          mui.toast('批次只能填入数字')
          check = false
          return false
        }
        // 循环list是否有空
        for (var index in this.list) {
          /* list时间不能为空 */
          /* if (this.list[index].fund_details_date == '') {
            mui.toast('时间不能为空')
            check = false
            return false
          } */
          if (this.list[index].fund_details_batch == '') {
            mui.toast('批次不能为空')
            check = false
            return false
          }
          if (!nuber.test(this.list[index].fund_details_batch)) {
            mui.toast('批次内容只能为数字')
            check = false
            return false
          }
          if (this.list[index].fund_details_money == '') {
            mui.toast('金额不能为空')
            check = false
            return false
          }
          if (!nuber_two.test(this.list[index].fund_details_money)) {
            mui.toast('金额只能为数字')
            check = false
            return false
          }
        }
        // 判断是否总金额大于等于 金额的总和
        var money_all = 0
        for (var index in this.list) {
          var n = this.list[index].fund_details_money
          money_all += parseFloat(n)
        }
        if (this.fund_money >= money_all) {

        } else {
          mui.toast('金额的和不能大于总金额')
          check = false
          return false
        }
        // 阶段金额相加必须跟总金额相等否则无法通过
        var all_money = 0
        for (var index in this.list) {
          all_money += parseFloat(this.list[index].fund_details_money)
        }
        if (this.fund_money != all_money) {
          mui.toast('总金额与阶段金额总和不同')
          check = false
          return false
        }
      } else if (this.fund_type === '周期付款') {
        var qi = document.getElementById('qi').value
        var yue = document.getElementById('yue').value
        var data_huan = document.getElementById('data_huan').value
        // 还款时间
        if (data_huan == '') {
          mui.toast('还款时间不能为空')
          check = false
          return false
        }
        //    还款周期
        if (yue == '') {
          mui.toast('还款周期不能为空')
          check = false
          return false
        }
        //    还款期数
        if (qi == '') {
          mui.toast('还款期数不能为空')
          check = false
          return false
        }
        if (!nuber.test(qi)) {
          mui.toast('还款期数只能填入数字')
          check = false
          return false
        }
      }
      var data_huan = new Date(this.data_huan)
      var zhouqi = this.yue
      var qishu = this.qi
      var qishu_money = this.fund_money / qishu
      var date = ''
      if (this.fund_type === '周期付款') {
        this.list = []
        if (zhouqi === '按月') {
          for (var i = 0; i <= qishu - 1; i++) {
            var m = data_huan.getMonth() + 1 + i
            date = data_huan.getFullYear() + '-' + m + '-' + data_huan.getDate()
            var a = { 'fund_details_date': date, 'fund_details_money': qishu_money.toString(), 'fund_details_batch': i.toString(), 'fund_details_text': '' }
            this.list.push(a)
          }
        } else if (zhouqi === '按年') {
          for (var i = 0; i <= qishu - 1; i++) {
            var y = data_huan.getFullYear() + i
            var m = data_huan.getMonth() + 1
            date = y + '-' + m + '-' + data_huan.getDate()
            var a = { 'fund_details_date': date, 'fund_details_money': qishu_money.toString(), 'fund_details_batch': i.toString(), 'fund_details_text': '' }
            this.list.push(a)
          }
        } else if (zhouqi === '按周') {
          for (var i = 0; i <= qishu - 1; i++) {
            var m = data_huan.getMonth() + 1
            data_huan.setDate(data_huan.getDate() + 7)
            date = data_huan.getFullYear() + '-' + m + '-' + data_huan.getDate()
            var a = { 'fund_details_date': date, 'fund_details_money': qishu_money.toString(), 'fund_details_batch': i.toString(), 'fund_details_text': '' }
            this.list.push(a)
          }
        }
      }
      var add = ''
      var list_customer = ''
      var fund_debtor_id = ''
      var fund_details_type = '' // 情况
      if (this.fund_nameo === '个人') {
        add = this.list_fund_namea
        fund_debtor_id += this.fund_debtor_id
        list_customer += '0'
      } else if (this.fund_nameo === '公司') {
        add = this.all_rate
        if (this.customer_name === undefined) {
          list_customer += '0'
        } else {
          list_customer += this.customer_name_id
        }
        if (this.fund_debtor === undefined) {
          fund_debtor_id += '0'
        } else {
          fund_debtor_id += this.fund_debtor_id
        }
      }
      // 情况
      if (this.whether === '是') {
        fund_details_type += '0'
      } else {
        fund_details_type += '1'
      }
      this.imgUrl_loading = true
      this.axios({
        method: 'POST',
        url: '/fund/Add_Fund',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        data: {
          listFund: JSON.stringify(this.list),
          fund_customer_id: list_customer,
          fund_workyard_pact_id: 1,
          fund_name: add,
          fund_money: this.fund_money,
          fund_person: fund_debtor_id,
          fund_text: this.fund_text,
          fund_type: this.fund_type,
          fund_details_level: this.level,
          fund_details_type: fund_details_type
        },
        // 把json格式编码转为x-www-form-urlencoded
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
      }).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data, function () {
            then.$router.push({ path: 'money_receivable' })
          })
        }
      })
    }
  },
  created () {
    //工地
    this.siteData()
    //相关人
    this.person_all()
    /* table */
    this.axios.get('/fund/Select_three_fund_name' + '?fund_type=1').then(res => {
      this.list_fund_name_type = res.data.fund_name_type
    })
  },
}
</script>

<style scoped>
  @import "../css/public.css";
  select,input::-webkit-input-placeholder{color: #6e6e6e}
  /deep/input::-webkit-input-placeholder{color: #818181}
  .selectBlack{color: black}
.mui-input-group {background-color: transparent}
/*单选框*/
.input-radio{display: flex;}
.input-radio div{flex: 1;}
.input-radio div label{white-space: nowrap;}
.input-radio div:nth-child(3){padding-right: 20px;}
/*table表格*/
select{background-color: transparent;font-size: 15px!important;}
/*table{margin-bottom: 16px;width: 100%}
table tr td input[type=date]{width: 129px}
.table-all tr th{line-height: 33px;background-color: #DADADA;text-align: left;padding: 0 16px;}
.table-all tr{line-height: 30px;font-size: 14px;}*/
  .tables{width: 100%;font-size: 15px;text-align: left}
  .tables th{background-color: #dadada;line-height: 29px}
  .tables th:nth-child(1){width: 30%}
  .tables th:nth-child(2){width: 13%}
  .tables th:nth-child(3){width: 20%}
  .tables th:nth-child(4){width: 37%}
  /deep/.el-date-editor.el-input, .el-date-editor.el-input__inner{width: 100%}
  /deep/.el-input__icon{display: none}
#btn-form,#btn-del{text-align: right;padding-right: 20px;color: #00679b;font-weight: bold}
.data-time{display: none;}
  /*工地选择*/
  .mui-table-view{position: absolute;z-index: 1000;top: 38px;left: 0;right: 0;height: 345px;overflow: auto;font-size: 15px;line-height: 15px}
  .mui-input-row{overflow: inherit;}
/*按钮*/
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 16px!important;}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 45px;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*    x */
.mui-input-row .mui-input-clear~.mui-icon-clear, .mui-input-row .mui-input-password~.mui-icon-eye, .mui-input-row .mui-input-speech~.mui-icon-speech{display: none!important;}

</style>
