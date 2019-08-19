<template>
  <div class="After_sales_entry">
    <!--头部-->
    <header class="mui-bar mui-bar-nav header-top">
      <router-link :to="{name:'money_sale'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">售后录入</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户录入-->
    <div class="customer">
      <h2>售后录入</h2>
      <p>/Customer input</p>
    </div>
    <div class="mui-content app">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>工地名称</label>
          <input type="text" placeholder="请选择工地名称" v-model="Customer_name" :class="{classGary:Customer_name==='',classBlack: Customer_name!==''}" @click="site">
        </div>
        <div class="mui-input-row">
          <label>负责人</label>
          <input type="text" class="mui-input-clear" placeholder="请输入联系人" v-model="AfterSale_person">
        </div>
        <div class="mui-input-row">
          <label>分类</label>
          <select name="" v-model="options" :class="{classGary:options==='',classBlack: options!==''}">
            <option value="">请选择</option>
            <option v-for="item in listOptions" :value="item.text">{{item.text}}</option>
          </select>
        </div>
<!--        责任人下选-->
        <!--<table class="all_process">
          <tr>
            <th><span>分类</span></th>
            <th><span>问题描述</span></th>
            <th><span>责任人</span></th>
            <th><span>进程</span></th>
            <th><span>预计完成</span></th>
            <th><span>报修时间</span></th>
            <th><span>甲方</span></th>
            <th><span>乙方</span></th>
            <th><span>费用</span></th>
            <th><span>处理方法</span></th>
          </tr>
          <tr v-for="item in listInput">
            <td>
              <span>
                <select name="" v-model="item.options" :class="{classGary:item.options==='',classBlack: item.options!==''}">
                  <option value="">请选择</option>
                  <option v-for="items in listOptions" :value="items.text">{{items.text}}</option>
                </select>
              </span>
            </td>
            <td><span><input type="text" v-model="item.text" placeholder="请输入问题"></span></td>
            <td><span><input type="text" v-model="item.people" placeholder="请输入负责人"></span></td>
            <td><span><input type="text" v-model="item.process" placeholder="请输入进程"></span></td>
            <td><span><el-date-picker v-model="item.expected" type="date" placeholder="请输入预计完成"></el-date-picker></span></td>
            <td><span><el-date-picker v-model="item.dataTime" type="date" placeholder="请输入报修时间"></el-date-picker></span></td>
            <td><span><input type="text" v-model="item.partyA" placeholder="请输入甲方"></span></td>
            <td><span><input type="text" v-model="item.partyB" placeholder="请输入乙方"></span></td>
            <td><span><input type="text" v-model="item.cost" placeholder="请输入费用"></span></td>
            <td><span><input type="text" v-model="item.method" placeholder="请输入处理方法"></span></td>
          </tr>
        </table>
        <div class="mui-input-row button-del">
          <span class="increase" @click="del(user)"><i class="el-icon-minus"></i></span>
          <span class="increase" @click="increase"><i class="el-icon-plus"></i></span>
        </div>-->
        <div class="mui-input-row money-input">
          <label>甲方金额</label>
          <input type="text" class="mui-input-clear" placeholder="￥" v-model="Customer_DecorateJia">
          <span class="span-money">{{Customer_DecorateJia | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row money-input">
          <label>乙方金额</label>
          <input type="text" class="mui-input-clear" placeholder="￥" v-model="Customer_DecorateYi">
          <span class="span-money">{{Customer_DecorateYi | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row money-input">
          <label>工人金额</label>
          <input type="text" class="mui-input-clear" placeholder="￥" v-model="worker">
          <span class="span-money">{{worker | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row money-input">
          <label>总金额</label>
          <div class="allmoeny">￥{{all_money | MoneyFormat}}</div>
        </div>
        <div class="mui-input-row">
          <label>质保截止</label>
          <input type="date" v-model="Customer_Date">
        </div>
        <div class="mui-input-row">
          <label>报修时间</label>
          <input type="date" v-model="Customer_baoxiushijian">
        </div>
        <div class="mui-input-row">
          <label>状态</label>
          <input type="text" class="mui-input-clear" v-model="statusd" placeholder="状态" disabled="disabled">
          <!--<select name="">
            <option value="">请选择</option>
            <option v-for="item in listOptions" :value="item.text">{{item.text}}</option>
          </select>-->
        </div>
        <div class="mui-input-row">
          <label>预计完成</label>
          <input type="date" class="mui-input-clear" v-model="Customer_yujiwanchengshijian">
        </div>
        <div class="mui-input-row form-textarea row-textarea">
          <label>问题描述</label>
          <textarea name="Customer_demand" rows="" cols="" v-model="Customer_demand" id="Customer_demand" placeholder="请填写问题及解决办法"></textarea>
        </div>
          <div class="imgUrl">图片添加</div>
        <!--<el-upload
          class="avatar-uploader"
          action="https://formattingclub.com/YiNuoLogin/AfterSale/uploadImg"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>-->
       <el-upload action="https://formattingclub.com/YiNuoLogin/AfterSale/uploadImg"
                  ref="upload"
                  multiple
                  list-type="picture-card"
                  :file-list="fileLists"
                  :on-preview="handlePictureCardPreview"
                  :on-success="handleAvatarSuccess"
                  :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" v-if="imgIf">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </form>
      <div class="mui-input-row form-btn">
        <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'After_sales_entry',
    data () {
      return {
        imgUrl_loading:false,
        imgIf:true,
        fileLists: [],
        Customer_name: '', // 项目名称
        Customer_name_id:'',//项目id
        options:'',
        /*listInput:[
          {options:'',text:'',people:'',process:'',expected:'',dataTime:'',partyA:'',partyB:'',cost:'',method:''}
        ],*/
        // user:'',
        ImgBase:'',
        data: {
          multiple:true,
          formDate:""
        },
        projet:'',
        SelectStylist:'',
        worker:0,//工人
        Customer_linkman: '', // 联系人
        Customer_connect: '', // 联系方式
        Customer_stylist: '', // 责任人
        Customer_type: '', // 所属类型
        AfterSale_person:'',//负责人
        Customer_DecorateJia:0,//甲方预算
        Customer_DecorateYi:0,//一方预算
        // Customer_baozhiqi:'',//保质期
        Customer_Date:'',//项目时间
        Customer_baoxiushijian:'',
        Customer_yujiwanchengshijian:'',//
        Customer_form: '工装', // 家装或工装'=
        Customer_formList: [
          { value: '家装' },
          { value: '工装' }
        ],
        /*listOptions:[
          {text:'已过保'},
          {text:'债保'},
        ],*/
        Customer_demand: '',// 客户需求
        dialogImageUrl: '',
        dialogVisible: false,
        listOptions:[
          {text:'防水'},
          {text:'水电'},
          {text:'木工'},
          {text:'瓦工'},
          {text:'油漆'},
          {text:'墙漆'},
          {text:'杂工'},
          {text:'安装'},
          {text:'材料'},
          {text:'原始结构'},
          {text:'人为损坏'},
          {text:'磨损'},
        ],
        /*list_no:[
          {text:'勘察'},
          {text:'维修中'},
          {text:'维修完毕'},
          {text:'勘察'},
        ],*/
      }
    },
    created () {
      this.Customer_name = window.test
      this.Customer_name_id = window.test_id
    },
    computed:{
      //总金额
      all_money() {
        /*if (this.Customer_DecorateJia != '' && this.Customer_DecorateYi != '' && this.worker) {
          var a = 0
          a += parseFloat(this.Customer_DecorateJia) + parseFloat(this.Customer_DecorateYi) + parseFloat(this.worker)
          return a
        }else if (this.Customer_DecorateJia != '' && this.Customer_DecorateYi != '') {
          var b = 0
          b += parseFloat(this.Customer_DecorateJia) + parseFloat(this.Customer_DecorateYi)
          return b
        }else if (this.Customer_DecorateJia != '' && this.worker != '') {
          var c = 0
          c += parseFloat(this.Customer_DecorateJia) + parseFloat(this.worker)
          return c
        }else if (this.Customer_DecorateYi != '' && this.worker != '') {
          var d = 0
          d += parseFloat(this.Customer_DecorateYi) + parseFloat(this.worker)
          return d
        }*/
        var a = parseFloat(this.Customer_DecorateJia) + parseFloat(this.Customer_DecorateYi) + parseFloat(this.worker)
        return a
      },
    //  状态
      statusd(){
        //报修时见大于质保时间则在状态里面自动添加过保 小于等于债保
        if (this.Customer_Date != '' && this.Customer_baoxiushijian != '') {
          //报修时间
            var dates = new Date(this.Customer_baoxiushijian)
            var ds = dates.getFullYear()
            var ys = dates.getMonth() + 1
            var ms = dates.getDate()
            var dds = ds + '-' + ys + '-' + ms
          //质保时间
            var date = new Date(this.Customer_Date)
            var d = date.getFullYear()
            var y = date.getMonth() + 1
            var m = date.getDate()
            var dd = d + '-' + y + '-' + m
          if (dds > dd) {
            return '已过保'
          } else {
            return '在保'
          }
        }
      }
    },
    methods: {
      //工地
      site () {
        var expenditure = 'expenditure_after'
        this.$router.push({ path: 'siteList', })
        window.expenditure = expenditure
      },
      //base64图片转换
      //图片上传
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(response, file) {
        this.ImgBase = response
        console.log(response)
      },
      leng(){
        var a = true
        mui.toast('最多3张图片')
        a = false
        return false
      },
      //添加
      go () {
        var _this = this
        var check = true
        var pattern = /^1[0-9]{10}$/ // 验证手机号
        var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
        var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
        var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im
        var nuber = /^\d+(\.\d+)?$/ // 验证数字
        //项目名称
        /*if (this.Customer_name == '') {
          mui.toast('项目名称不能为空')
          check = false
          return false
        }
        //甲方与乙方预算
        if (this.Customer_DecorateJia == '' || this.Customer_DecorateYi == '') {
          mui.toast('甲方或乙方不能为空')
          check = false
          return false
        }
        if (!nuber.test(this.Customer_DecorateJia) || !nuber.test(this.Customer_DecorateYi)) {
          mui.toast('甲方或乙方格式不正确')
          check = false
          return false
        }
        //报修时间
        if (this.Customer_baoxiushijian == '') {
          mui.toast('报修时间不能为空')
          check = false
          return false
        }
        //预计完成
        if (this.Customer_yujiwanchengshijian == '') {
          mui.toast('预计完成时间不能为空')
          check = false
          return false
        }*/
        // this.imgUrl_loading = true
        /* 录入数据 */
        var add = '?Customer_id=' + this.Customer_name_id + '&AfterSale_day=' + this.options + '&AfterSale_jia=' + this.Customer_DecorateJia + '&AfterSale_yi=' + this.Customer_DecorateYi +
          '&AfterSale_worker=' + this.worker + '&AfterSale_date=' + this.Customer_baoxiushijian + '&AfterSale_date_close=' + this.Customer_Date+
          '&AfterSale_pre_date='+this.Customer_yujiwanchengshijian+'&AfterSale_text='+this.Customer_demand+'&AfterSale_img='+this.ImgBase+'&AfterSale_state=0'+'&AfterSale_person='+this.AfterSale_person
        this.axios.post('/AfterSale/Add_AfterSale' + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
          mui.alert(res.data.data, function () {
            _this.$router.push('money_sale')
          })
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../css/public.css";
  /*表单*/
  /*    x */
  .mui-icon-clear{display: none!important;}
  form div select{font-size: 15px!important;}
  .mui-input-row label{width: 30%;}
  .mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{width: 70%;}
  .radio-form{display: flex;}
  .go-label label{width: 50%;}
  .go-label input{width: 48%!important;}
  /*表格*/
  .all_process{width: 100%;display: block;overflow: auto;white-space: nowrap;font-size: 14px;padding: 10px 0}
  .all_process tr td span select{margin-bottom: 0;padding-bottom: 8px}
  .all_process tr th{padding: 0 16px;text-align: left;}
  .all_process tr th:nth-child(1){min-width: 100px}
  .all_process tr th:nth-child(2),.all_process tr th:nth-child(10){min-width: 300px}
  .all_process tr th:nth-child(3),.all_process tr th:nth-child(4){min-width: 100px}
  .all_process tr th:nth-child(5),.all_process tr th:nth-child(6){min-width: 126px}
  .all_process tr th:nth-child(7),.all_process tr th:nth-child(8),.all_process tr th:nth-child(9){min-width: 112px}
  .all_process tr td span input{font-size: 15px;padding: 0 17px}
  .increase{float:right;padding-right: 6px;font-weight: bold;color: #2979b4;font-size: 15px;letter-spacing: 5px}
  .button-del{padding: 7px 0}
  /deep/.el-date-editor.el-input, .el-date-editor.el-input__inner{padding: 0 17px!important;width: 128px}
  /deep/.el-icon-date:before{content: ''}
  /deep/.el-icon-plus:before{font-size: 26px}
  /deep/.el-icon-minus:before{font-size: 25px;position: relative;top: 1px}
  /deep/.el-upload--picture-card{border: 1px solid #dadada!important;background-color: transparent!important;width: 108px;height: 108px;line-height: 118px;margin-left: 9px}
  /deep/.el-upload-list--picture-card .el-upload-list__item{width: 108px;height: 108px;margin-left: 9px}
  .allmoeny{width: 70%;line-height: 37px;font-size: 15px}
  .imgUrl{font-size: 15px;line-height: 42px;padding-left: 13px}
  .classGary{color: gray}
  .classBlack{color: black}
  /*平方米*/
  .square{display: flex;}
  .square input{width: 55%!important;}
  .square div{line-height: 38px;border-left: 1px solid #DADADA;width: 15%;padding-left: 19px;font-weight: 600}
  .mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 16px}
  .mui-input-row select{background-color: #efeff4;}
  .mui-select{flex: 2;padding-left: 25px}
  .mui-chech{white-space: normal}
  .mui-chech label{width: 21%;}
  .mui-heck{position: relative;right: 9px;}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  /*所属类型*/
  .money-input{display: flex;}
  .money-input label{flex: 1;width: 30%}
  .money-input input{flex: 1.6;width: 40%}
  .span-money{display: block;line-height: 43px;font-size: 13px;width: 30%;}
  /*按钮*/
  .mui-radio{overflow: visible}
  .mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
  .mui-select:before{display: none}
  .mui-input-group:after,.mui-input-row:nth-last-child(1):after{background-color: transparent;}
</style>
