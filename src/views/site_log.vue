<template>
    <div class="site_log">
      <!--header-->
      <div class="name app">
        <div class="name-all">
          <h2>{{name}}</h2>
        </div>
        <div class="name-all">
          <label>总工数：</label>
          <input type="text" class="mui-input-clear" placeholder="总工数">
        </div>
      </div>
      <!--center-->
      <div class="mui-content center">
        <div class="mui-input-row line">
            <span>王武器</span>
            <span>2018-3-16</span>
        </div>
        <el-upload
          action="imgURl"
          :auto-upload="true"
          :http-request = "customUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :limit="6"
          :on-exceed="leng"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div class="projet_all">
        <div class="mui-input-row projet_img">
          <label>检查项目</label>
          <router-link :to="{name:'site_project_inspection'}">
          <img :src="projetImg" alt="项目检查">
          </router-link>
        </div>
          <div class="mui-input-row projet_img">
            <label>工人：</label>
            <input type="text" class="mui-input-clear" placeholder="工人数">
          </div>
        </div>
        <div class="mui-input-row row-textarea">
          <label>跟进内容</label>
          <textarea name="" rows="" cols="" :value="textrate" disabled="disabled"></textarea>
        </div>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="returnName">返回</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="saveName">保存</button>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'site_log',
  data () {
    return {
      name: '',
      list: '',
      fund_details_id: '',
      dialogImageUrl: '',
      dialogVisible: false,
      imgURL: [],
      projetImg: require('../image/projet_all.png'),
      textrate: ''
    }
  },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    this.fund_details_id = id
    this.list = id.split('=')
    var lists = []
    for (var index in this.list) {
      var a2 = this.list[index].slice(0)
      lists.push(a2)
    }
    this.name = lists[0]
    this.textrate = lists[1]
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    customUpload (val) {
      console.log(val.file)
    },
    /* imgLength */
    leng () {
      var a = true
      mui.toast('最多6张图片')
      a = false
      return false
    },
    /* return */
    returnName () {
      this.$router.push({ name: 'site_statistics' })
    },
    /* save */
    saveName () {
      mui.alert('未完成')
    }
  }
}
</script>

<style scoped>
  /*header*/
  .app{margin-bottom: 22px}
  h2{margin-top: 55px;padding-left:17px;width: 198px;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;}
  .name{display: flex}
  .name-all{flex:1}
  .name-all label{position: relative;top: 58px;}
  .name-all input{background: transparent;border-top: 0;padding-left:5px;border-left: 0;border-right: 0;width: 67px;margin-bottom: 0;position: relative;top: 57px;padding-bottom: 0;height: 27px}
  /*center*/
  .line{height: 22px;border-bottom: 1px solid #dadada;padding-bottom: 26px}
  .line span{margin-left: 17px;font-size: 15px}
  /*uploadImage*/
  /deep/.el-upload--picture-card{border: 1px solid #dadada!important;background-color: transparent!important;width: 108px;height: 108px;line-height: 118px;margin-left: 9px}
  /deep/.el-upload-list--picture-card .el-upload-list__item{width: 108px;height: 108px;margin-left: 9px}
  /*projet_all*/
  .projet_all{display: flex;}
  .projet_img{flex: 1}
  .projet_img:nth-child(1) label{width: 50%;padding-right: 0}
  .projet_img img{width: 25px;padding-top: 5px;}
  .projet_img:nth-child(2) label{width: 36%;padding-right: 0}
  .projet_img input{width: 64%}
  /*textreap*/
  .row-textarea label,.row-textarea textarea{border: 1px solid #dadada}
  /*btn*/
  .form-btn button{width: 29%!important;margin: 0 3px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
