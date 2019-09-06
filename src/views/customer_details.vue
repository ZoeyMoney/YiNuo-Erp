<template>
    <div class="customer_details">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'customer_statistics'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户详情</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>客户详细</h2>
          <p>/Client follow-up</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right left-mar" href="#">
                <div class="mui-input-row">
                  <label>项目名称</label>
                  <div>{{customer_name}}</div>
                </div>
              </a>
              <div class="mui-collapse-content">
                <div class="mui-input-row">
                  <label>项目名称</label>
                  <input type="text" class="mui-input-clear" v-model="customer_name" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>联系人</label>
                  <input type="text" class="mui-input-clear" v-model="customer_linkman" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>联系方式</label>
                  <input type="text" class="mui-input-clear" v-model="customer_connect" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>设计师</label>
                  <select name="" v-model="customer_stylist">
                    <option value="">请选择</option>
                    <option v-for="item in listName" :value="item.fund_person_id">{{item.fund_person}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>装修面积</label>
                  <input type="text" class="mui-input-clear" v-model="customer_Decorate" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>推荐人</label>
                  <input type="text" class="mui-input-clear" v-model="customer_referrer" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>项目预算</label>
                  <input type="text" class="mui-input-clear" v-model="customer_budget" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>客户等级</label>
                  <select name="" v-model="Customer_grade" :class="{classGray:Customer_grade =='',classBlack: Customer_grade!=''}">
                    <option value="">请选择</option>
                    <option v-for="item in listLevel" :value="item.text">{{item.text}}</option>
                  </select>
                </div>
                <div class="row-left">
                  <div class="row-left-on">
                    <label>所属类型</label>
                    <select name="" v-model="Customer_type" :class="{classGray:Customer_type =='',classBlack: Customer_type!=''}">
                      <option value="">请选择</option>
                      <option v-for="item in list_type" :value="item.text">{{item.text}}</option>
                    </select>
                  </div>
                  <div class="radio-left">
                    <div class="mui-input-row mui-radio mui-left" v-for="item in listRadio">
                      <label>{{item.text}}</label>
                      <input name="radio1" type="radio" v-model="listRadio_all" :value="item.text">
                    </div>
                  </div>
                </div>
                <div class="mui-input-row all-row textreap">
                  <label>客户需求</label>
<!--                  <input type="text" v-model="customer_demand">-->
                  <textarea name="Customer_demand" rows="" cols="" v-model="customer_demand"></textarea>
                </div>
                <div class="mui-input-row update-btn">
                  <div>
                    <button type="button" class="mui-btn mui-btn-black" @click="UpdateCustomer">信息修改</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </form>
        <form class="mui-input-group form-pad box-h4">
          <div class="box3 ">
            <div>
              <h4>添加记录</h4>
            </div>
            <div class="mui-input-row go-nai">
              <label>跟进人员</label>
              <select name="" v-model="follow_person" :class="{classGray:follow_person=='',classBlack:follow_person !=''}">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in profetName" :value="item.fund_person_id">{{item.fund_person}}</option>
              </select>
            </div>
            <div class="mui-input-row go-nai">
              <label>下次跟进</label>
<!--              <input type="date" v-model="nexDate">-->
              <el-date-picker v-model="nexDate" type="date" placeholder="选择日期" @focus="forbid"></el-date-picker>
            </div>
            <div class="mui-input-row go-nai">
              <label>当前阶段</label>
              <select name="" v-model="stage_name" :class="{classGray:stage_name=='',classBlack:stage_name!=''}">
                <option value="">请选择</option>
                <option v-for="item in vstage_name">{{item.stage_name}}</option>
              </select>
            </div>
          </div>
          <div class="box">
            <div class="row-go">
              <div class="mui-input-row row-textarea">
                <textarea name="" rows="" cols="" placeholder="请输入跟进记录" v-model="list_text"></textarea>
              </div>
              <div class="mui-input-row update-img">
                <label>文件上传</label>
                <el-upload
                  action="https://formattingclub.com/YiNuoLogin/AfterSale/uploadImg"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-success="handleAvatarSuccess"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
              <div class="go-add">
                <button type="button" @click="add">保存记录</button>
              </div>
            </div>
          </div>
        </form>
        <!--<form v-show="commitOn">
          <el-input v-model="inputTxt" :placeholder="textInput"></el-input>
          <div class="go-add">
            <button type="button" @click="comment">发送回复</button>
          </div>
        </form>-->
        <form class="mui-input-group form-pad box-h4">
          <h4>跟进记录</h4>
          <div class="box"  v-for="(item,index) in stage" :key="index">
            <div class="mui-input-row jin">
              <div class="jin-date">
                <p>{{item.follow_date | data}}</p>
              </div>
              <div class="gen">
                {{item.fund_person}}
              </div>
              <div class="gen">
                {{item.follow_stage}}
              </div>
            </div>
            <div class="row-go">
              <div class="mui-input-row row-textarea">
                <div class="text-follow">{{item.follow_text}}</div>
                <div class="commint-text">
                <div v-for="(items,two) in searchInput"
                     v-if="item.follow_id == items.comment_follow_id"
                     @click.stop="fund_person_idClick(item.follow_id,item.fund_person,items.user_number_name)">
                  {{items.user_number_name}}：{{items.comment_text}}
                </div>
                </div>
                <div class="input-commit" v-show="commitOn" v-for="itemx in listInput">
                  <textarea placeholder="请输入评论" @click="fllow_idClick(item.follow_id)" v-model="inputTxt[index]"></textarea>
<!--                  <button type="button" @click="comment(index)">评论</button>-->
                    <button type="button" class="mui-btn mui-btn-black commit-button" @click="comment(index)">评论</button>
                </div>
                <div class="div-img">
                  <img v-show="item.imgsrc" :src="getImgUrl(item.imgsrc)" alt="lodingImg">
                </div>
              </div>
            </div>
          </div>
        </form>
          <div class="form-botton">
            <button type="button" class="mui-btn mui-btn-black" @click="goadd">开工</button>
            <button type="button" class="mui-btn mui-btn-black" @click="dele">删除</button>
          </div>
        </div>
      <div class="input-text" id="myinput" v-show="inputText">
        <input type="text" autofocus v-model="sendInput" ref="box" id="input" :placeholder="textInput">
        <div><button type="button" @click="sends">发送</button></div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'customer_details',
  inject:['reload'],  //引进局部刷新
  data () {
    return {
      imgUrl_loading: false,
      projet: '', // 项目
      customer_name: '', // 项目名
      customer_linkman: '', // 联系人
      customer_connect: '', // 联系方式
      customer_stylist: '', // 设计师
      customer_Decorate: '', // 装修面积
      Customer_type: '', // 所属类型
      customer_referrer: '', // 推荐人
      customer_budget: '', // 项目预算
      customer_demand: '', // 需求
      listtime: '', // 倒计时
      stage: '', // 修改记录
      stage_name: '', // 当前阶段
      listRadio_all: '', // 单选
      follow_text: '', // 跟进记录
      listName: '', // 设计师
      follow_person: '', // 跟进人
      nexDate: '', // 时间
      profetName: '', // 跟进人
      Customer_grade: '', // 客户等级
      listInput:[
        {text:''}
      ],//input数组
      dialogImageUrl: '',
      dialogVisible: false,
      ImgBase: '',
      textInput:'评论',
      list_text: '',
      vstage_name: [
        { stage_name: '未量尺' },
        { stage_name: '平面图' },
        { stage_name: '效果图' },
        { stage_name: '施工图' }
      ],
      listLevel: [
        { text: 'A' },
        { text: 'B' },
        { text: 'C' }
      ],
      list_type: [
        { text: '餐饮' },
        { text: '服装' },
        { text: '办公' },
        { text: '健身' },
        { text: '美容' },
        { text: '娱乐' },
        { text: '教育' },
        { text: '医疗' },
        { text: '销售' },
        { text: '小区' }
      ],
      listRadio: [
        { text: '家装' },
        { text: '工装' }
      ],
      cv: '',
      commitOn: true, // 评论
      inputText: false, // 回复输入框
      sendInput: '', // 回复内容
      fllow_id: '', // id
      inputTxt: [],// 评论
      Select_Comment:'',//评论数据
      searchInput:'',
      names:'',
      fund_person_id_user:'',
      lengMax:{
        textAlign:'right',
        padding:'7px 16px',
        color:'#767676'
      }
    }
  },
  created () {

    /* setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000) */

    this.cv = JSON.parse(localStorage.customer_statistics)
    // console.log(this.cv)
    this.customer_name = this.cv.customer_name
    this.customer_linkman = this.cv.customer_linkman
    this.customer_connect = this.cv.customer_connect
    this.customer_stylist = this.cv.fund_person_id
    this.customer_Decorate = this.cv.customer_Decorate
    this.customer_referrer = this.cv.customer_referrer
    this.customer_budget = this.cv.customer_budget
    this.Customer_type = this.cv.customer_type
    // this.listRadio_all = this.cv.customer_form
    this.customer_demand = this.cv.customer_demand
    this.Customer_grade = this.cv.customer_grade
    if (this.cv.customer_form == '') {
      this.listRadio_all = ''
    } else if (this.cv.customer_form == '家装') {
      this.listRadio_all = '家装'
    } else if (this.cv.customer_form == '工装') {
      this.listRadio_all = '工装'
    }
    this.imgsrc = this.cv.imgsrc
    //  跟进人
    this.axios.get('/select_follow_person' + '?fund_person_state=4').then(res => {
      this.profetName = res.data.data
    })
    // 查询项目的跟进信息
    this.axios.get('/Customer/SelectFollow' + '?Customer_id=' + this.cv.customer_id).then(res => {
      this.stage = res.data
      if (res.data.length == '0') {
        this.commitOn = false
      }
    })
    // 查询评论
    var then = this
    this.axios.get('/Customer/Select_Comment').then(res => {
      var push = []
      this.Select_Comment = res.data.data
      for (var i in then.Select_Comment) {
         for (var j in then.stage) {
           if (then.Select_Comment[i].comment_follow_id == then.stage[j].follow_id) {
             push.push(then.Select_Comment[i])
           }
         }
      }
      this.searchInput = push
      })
    // 设计师
    this.axios.get('/select_follow_person' + '?fund_person_state=3').then(res => {
      this.listName = res.data.data
      for (var index in this.listName) {
        if (this.listName[index].fund_person_id == this.cv.fund_person_id) {
          this.fund_person_id_user = this.listName[index].user_id
        }
      }
    })

    this.reply()
  },
  methods: {
    //点击其他区域隐藏恢复框
    reply(){
      var then = this
      document.addEventListener('click', (e) => {
        if (!then.$refs.box.contains(e.target)) {
          then.inputText = false
          then.sendInput = ''
          then.textInput = '评论'
        }
      })
    },

    forbid () {
      // 禁止软键盘弹出
      document.activeElement.blur()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleAvatarSuccess (response, file) {
      this.ImgBase = response
      console.log(response)
    },
    // 图片解析
    getImgUrl (val) {
      if (val != undefined) {
        var url = 'https://formattingclub.com/static/YiNuo/' + val
        return url
      }
    },
    //数据id
    fllow_idClick(id){
      this.fllow_id = id
    },
    // 跟进记录评论
    fund_person_idClick (id,name,names) {
      this.fllow_id = id
      this.textInput = '回复：'+names
      this.names = names
      this.inputText = true
      document.getElementById('input').focus()
    },
    // 发送回复
    sends () {
      var then = this
      var _true = true
      if (this.sendInput == '') {
        mui.toast('回复不能为空')
        _true = false
        return false
      }
      var add = '?comment_follow_id=' + this.fllow_id + '&comment_text=' + '回复'+this.names+this.sendInput + '&comment_user_id=' + sessionStorage.getItem('loginUserId') +
        '&comment_to_user_id=' + this.fund_person_id_user + '&information_type=2'
      this.axios.post('/Customer/Insert_Comment' + add).then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.inputText = false
          this.textInput = ''
          this.reload() //发送后开始这个部分刷新
          if (res.data.data == '添加成功') {
            mui.toast('发送成功')
          }
        }
      })
    },
    // 发送评论
    comment (index) {
      var then = this
      var is = index
      var _true = true
      var nubluer = ''
      for (var index in this.inputTxt) {
        nubluer+=this.inputTxt[index]
      }
      if (nubluer == '') {
        mui.toast('评论不能为空')
        _true = false
        return false
      }
      var add = '?comment_follow_id=' + this.fllow_id + '&comment_text=' +nubluer + '&comment_user_id=' + sessionStorage.getItem('loginUserId') +
        '&comment_to_user_id=' + this.fund_person_id_user + '&information_type=1'
      this.axios.post('/Customer/Insert_Comment' + add).then(res => {
        if (res.status === 200) {
          this.inputText = false
          this.inputTxt = ''
          this.reload()
          if (res.data.data == '添加成功') {
            mui.toast('发送成功')
          }
        }
      })
    },
    // 记录保存
    add () {
      var then = this
      var check = true
      if (this.follow_person == '') {
        mui.toast('跟进人不能为空')
        check = false
        return false
      }
      if (this.nexDate == '') {
        mui.toast('下次跟进不能为空')
        check = false
        return false
      }
      if (this.stage_name == '') {
        mui.toast('当前阶段不能为空')
        check = false
        return false
      }
      if (this.list_text == '') {
        mui.toast('跟进记录不能为空')
        check = false
        return false
      }
      var dt = new Date(this.nexDate)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      var dd = `${y}-${m}-${d}`
      this.imgUrl_loading = true
      //    录入数据
      var add = '?Customer_name=' + this.cv.customer_id + '&follow_person=' + this.follow_person + '&follow_text=' + this.list_text + '&follow_stage=' + this.stage_name +
      '&follow_Pre_date=' + dd + '&imgsrc=' + this.ImgBase
      this.axios.get('/Customer/AddFollow' + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          if (res.data == '添加成功') {
            mui.alert(res.data,function () {
              then.$router.go(0)
            })
          }
        }
      })
    },
    // 开工
    goadd () {
      var then = this
      var check = true
      if (this.radio == '') {
        mui.toast('阶段不能为空')
        check = false
        return false
      }
      this.imgUrl_loading = true
      this.axios.get('/Customer/Update_Customer' + '?Customer_id=' + this.cv.customer_id + '&Customer_name_state=2').then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          if (res.data.data == '修改成功') {
            mui.alert('已开工', function () {
              then.$router.push({ name: 'customer_statistics' })
            })
          }
        }
      })
      this.alerto = false
      // this.$router.push({ path: 'site_modify', query: { id: this.cv.customer_id } })
    },
    // 修改
    UpdateCustomer () {
      var then = this
      var add = '?Customer_id=' + this.cv.customer_id
      if (this.customer_name != this.cv.customer_name) {
        add += '&Customer_name=' + this.customer_name
      }
      if (this.customer_linkman != this.cv.customer_linkman) {
        add += '&Customer_linkman=' + this.customer_linkman
      }
      if (this.customer_connect != this.cv.customer_connect) {
        add += '&Customer_connect=' + this.customer_connect
      }
      if (this.customer_stylist != this.cv.customer_stylist) {
        add += '&Customer_stylist=' + this.customer_stylist
      }
      if (this.customer_Decorate != this.cv.customer_Decorate) {
        add += '&Customer_Decorate=' + this.customer_Decorate
      }
      if (this.customer_budget != this.cv.customer_budget) {
        add += '&Customer_budget=' + this.customer_budget
      }
      if (this.customer_demand != this.cv.customer_demand) {
        add += '&Customer_demand=' + this.customer_demand
      }
      if (this.Customer_type != this.cv.customer_type) {
        add += '&Customer_type=' + this.Customer_type
      }
      if (this.listRadio_all != this.cv.customer_form) {
        add += '&Customer_form=' + this.listRadio_all
      }
      if (this.customer_referrer != this.cv.customer_referrer) {
        add += '&Customer_referere=' + this.customer_referrer
      }
      if (this.Customer_grade != this.cv.Customer_grade) {
        add += '&Customer_grade=' + this.Customer_grade
      }
      this.axios.get('/Customer/UpdateCustomer' + add).then(res => {
        //   判断是否修改数据
        if (this.customer_name != this.cv.customer_name || this.customer_linkman != this.cv.customer_linkman || this.customer_connect != this.cv.customer_connect ||
          this.customer_stylist != this.cv.customer_stylist || this.customer_Decorate != this.cv.customer_Decorate || this.customer_referrer != this.cv.customer_referrer ||
          this.customer_budget != this.cv.customer_budget || this.Customer_type != this.cv.Customer_type) {
          mui.alert(res.data, function () {
            then.$router.push({ name: 'customer_statistics' })
          })
        } else {
          mui.toast('您什么都未修改')
        }
      })
    },
    //  删除
    dele () {
      var then = this
      this.imgUrl_loading = true
      this.axios.get('/Customer/DeleteCustomer' + '?Customer=' + this.cv.customer_id).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          if (res.data == '删除成功') {
            mui.alert('删除成功', function () {
              then.$router.push({ path: 'customer_statistics' })
            })
          } else {
            alert('删除失败')
          }
        }
      })
    }
    //  倒计时
    /* time: function (date, day) {
      if (date == null) {
        return '未开始'
      } else {
        var startDate = new Date(date)
        startDate.setDate(startDate.getDate() + day)
        var m = startDate.getMonth() + 1
        var end = startDate.getFullYear() + '-' + m + '-' + startDate.getDate() + '-' + startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds()
        var endDate = new Date(end)
        var start = new Date()
        var rightTime = endDate - start // 截止时间减去当前时间
        if (rightTime > 0) { // 判断剩余倒计时时间如果大于0就执行倒计时否则就结束
          var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24)
          var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24)
          var mm = Math.floor((rightTime / 1000 / 60) % 60)
          var ss = Math.floor((rightTime / 1000) % 60)
          var showTime = dd + ':' + hh + ':' + mm + ':' + ss
        } else {
          var showTime = '已逾期'
        }
        return showTime
      }
    } */
  }
}
</script>

