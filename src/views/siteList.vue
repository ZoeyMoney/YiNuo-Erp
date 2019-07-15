<template>
    <div class="siteList">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地列表</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--site-->
      <div class="mui-content app">
        <ul class="mui-table-view" v-if="allperson">
          <li class="siteAColor" id="A">A</li>
          <li class="mui-table-view-cell" v-for="item in site_A" @click="suteA(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="B"><span>B</span></li>
          <li class="mui-table-view-cell" v-for="item in site_B" @click="suteB(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="C"><span>C</span></li>
          <li class="mui-table-view-cell" v-for="item in site_C" @click="suteC(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="D"><span>D</span></li>
          <li class="mui-table-view-cell" v-for="item in site_D" @click="suteD(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="E"><span>E</span></li>
          <li class="mui-table-view-cell" v-for="item in site_E" @click="suteE(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="F"><span>F</span></li>
          <li class="mui-table-view-cell" v-for="item in site_F" @click="suteF(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="G"><span>G</span></li>
          <li class="mui-table-view-cell" v-for="item in site_G" @click="suteG(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="H"><span>H</span></li>
          <li class="mui-table-view-cell" v-for="item in site_H" @click="suteH(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="I"><span>I</span></li>
          <li class="mui-table-view-cell" v-for="item in site_I" @click="suteI(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="J"><span>J</span></li>
          <li class="mui-table-view-cell" v-for="item in site_J" @click="suteJ(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="K"><span>K</span></li>
          <li class="mui-table-view-cell" v-for="item in site_K" @click="suteK(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="L"><span>L</span></li>
          <li class="mui-table-view-cell" v-for="item in site_L" @click="suteL(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="M"><span>M</span></li>
          <li class="mui-table-view-cell" v-for="item in site_M" @click="suteM(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="N"><span>N</span></li>
          <li class="mui-table-view-cell" v-for="item in site_N" @click="suteN(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="O"><span>O</span></li>
          <li class="mui-table-view-cell" v-for="item in site_O" @click="suteO(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="P"><span>P</span></li>
          <li class="mui-table-view-cell" v-for="item in site_P" @click="suteP(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="Q"><span>Q</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Q" @click="suteQ(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="R"><span>R</span></li>
          <li class="mui-table-view-cell" v-for="item in site_R" @click="suteR(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="S"><span>S</span></li>
          <li class="mui-table-view-cell" v-for="item in site_S" @click="suteS(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="T"><span>T</span></li>
          <li class="mui-table-view-cell" v-for="item in site_T" @click="suteT(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="U"><span>U</span></li>
          <li class="mui-table-view-cell" v-for="item in site_U" @click="suteU(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="V"><span>V</span></li>
          <li class="mui-table-view-cell" v-for="item in site_V" @click="suteV(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="W"><span>W</span></li>
          <li class="mui-table-view-cell" v-for="item in site_W" @click="suteW(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="X"><span>X</span></li>
          <li class="mui-table-view-cell" v-for="item in site_X" @click="suteX(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="Y"><span>Y</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Y" @click="suteY(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
          <li class="siteAColor" id="Z"><span>Z</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Z" @click="suteZ(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
        </ul>
        <ul class="right" v-if="allperson">
          <li v-for="item in AZ" @click="siteAZ(item)">{{item}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'siteList',
    data(){
      return{
        imgUrl_loading:false,
        allperson:false,
        listProjet:'',
        site_A:'',
        site_B:'',
        site_C:'',
        site_D:'',
        site_E:'',
        site_F:'',
        site_G:'',
        site_H:'',
        site_J:'',
        site_K:'',
        site_L:'',
        site_M:'',
        site_W:'',
        site_N:'',
        site_O:'',
        site_P:'',
        site_Q:'',
        site_T:'',
        site_R:'',
        site_S:'',
        site_Y:'',
        site_X:'',
        site_Z:'',
        site_I:'',
        site_V:'',
        site_U:'',
        AZ:[],
        codeSite:'',
        codeE:'',
        allProjet:'',
      }
    },
    created () {
      this.imgUrl_loading = true
      this.allperson = false
      this.axios.get(url.clientProjet).then(res=>{
        if (res.status === 200) {
          this.imgUrl_loading = false
          this.allperson = true
        var siteA = []
        var siteB = []
        var siteC = []
        var siteD = []
        var siteE = []
        var siteF = []
        var siteG = []
        var siteH = []
        var siteJ = []
        var siteK = []
        var siteL = []
        var siteM = []
        var siteN = []
        var siteO = []
        var siteP = []
        var siteQ = []
        var siteR = []
        var siteT = []
        var siteW = []
        var siteX = []
        var siteS = []
        var siteY = []
        var siteZ = []
        var siteI = []
        var siteU = []
        var siteV = []
        for (var index in res.data) {
          if (res.data[index].firstChar === 'a') {
            siteA.push( res.data[index])
          }
          if (res.data[index].firstChar === 'b') {
            siteB.push(res.data[index])
          }
          if (res.data[index].firstChar === 'c') {
            siteC.push(res.data[index])
          }
          if (res.data[index].firstChar === 'd') {
            siteD.push(res.data[index])
          }
          if (res.data[index].firstChar === 'e') {
            siteE.push(res.data[index])
          }
          if (res.data[index].firstChar === 'f') {
            siteF.push(res.data[index])
          }
          if (res.data[index].firstChar === 'g') {
            siteG.push(res.data[index])
          }
          if (res.data[index].firstChar === 'h') {
            siteH.push(res.data[index])
          }
          if (res.data[index].firstChar === 'i') {
            siteI.push(res.data[index])
          }
          if (res.data[index].firstChar === 'j') {
            siteJ.push(res.data[index])
          }
          if (res.data[index].firstChar === 'k') {
            siteK.push(res.data[index])
          }
          if (res.data[index].firstChar === 'l') {
            siteL.push(res.data[index])
          }
          if (res.data[index].firstChar === 'm') {
            siteM.push(res.data[index])
          }
          if (res.data[index].firstChar === 'n') {
            siteN.push(res.data[index])
          }
          if (res.data[index].firstChar === 'o') {
            siteO.push(res.data[index])
          }
          if (res.data[index].firstChar === 'p') {
            siteP.push(res.data[index])
          }
          if (res.data[index].firstChar === 'q') {
            siteQ.push(res.data[index])
          }
          if (res.data[index].firstChar === 'r') {
            siteR.push(res.data[index])
          }
          if (res.data[index].firstChar === 's') {
            siteS.push(res.data[index])
          }
          if (res.data[index].firstChar === 't') {
            siteT.push(res.data[index])
          }
          if (res.data[index].firstChar === 'u') {
            siteU.push(res.data[index])
          }
          if (res.data[index].firstChar === 'v') {
            siteV.push(res.data[index])
          }
          if (res.data[index].firstChar === 'w') {
            siteW.push(res.data[index])
          }
          if (res.data[index].firstChar === 'x') {
            siteX.push(res.data[index])
          }
          if (res.data[index].firstChar === 'y') {
            siteY.push(res.data[index])
          }
          if (res.data[index].firstChar === 'z') {
            siteZ.push(res.data[index])
          }
        }
        this.site_A = siteA
        this.site_B = siteB
        this.site_C = siteC
        this.site_D = siteD
        this.site_E = siteE
        this.site_F = siteF
        this.site_G = siteG
        this.site_H = siteH
        this.site_J = siteJ
        this.site_K = siteK
        this.site_L = siteL
        this.site_M = siteM
        this.site_W = siteW
        this.site_S = siteS
        this.site_N = siteN
        this.site_O = siteO
        this.site_P = siteP
        this.site_Q = siteQ
        this.site_R = siteR
        this.site_T = siteT
        this.site_X = siteX
        this.site_Y = siteY
        this.site_Z = siteZ
        this.site_U = siteU
        this.site_V = siteV
        this.site_I = siteI
        }
      })
      var az = []
      for (var i = 0; i < 26; i++) {
        az.push(String.fromCharCode((65+i)))
        }
      this.AZ = az
      this.allProjet = window.expenditure
      },
    methods:{
      /*给字母加上锚点*/
      siteAZ(id){
        document.querySelector('#'+id).scrollIntoView(true)
      },
      all_sute(id,name){
        window.test = id
        window.test_id = name
        if (this.allProjet === 'expenditure') {
          this.$router.push({path:'expenditure'})
        }else if (this.allProjet === 'income') {
          this.$router.push({path:'income'})
        }else if (this.allProjet === 'money_entry') {
          this.$router.push({path:'money_entry'})
        }else if (this.allProjet === 'accounts_payable') {
          this.$router.push({path:'accounts_payable'})
        }else if (this.allProjet === 'profit_edit') {
          this.$router.push({path:'profit_edit'})
        }
      },
      suteA(id,name){
        this.all_sute(id,name)
      },
      suteB(id,name){
        this.all_sute(id,name)
      },
      suteC(id,name){
        this.all_sute(id,name)
      },
      suteD(id,name){
        this.all_sute(id,name)
      },
      suteE(id,name){
        this.all_sute(id,name)
      },
      suteF(id,name){
        this.all_sute(id,name)
      },
      suteG(id,name){
        this.all_sute(id,name)
      },
      suteH(id,name){
        this.all_sute(id,name)
      },
      suteJ(id,name){
        this.all_sute(id,name)
      },
      suteK(id,name){
        this.all_sute(id,name)
      },
      suteL(id,name){
        this.all_sute(id,name)
      },
      suteM(id,name){
        this.all_sute(id,name)
      },
      suteN(id,name){
        this.all_sute(id,name)
      },
      suteO(id,name){
        this.all_sute(id,name)
      },
      suteP(id,name){
        this.all_sute(id,name)
      },
      suteQ(id,name){
        this.all_sute(id,name)
      },
      suteR(id,name){
        this.all_sute(id,name)
      },
      suteS(id,name){
        this.all_sute(id,name)
      },
      suteT(id,name){
        this.all_sute(id,name)
      },
      suteW(id,name){
        this.all_sute(id,name)
      },
      suteX(id,name){
        this.all_sute(id,name)
      },
      suteY(id,name){
        this.all_sute(id,name)
      },
      suteZ(id,name){
        this.all_sute(id,name)
      }
    }
  }
</script>

<style scoped>
  .right{list-style: none;position: fixed;right: 0px;line-height: 21px;top: 4%;padding: 0 13px;height: 416px;overflow: auto}
  .mui-bar-nav~.mui-content{padding-top: 31px!important;}
  .mui-table-view{position: absolute;width: 100%}
  .app{margin-bottom: 0}
  .siteAColor{background: #e3e3e3;padding: 10px 15px;font-size: 15px;line-height: 24px}
</style>
