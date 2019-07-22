<template>
    <div class="relevant_people">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">收款人</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--site-->
      <div class="mui-content app">
        <ul class="mui-table-view" v-if="allperson">
          <li class="siteAColor" id="A"><span>A</span></li>
          <li class="mui-table-view-cell" v-for="item in site_A" @click="suteA(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="B"><span>B</span></li>
          <li class="mui-table-view-cell" v-for="item in site_B" @click="suteB(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="C"><span>C</span></li>
          <li class="mui-table-view-cell" v-for="item in site_C" @click="suteC(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="D"><span>D</span></li>
          <li class="mui-table-view-cell" v-for="item in site_D" @click="suteD(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="E"><span>E</span></li>
          <li class="mui-table-view-cell" v-for="item in site_E" @click="suteE(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="F"><span>F</span></li>
          <li class="mui-table-view-cell" v-for="item in site_F" @click="suteF(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="G"><span>G</span></li>
          <li class="mui-table-view-cell" v-for="item in site_G" @click="suteG(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="H"><span>H</span></li>
          <li class="mui-table-view-cell" v-for="item in site_H" @click="suteH(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="I"><span>I</span></li>
          <li class="mui-table-view-cell" v-for="item in site_I" @click="suteI(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="J"><span>J</span></li>
          <li class="mui-table-view-cell" v-for="item in site_J" @click="suteJ(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="K"><span>K</span></li>
          <li class="mui-table-view-cell" v-for="item in site_K" @click="suteK(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="L"><span>L</span></li>
          <li class="mui-table-view-cell" v-for="item in site_L" @click="suteL(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="M"><span>M</span></li>
          <li class="mui-table-view-cell" v-for="item in site_M" @click="suteM(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="N"><span>N</span></li>
          <li class="mui-table-view-cell" v-for="item in site_N" @click="suteN(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="O"><span>O</span></li>
          <li class="mui-table-view-cell" v-for="item in site_O" @click="suteO(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="P"><span>P</span></li>
          <li class="mui-table-view-cell" v-for="item in site_P" @click="suteP(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="Q"><span>Q</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Q" @click="suteQ(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="R"><span>R</span></li>
          <li class="mui-table-view-cell" v-for="item in site_R" @click="suteR(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="S"><span>S</span></li>
          <li class="mui-table-view-cell" v-for="item in site_S" @click="suteS(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="T"><span>T</span></li>
          <li class="mui-table-view-cell" v-for="item in site_T" @click="suteT(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="W"><span>W</span></li>
          <li class="mui-table-view-cell" v-for="item in site_W" @click="suteW(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="U"><span>U</span></li>
          <li class="mui-table-view-cell" v-for="item in site_U" @click="suteU(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="V"><span>V</span></li>
          <li class="mui-table-view-cell" v-for="item in site_V" @click="suteV(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="X"><span>X</span></li>
          <li class="mui-table-view-cell" v-for="item in site_X" @click="suteX(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="Y"><span>Y</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Y" @click="suteY(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="Z"><span>Z</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Z" @click="suteZ(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
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
    name: 'relevant_people',
    data() {
      return {
        imgUrl_loading: false,
        allperson:false,
        listProjet: '',
        site_A: '',
        site_B: '',
        site_C: '',
        site_D: '',
        site_E: '',
        site_F: '',
        site_G: '',
        site_H: '',
        site_J: '',
        site_K: '',
        site_L: '',
        site_M: '',
        site_W: '',
        site_N: '',
        site_O: '',
        site_P: '',
        site_Q: '',
        site_T: '',
        site_R: '',
        site_S: '',
        site_Y: '',
        site_X: '',
        site_Z: '',
        site_V:'',
        site_U:'',
        site_I:'',
        AZ: [],
        codeSite: '',
        codeE: '',
        prosen:'',
      }
    },
    created () {
      this.imgUrl_loading = true
      this.allperson = false
      this.axios.get(url.Select_fund_person).then(res=>{
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
          var siteU = []
          var siteV = []
          var siteI = []
          for (var index in res.data.data) {
            if (res.data.data[index].firstChar === 'a') {
              siteA.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'b') {
              siteB.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'c') {
              siteC.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'd') {
              siteD.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'e') {
              siteE.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'f') {
              siteF.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'g') {
              siteG.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'h') {
              siteH.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'i') {
              siteI.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'j') {
              siteJ.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'k') {
              siteK.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'l') {
              siteL.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'm') {
              siteM.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'n') {
              siteN.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'o') {
              siteO.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'p') {
              siteP.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'q') {
              siteQ.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'r') {
              siteR.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 's') {
              siteS.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 't') {
              siteT.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'u') {
              siteU.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'v') {
              siteV.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'w') {
              siteW.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'x') {
              siteX.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'y') {
              siteY.push(res.data.data[index])
            }
            if (res.data.data[index].firstChar === 'z') {
              siteZ.push(res.data.data[index])
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
      /*收入*/
      this.prosen = window.prosen
    },
    methods:{
      siteAZ(id){
        var a=id
        document.querySelector('#'+a).scrollIntoView(true)
      },
      all_projet(id,name){
        window.fund_people=id
        window.fund_people_name = name
        if (this.prosen === 'income') {
          this.$router.push({path:'income'})
        }else if (this.prosen === 'money_entry') {
          this.$router.push({path:'money_entry'})
        }else if (this.prosen === 'accounts_payable') {
          this.$router.push({path:'accounts_payable'})
        }else if (this.prosen === 'expenditure_people') {
          this.$router.push({path:'expenditure'})
        }
      },
      suteA(id,name){
        this.all_projet(id,name)
      },
      suteB(id,name){
        this.all_projet(id,name)
        /*window.fund_people=id
        window.fund_people_name = name
        if (this.prosen === 'income') {
          this.$router.push({path:'income'})
        }else if (this.prosen === 'money_entry') {
          this.$router.push({path:'money_entry'})
        }else if (this.prosen === 'accounts_payable') {
          this.$router.push({path:'accounts_payable'})
        }else if (this.prosen === 'expenditure_people') {
          this.$router.push({path:'expenditure'})
        }*/
      },
      suteC(id,name){
        this.all_projet(id,name)
      },
      suteD(id,name){
        this.all_projet(id,name)
      },
      suteE(id,name){
        this.all_projet(id,name)
      },
      suteF(id,name){
        this.all_projet(id,name)
      },
      suteG(id,name){
        this.all_projet(id,name)
      },
      suteH(id,name){
        this.all_projet(id,name)
      },
      suteJ(id,name){
        this.all_projet(id,name)
      },
      suteK(id,name){
        this.all_projet(id,name)
      },
      suteL(id,name){
        this.all_projet(id,name)
      },
      suteM(id,name){
        this.all_projet(id,name)
      },
      suteN(id,name){
        this.all_projet(id,name)
      },
      suteO(id,name){
        this.all_projet(id,name)
      },
      suteP(id,name){
        this.all_projet(id,name)
      },
      suteQ(id,name){
        this.all_projet(id,name)
      },
      suteR(id,name){
        this.all_projet(id,name)
      },
      suteS(id,name){
        this.all_projet(id,name)
      },
      suteU(id,name){
        this.all_projet(id,name)
      },
      suteV(id,name){
        this.all_projet(id,name)
      },
      suteI(id,name){
        this.all_projet(id,name)
      },
      suteT(id,name){
        this.all_projet(id,name)
      },
      suteW(id,name){
        this.all_projet(id,name)
      },
      suteX(id,name){
        this.all_projet(id,name)
      },
      suteY(id,name){
        this.all_projet(id,name)
      },
      suteZ(id,name){
        this.all_projet(id,name)
      }
    }
  }
</script>

<style scoped>
  /*#A,#B,#C,#D,#E,#F,#G,#H,#I,#G,#Q,#O,#M,#N,#O,#P,#Q,#R,#S,#U,#V,#W,#S,#Y,#Z,#T{padding-top: 47px}*/
  .right{list-style: none;position: fixed;right: 0px;line-height: 26px;top: 5%;padding: 0 13px;/*height: 416px;overflow: auto*/}
  .mui-bar-nav~.mui-content{padding-top: 31px!important;}
  .mui-table-view{position: absolute;width: 100%}
  .app{margin-bottom: 0}
  .siteAColor{background: #e3e3e3;padding: 10px 15px;font-size: 15px;line-height: 24px}
</style>