<style scoped>
@import "../css/public.css";
/deep/input::-webkit-input-placeholder{color: #818181}
.mui-input-group{background-color: transparent}
/*form与form之间的差距*/
.classGray{color: gray}
.form-pab{margin-bottom: 15px;}
.all-row{display: flex;}
.all-row input{font-size: 14px!important;}
.all-row label:nth-child(1){flex: 1}
.all-row label:nth-child(2){flex:4;overflow: auto}
.update-btn{text-align: center;margin-top: 12px}
.update-btn button{width: 38%;line-height: 10px;float:inherit}
select{font-size: 15px}
/*form2-label*/
#app{padding-top: 0;}
.row-flex label{width: 50%;}
.row-flex input{width: 50%!important;font-size: 12px;}
.flex-mm div{width: 50%;}
.left-mar{padding-left: 0!important;}
.left-mar div{line-height: 40px}
/*记录*/
.jin{display: flex;line-height: 40px;border-bottom: 1px solid black;width: 95%;margin-left: 15px;margin-bottom: 11px}
.jin-date{display: flex;}
.gen{text-align: left;font-size: 15px;color: gray;padding-left: 43px}
.jin-date p:nth-child(2){text-align: right;padding-right: 16px;}
.row-textarea{height: auto!important;width: 95%;margin-left: 15px;font-size: 14px}
.row-textarea textarea{font-size: 14px;color: black;padding-left: 2px!important;padding-top: 3px}
.box-h4 h4:nth-child(1){line-height: 28px;border-bottom: 2px solid black;font-size: 15px;width: 95%;margin-left: 14px}
.box{margin-bottom: 20px}
ul{background-color: #efeff4;font-size: 15px}
.mui-table-view-cell.mui-collapse .mui-collapse-content{background-color: #efeff4;padding: 0}
.row-go{margin-bottom: 103px}
/*评论*/
.input-text{position: fixed;bottom: 0;left: 0;right: 0}
.input-text input{width: 80%;float: left;margin-bottom: 0}
.input-text div{float: left;width: 20%;text-align: center;}
.input-text div button{width: 100%;height: 40px}
.input-commit input{width: 90%;height: 23px;background-color: #d5d5d5}
.input-commit textarea{border: 1px solid #bebebe;height: 26px;width: 80%;float: left}
.input-commit button{float: left;width: 15%;padding: 2px;height: 26px;}
.text-follow{font-weight: 600;margin-bottom: 10px}
.commint-text{margin-bottom: 12px}
.textreap{height: 100px}
/*按钮*/
.update-img label{width: 100%}
.update-img{margin-bottom: 120px}
.row-left{font-size: 15px;display: flex;}
.row-left-on{flex: 1;display: flex;}
.row-left-on:nth-child(1) label{padding: 10px 15px;line-height: 25px;white-space: nowrap}
.row-left-on:nth-child(1) select{margin-left: 10px;margin-bottom: 0}
.radio-left{display: flex;position: relative;right: 18px;top: 6px}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 23px;white-space: nowrap}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: -2px!important;}
.mui-input-row{overflow: unset}
.mui-input-group:before,.mui-table-view:before,.mui-input-group:after,.mui-table-view:after,.mui-table-view-cell:after,
.mui-input-group:after, .mui-input-row:nth-last-child(1):after{background-color: transparent!important;}
.go-add{text-align: center;margin-bottom: 34px;}
.go-add button{background-color: black;color: white;width: 45%;margin-top: 17px}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}
.form-botton{text-align: center;margin-top: 17px}
.botton-mar{margin-bottom: 27px;}
.mui-chech{white-space: normal}
.mui-chech label{width: 21%;}
.mui-heck{position: relative;right: 9px;}
.mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
.row-input{flex: 1;padding-left: 21px!important;}
.mui-input-group .mui-input-row:after{background-color: transparent}
.commit-button{margin-left: 9px}
/deep/.el-input__prefix{display: none}
/*图片解析*/
.div-img{width: 30%}
.div-img img{width: 100%}
/deep/.el-icon-date:before{content: ''}
/deep/.el-icon-plus:before{font-size: 26px}
/deep/.el-icon-minus:before{font-size: 25px;position: relative;top: 1px}
/deep/.el-upload--picture-card{border: 1px solid #dadada!important;background-color: transparent!important;width: 108px;height: 108px;line-height: 118px;margin-left: 9px}
/deep/.el-upload-list--picture-card .el-upload-list__item{width: 108px;height: 108px;margin-left: 9px}
</style>
