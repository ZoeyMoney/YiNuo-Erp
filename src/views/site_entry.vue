<template>
    <div class="site_entry">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'site_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>工地录入</h2>
          <p>/Site input</p>
        </div>
      </div>
      <!--表单-->
      <div class="mui-content app">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>项目名称</label>
                <select name="">
                  <option value="">123</option>
                </select>
              </div>
            <div class="mui-input-row">
              <label>联系人</label>
              <input type="text" class="mui-input-clear" placeholder="input">
            </div>
            <div class="mui-input-row">
              <label>联系方式</label>
              <input type="text" class="mui-input-clear" placeholder="input">
            </div>
            <div class="mui-input-row">
              <label>设计师</label>
              <select name="">
                <option value="">123</option>
              </select>
            </div>
            <div class="mui-input-row">
              <label>装修面积</label>
              <input type="text" class="mui-input-clear" placeholder="input">
            </div>
            <div class="mui-input-row">
              <label>推荐人</label>
              <input type="text" class="mui-input-clear" placeholder="input">
            </div>
            <div class="mui-input-row radio-form">
              <div class="mui-input-row mui-radio mui-left go-label">
                <label>所属类型</label>
                <input type="text" class="mui-input-clear" name="Customer_type" id="" placeholder="所属类型">
              </div>
              <div class="mui-input-row mui-radio mui-left mui-chech" name="">
                <label>家装</label>
                <input name="Customer_form" type="radio" value="家装">
              </div>
              <div class="mui-input-row mui-radio mui-left mui-heck">
                <label>工装</label>
                <input name="Customer_form" type="radio" value="工装" checked="checked">
              </div>
            </div>
            <div class="mui-input-row form-textarea row-textarea">
              <label>客户需求</label>
              <textarea name="Customer_form" rows="" cols="" placeholder="请填写需求"></textarea>
            </div>
          </form>
        <!--第二个form-->
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>项目经理</label>
                <input type="text" class="mui-input-clear" placeholder="input">
            </div>
          <div class="mui-input-row">
            <label>工程监理</label>
            <select name="">
              <option value="">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>装修标准</label>
            <select name="">
              <option value="">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>项目备注</label>
            <input type="text" class="mui-input-clear" placeholder="input">
          </div>
        </form>
        <!--第三个form-->
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>合同日期</label>
                <input type="date" class="mui-input-clear" placeholder="input">
            </div>
          <div class="mui-input-row">
            <label>施工日期</label>
            <input type="date" class="mui-input-clear" placeholder="input">
          </div>
        </form>
        <!--第四个form-->
        <form class="mui-input-group">
          <table border="0" cellpadding="1" cellspacing="1">
            <tr>
                <th colspan="1.5">合同金额</th>
                <th colspan="1.5">设计费</th>
            </tr>
            <tr>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
          </table>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'site_entry',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped>
  @import "../css/public.css";
  form select{font-size: 15px!important;}

  .mui-input-group {background-color: transparent;margin-bottom: 10px;}
  .mui-input-row select{background-color: #efeff4;}

  /*单选系列*/
  .radio-form{display: flex;}
  .go-label label{width: 43%;}
  .go-label input{width: 48%!important;}
  .mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 16px}
  .mui-chech{white-space: normal}
  .mui-chech label{width: 21%;}
  .mui-heck{position: relative;right: 9px;}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  .mui-radio{overflow: visible}
  /*table*/
  form table{width: 100%;}
  form table tr{font-size: 15px;}
  form table td{line-height: 31px;width: 11%;}
  form table tr td input{padding: 0!important;}
  form table tr th{background: #DADADA;line-height: 37px;}
  form table tr th:nth-child(2){text-align: left;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
