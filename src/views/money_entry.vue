<template>
    <div class="money_entry">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_receivable'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">应收款录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
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
            <div class="mui-input-row">
                <label>类别选择</label>
              <select name="" v-model="fund_nameo" @change="fund_namesa(fund_nameo)">
                <option value="">请选择</option>
                <option v-for="item in list_fund_names" :value="item.fund_names">{{item.fund_names}}</option>
              </select>
            </div>
          <div class="mui-input-row">
            <label>类别详情</label>
            <select name="" v-model="list_fund_namea" @change="list_fund_nameas(list_fund_namea)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_name" :value="item.fund_name">{{item.fund_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>项目名称</label>
            <select name="" v-model="customer_name">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in projet" :value="item.customer_name">{{item.customer_name}}</option>
            </select>
          </div>
          <div class="mui-input-row" ref="no">
            <label>债务人</label>
            <input type="text" class="mui-input-clear" placeholder="请输入债务人" v-model="fund_debtor">
          </div>
          <div class="mui-input-row">
            <label>总金额</label>
            <input type="text" class="mui-input-clear" placeholder="请输入总金额" v-model="fund_money">
          </div>
          <div class="mui-input-row">
            <label>经手人</label>
            <input type="text" class="mui-input-clear" placeholder="请输入经手人" v-model="fund_person">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" placeholder="备注" v-model="fund_text">
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
          <table border="0" class="table-all" id="table">
            <tr>
              <th>日期</th>
              <th>金额</th>
              <th>批次</th>
              <th>备注</th>
            </tr>
            <tr v-for="item in list">
              <td><input type="date" id="fund_details_date" v-model="item.fund_details_date"></td>
              <td><input type="text" id="fund_details_money" v-model="item.fund_details_money" placeholder="金额"></td>
              <td><input type="text" id="fund_details_batch" v-model="item.fund_details_batch" placeholder="批次"></td>
              <td><input type="text" id="fund_details_text" v-model="item.fund_details_text" placeholder="备注"></td>
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
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'money_entry',
  data () {
    return {
      fund_type:'阶段付款',
      fund_nameo:'',
      fund_debtor:'',
      fund_money:'',
      fund_person:'',
      fund_text:'',
      listTable:'',
      list_fund_names:'',
      list_fund_namea:'',
      list_fund_name:'',
      customer_name:'',
      list_customer_name:'',
      data_huan:'',
      projet:'',
      yue:'',
      qi:'',
      list: [
        { 'fund_details_date': '', 'fund_details_money': '', 'fund_details_batch': '', 'fund_details_text': '' },
        { 'fund_details_date': '', 'fund_details_money': '', 'fund_details_batch': '', 'fund_details_text': '' }
      ]
    }
  },
  created () {
    /*项目名称*/
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer').then(res=>{
      this.projet = res.data
    })
    /* table */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1').then(res => {
      this.listTable = res.data.list_fund
      this.list_fund_names = res.data.list_fund_names
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
  },
  methods: {
    // 类别选择
    fund_namesa (id) {
      this.fund_nameso = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1&fund_names=' + this.fund_nameso).then(res => {
        this.listTable = res.data.list_fund
        this.list_fund_name = res.data.list_fund_name
        if (this.fund_nameso === '工程支出') {
          this.$refs['no'].style.display = 'none'
        }else{
          this.$refs['no'].style.display = 'block'
        }
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    // 类别详情
    list_fund_nameas (id) {
      this.fund_name = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1&fund_names=' + this.fund_nameso + '&fund_name=' + id).then(res => {
        this.listTable = res.data.list_fund
        this.list_fund_name = res.data.list_fund_name
        this.list_customer_name = res.data.list_customer_name
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    stage_one () {
      var otable = document.getElementById('table')
      var data_time = document.getElementById('data-time')
      var btn_form = document.getElementById('btn-form')
      btn_form.style.display = 'block'
      otable.style.display = 'block'
      data_time.style.display = 'none'
    },
    week () {
      var otable = document.getElementById('table')
      var data_time = document.getElementById('data-time')
      var btn_form = document.getElementById('btn-form')
      otable.style.display = 'none'
      btn_form.style.display = 'none'
      data_time.style.display = 'block'
    },
    formAdd(){
      var s = { fund_details_date: '', fund_details_money: '', fund_details_batch: '', fund_details_text: '' }
      this.list.push(s)
    },
    add() {
      var then = this
      var nuber = /^[0-9]*$/ // 验证数字
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var check = true

      //  类别选择
      if (this.fund_nameo == '') {
        mui.toast('类别选择不能为空')
        check = false
        return false
      }
      //类别详情
      if (this.list_fund_namea == '') {
        mui.toast('类别详情不能为空')
        check = false
        return false
      }
      //  项目名称
      if (this.customer_name == '') {
        mui.toast('项目名称不能为空')
        check = false
        return false
      }
      if (this.$refs['no'].style.display === 'block') {
        // 债权人
        if (this.fund_debtor == '') {
          mui.toast('债权人不能为空')
          check = false
          return false
        }
        if (!nameReg.test(this.fund_debtor)) {
          mui.toast('债权人名称格式错误')
          check = false
          return false
        }
      }
      // 总金额
      if (this.fund_money == '') {
        mui.toast('总金额不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.fund_money)) {
        mui.toast('总金额只能填入数字')
        check = false
        return false
      }
      // 经手人
      if (this.fund_person == '') {
        mui.toast('经手人不能为空')
        check = false
        return false
      }
      if (!nameReg.test(this.fund_person)) {
        mui.toast('经手人格式错误')
        check = false
        return false
      }
      // 备注
      if (this.fund_text == '') {
        mui.toast('备注不能为空')
        check = false
        return false
      }
      // 判断阶段付款、周期付款
      if (this.fund_type === '阶段付款') {
        var data_money = document.getElementById('fund_details_money').value // 金额
        var data_text = document.getElementById('fund_details_batch').value // 批次
        // 金额
        if (data_money == '') {
          mui.toast('金额不能为空')
          check = false
          return false
        }
        if (!nuber.test(data_money)) {
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
        // 判断是否总金额大于等于 金额的总和
        var money_all = 0
        for (var index in this.list) {
          var n = this.list[index].fund_details_money
          money_all += parseInt(n)
        }
        if (this.fund_money >= money_all) {

        } else {
          mui.toast('金额的和不能大于总金额')
          check = false
          return false
        }
        //阶段金额相加必须跟总金额相等否则无法通过
        var all_money = 0
        for (var index in this.list) {
           all_money += parseInt(this.list[index].fund_details_money)
        }
        if (this.fund_money != all_money) {
          mui.alert('总金额与阶段金额总和不同')
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
      var date = '';
      if (this.fund_type === '周期付款') {
        this.list = []
        if (zhouqi === '按月') {
          for (var i = 1; i <= qishu; i++) {
            var m = data_huan.getMonth() + 1 + i
            date = data_huan.getFullYear() + '-' + m + '-' + data_huan.getDate()
            var a = {
              'fund_details_date': date,
              'fund_details_money': qishu_money.toString(),
              'fund_details_batch': i.toString(),
              'fund_details_text': ''
            }
            this.list.push(a)
          }
        } else if (zhouqi === '按年') {
          for (var i = 1; i <= qishu; i++) {
            var y = data_huan.getFullYear() + i
            date = y + '-' + data_huan.getMonth() + '-' + data_huan.getDate()
            var a = {
              'fund_details_date': date,
              'fund_details_money': qishu_money.toString(),
              'fund_details_batch': i.toString(),
              'fund_details_text': ''
            }
            this.list.push(a)
          }
        } else if (zhouqi === '按周') {
          for (var i = 1; i <= qishu; i++) {
            var m = data_huan.getMonth() + 1
            data_huan.setDate(data_huan.getDate() + 7)
            date = data_huan.getFullYear() + '-' + m + '-' + data_huan.getDate()
            var a = {
              'fund_details_date': date,
              'fund_details_money': qishu_money.toString(),
              'fund_details_batch': i.toString(),
              'fund_details_text': ''
            }
            this.list.push(a)
          }
        }
      }
      this.axios({
        method: 'POST',
        url: 'https://formattingclub.com/YiNuoLogin/fund/Add_Fund',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        data: {
          listFund: JSON.stringify(this.list),
          fund_customer_id: this.customer_name,
          fund_workyard_pact_id: 1,
          fund_debtor: this.fund_debtor,
          fund_name: this.fund_name,
          fund_money: this.fund_money,
          fund_person: this.fund_person,
          fund_text: this.fund_text,
          fund_type: this.fund_type
        },
        //把json格式编码转为x-www-form-urlencoded
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(res => {
        mui.alert(res.data, function () {
          then.$router.push({ path: 'money_receivable' })
        })
      })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
.mui-input-group {background-color: transparent}
/*单选框*/
.input-radio{display: flex;}
.input-radio div{flex: 1;}
.input-radio div label{white-space: nowrap;}
.input-radio div:nth-child(3){padding-right: 20px;}
/*table表格*/
select{background-color: transparent;font-size: 15px!important;}
table{margin-bottom: 16px;width: 100%}
table tr td input[type=date]{width: 124px}
.table-all tr th{line-height: 33px;background-color: #DADADA;text-align: left;padding: 0 16px;}
.table-all tr{line-height: 30px;font-size: 14px;}
#btn-form{text-align: right;padding-right: 20px;color: #00679b;font-weight: bold}
.data-time{display: none;}
/*按钮*/
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 16px!important;}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 45px;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*    x */
.mui-input-row .mui-input-clear~.mui-icon-clear, .mui-input-row .mui-input-password~.mui-icon-eye, .mui-input-row .mui-input-speech~.mui-icon-speech{display: none!important;}
</style>
