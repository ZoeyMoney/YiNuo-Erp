<template>
    <div class="relevant_people">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link to="" @click.native="hrefGo" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">{{UserName}}</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--site-->
      <div class="mui-content app">
        <ul class="mui-table-view" v-if="allperson">
          <li class="siteAColor" id="A" v-if="siteAA"><span>A</span></li>
          <li class="mui-table-view-cell" v-for="item in site_A" @click="suteA(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="B" v-if="siteBB"><span>B</span></li>
          <li class="mui-table-view-cell" v-for="item in site_B" @click="suteB(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="C" v-if="siteCC"><span>C</span></li>
          <li class="mui-table-view-cell" v-for="item in site_C" @click="suteC(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="D" v-if="siteDD"><span>D</span></li>
          <li class="mui-table-view-cell" v-for="item in site_D" @click="suteD(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="E" v-if="siteEE"><span>E</span></li>
          <li class="mui-table-view-cell" v-for="item in site_E" @click="suteE(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="F" v-if="siteFF"><span>F</span></li>
          <li class="mui-table-view-cell" v-for="item in site_F" @click="suteF(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="G" v-if="siteGG"><span>G</span></li>
          <li class="mui-table-view-cell" v-for="item in site_G" @click="suteG(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="H" v-if="siteHH"><span>H</span></li>
          <li class="mui-table-view-cell" v-for="item in site_H" @click="suteH(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="I" v-if="siteII"><span>I</span></li>
          <li class="mui-table-view-cell" v-for="item in site_I" @click="suteI(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="J" v-if="siteJJ"><span>J</span></li>
          <li class="mui-table-view-cell" v-for="item in site_J" @click="suteJ(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="K" v-if="siteKK"><span>K</span></li>
          <li class="mui-table-view-cell" v-for="item in site_K" @click="suteK(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="L" v-if="siteLL"><span>L</span></li>
          <li class="mui-table-view-cell" v-for="item in site_L" @click="suteL(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="M" v-if="siteMM"><span>M</span></li>
          <li class="mui-table-view-cell" v-for="item in site_M" @click="suteM(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="N" v-if="siteNN"><span>N</span></li>
          <li class="mui-table-view-cell" v-for="item in site_N" @click="suteN(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="O" v-if="siteOO"><span>O</span></li>
          <li class="mui-table-view-cell" v-for="item in site_O" @click="suteO(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="P" v-if="sitePP"><span>P</span></li>
          <li class="mui-table-view-cell" v-for="item in site_P" @click="suteP(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="Q" v-if="siteQQ"><span>Q</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Q" @click="suteQ(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="R" v-if="siteRR"><span>R</span></li>
          <li class="mui-table-view-cell" v-for="item in site_R" @click="suteR(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="S" v-if="siteSS"><span>S</span></li>
          <li class="mui-table-view-cell" v-for="item in site_S" @click="suteS(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="T" v-if="siteTT"><span>T</span></li>
          <li class="mui-table-view-cell" v-for="item in site_T" @click="suteT(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="W" v-if="siteWW"><span>W</span></li>
          <li class="mui-table-view-cell" v-for="item in site_W" @click="suteW(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="U" v-if="siteUU"><span>U</span></li>
          <li class="mui-table-view-cell" v-for="item in site_U" @click="suteU(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="V" v-if="siteVV"><span>V</span></li>
          <li class="mui-table-view-cell" v-for="item in site_V" @click="suteV(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="X" v-if="siteXX"><span>X</span></li>
          <li class="mui-table-view-cell" v-for="item in site_X" @click="suteX(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="Y" v-if="siteYY"><span>Y</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Y" @click="suteY(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
          <li class="siteAColor" id="Z" v-if="siteZZ"><span>Z</span></li>
          <li class="mui-table-view-cell" v-for="item in site_Z" @click="suteZ(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
        </ul>
        <ul class="right" v-if="allperson">
          <li v-for="item in AZ" @click="siteAZ(item)">{{item}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'relevant_people',
  data () {
    return {
      imgUrl_loading: false,
      allperson: false,
      class: '',
      UserName: '',
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
      site_V: '',
      site_U: '',
      site_I: '',

      siteAA: true,
      siteBB: true,
      siteCC: true,
      siteDD: true,
      siteEE: true,
      siteFF: true,
      siteGG: true,
      siteHH: true,
      siteII: true,
      siteJJ: true,
      siteKK: true,
      siteLL: true,
      siteMM: true,
      siteNN: true,
      siteOO: true,
      sitePP: true,
      siteQQ: true,
      siteRR: true,
      siteSS: true,
      siteTT: true,
      siteUU: true,
      siteVV: true,
      siteWW: true,
      siteXX: true,
      siteYY: true,
      siteZZ: true,
      AZ: [],
      codeSite: '',
      codeE: '',
      prosen: ''
    }
  },
  created () {
    this.imgUrl_loading = true
    this.allperson = false
    this.class = window.prosen
    // 判断传参
    console.log(window.prosen)
    var add = '?'
    if (window.prosen === 'accounts_payable' || window.prosen === 'money_entry' || window.prosen === 'income' || window.prosen === 'expenditure' ||
      window.prosen === 'income_receive' || window.prosen === 'Project_Reconciliation' || window.prosen === 'receive_data' || window.paid_data === 'paid_data') {
      add += 'fund_person_state_A=1'
    } else if (window.prosen === 'accounts_payable_huan' || window.prosen === 'income_receive_huan' || window.prosen === 'task_admin' || window.prosen === 'Release_admin' ||
        window.prosen === 'task_admins_user' || window.prosen === 'Release_admins_user') {
      add += 'fund_person_state_A=2'
    }
    // 判断头部信息显示
    if (window.prosen == 'income' || window.prosen == 'money_entry' || window.prosen == 'receive_data' || window.prosen == 'paid_data') {
      this.UserName = '相关人'
    } else if (window.prosen === 'expenditure') {
      this.UserName = '收款人'
    } else if (window.prosen == 'accounts_payable') {
      this.UserName = '债权人'
    } else if (window.prosen === 'accounts_payable_huan') {
      this.UserName = '经手人'
    } else if (window.prosen === 'task_admin' || window.prosen === 'task_admins_user') {
      this.UserName = '执行人'
    } else if (window.prosen === 'Release_admin' || window.prosen === 'Release_admins_user') {
      this.UserName = '下达人'
    }
    /* 判断A-Z的没有则消失 */
    this.axios.get('/fund/Select_fund_person' + add).then(res => {
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
      az.push(String.fromCharCode((65 + i)))
    }
    this.AZ = az
    /* 收入 */
    this.prosen = window.prosen
  },
  methods: {
    siteAZ (id) {
      var a = id
      document.querySelector('#' + a).scrollIntoView(true)
    },
    // 返回上一页根据不同的页面跳不同的页面
    hrefGo () {
      if (this.prosen === 'income') {
        this.$router.push({ path: 'income' })
      } else if (this.prosen === 'money_entry') {
        this.$router.push({ path: 'money_entry' })
      } else if (this.prosen === 'accounts_payable' || this.prosen === 'accounts_payable_huan') {
        this.$router.push({ path: 'accounts_payable' })
      } else if (this.prosen === 'expenditure') {
        this.$router.push({ path: 'expenditure' })
      } else if (this.prosen === 'receive_data') {
        this.$router.push({ path: 'receive_data' })
      } else if (this.prosen === 'paid_data') {
        this.$router.push({ path: 'paid_data' })
      } else if (this.prosen === 'income_receive') {
        this.$router.push({ path: 'income_receive' })
      } else if (this.prosen === 'Project_Reconciliation') {
        this.$router.push({ path: 'Project_Reconciliation' })
      } else if (this.prosen === 'receive_data') {
        this.$router.push({ path: 'receive_data' })
      } else if (this.prosen === 'task_admin') {
        this.$router.push({ path: 'task_people' })
      } else if (this.prosen === 'Release_admin') {
        this.$router.push({ path: 'task_people' })
      } else if (this.prosen === 'task_admins_user') {
        this.$router.push({ path: 'task_admins' })
      } else if (this.prosen === 'Release_admins_user') {
        this.$router.push({ path: 'task_admins' })
      }
    },
    // 根据页面传来不同的数据、点击数据然后返回各种页面
    all_projet (id, name) {
      if (this.prosen === 'income' || this.prosen === 'money_entry' || this.prosen === 'accounts_payable' || this.prosen === 'expenditure' ||
          this.prosen === 'receive_data' || this.prosen === 'paid_data' || this.prosen === 'income_receive' || this.prosen === 'Project_Reconciliation' || this.prosen === 'task_admin' ||
          this.prosen === 'task_admins_user') {
        window.fund_people = id
        window.fund_people_name = name
        if (this.prosen === 'income') {
          this.$router.push({ path: 'income' })
        } else if (this.prosen === 'money_entry') {
          this.$router.push({ path: 'money_entry' })
        } else if (this.prosen === 'accounts_payable') {
          this.$router.push({ path: 'accounts_payable' })
        } else if (this.prosen === 'expenditure') {
          this.$router.push({ path: 'expenditure' })
        } else if (this.prosen === 'receive_data') {
          this.$router.push({ path: 'receive_data' })
        } else if (this.prosen === 'paid_data') {
          this.$router.push({ path: 'paid_data' })
        } else if (this.prosen === 'income_receive') {
          this.$router.push({ path: 'income_receive' })
        } else if (this.prosen === 'Project_Reconciliation') {
          this.$router.push({ path: 'Project_Reconciliation' })
        } else if (this.prosen === 'task_admin') {
          this.$router.push({ path: 'task_people' })
        } else if (this.prosen === 'task_admins_user') {
          this.$router.push({ path: 'task_admins' })
        }
      } else if (this.prosen === 'accounts_payable_huan') {
        window.fund_people_huan = id
        window.fund_people_huan_name = name
        this.$router.push({ path: 'accounts_payable' })
      } else if (this.prosen === 'income_receive_huan') {
        window.fund_people_huan = id
        window.fund_people_huan_name = name
        this.$router.push({ path: 'income_receive' })
      } else if (this.prosen === 'Release_admin') {
        window.fund_people_huan = id
        window.fund_people_huan_name = name
        this.$router.push({ path: 'task_people' })
      } else if (this.prosen === 'Release_admins_user') {
        window.fund_people_huan = id
        window.fund_people_huan_name = name
        this.$router.push({ path: 'task_admins' })
      }
    },
    suteA (id, name) {
      this.all_projet(id, name)
    },
    suteB (id, name) {
      this.all_projet(id, name)
    },
    suteC (id, name) {
      this.all_projet(id, name)
    },
    suteD (id, name) {
      this.all_projet(id, name)
    },
    suteE (id, name) {
      this.all_projet(id, name)
    },
    suteF (id, name) {
      this.all_projet(id, name)
    },
    suteG (id, name) {
      this.all_projet(id, name)
    },
    suteH (id, name) {
      this.all_projet(id, name)
    },
    suteJ (id, name) {
      this.all_projet(id, name)
    },
    suteK (id, name) {
      this.all_projet(id, name)
    },
    suteL (id, name) {
      this.all_projet(id, name)
    },
    suteM (id, name) {
      this.all_projet(id, name)
    },
    suteN (id, name) {
      this.all_projet(id, name)
    },
    suteO (id, name) {
      this.all_projet(id, name)
    },
    suteP (id, name) {
      this.all_projet(id, name)
    },
    suteQ (id, name) {
      this.all_projet(id, name)
    },
    suteR (id, name) {
      this.all_projet(id, name)
    },
    suteS (id, name) {
      this.all_projet(id, name)
    },
    suteU (id, name) {
      this.all_projet(id, name)
    },
    suteV (id, name) {
      this.all_projet(id, name)
    },
    suteI (id, name) {
      this.all_projet(id, name)
    },
    suteT (id, name) {
      this.all_projet(id, name)
    },
    suteW (id, name) {
      this.all_projet(id, name)
    },
    suteX (id, name) {
      this.all_projet(id, name)
    },
    suteY (id, name) {
      this.all_projet(id, name)
    },
    suteZ (id, name) {
      this.all_projet(id, name)
    }
  }
}
</script>

<style scoped>
  /*#A,#B,#C,#D,#E,#F,#G,#H,#I,#G,#Q,#O,#M,#N,#O,#P,#Q,#R,#S,#U,#V,#W,#S,#Y,#Z,#T{padding-top: 47px}*/
  .right{list-style: none;position: fixed;right: 0px;line-height: 26px;top: 5%;padding: 0 20px;/*height: 416px;overflow: auto*/}
  .mui-bar-nav~.mui-content{padding-top: 31px!important;}
  .mui-table-view{position: absolute;width: 100%}
  .app{margin-bottom: 0}
  .siteAColor{background: #e3e3e3;padding: 10px 15px;font-size: 15px;line-height: 24px}
</style>
