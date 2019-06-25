<template>
    <div class="admin_task">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">任务统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--center-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>任务统计</h2>
          <p>Statistics on incentives</p>
        </div>
        <div class="mui-img">
          <div class="money_img">
            <router-link :to="{name:'task_people'}"><img :src="money_plus" alt="增加"></router-link>
          </div>
        </div>
      </div>
      <!--top-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <!--input_search-->
          <div class="mui-input-row input-top">
            <label>输入关键字</label>
            <input type="text" class="mui-input-clear" placeholder="请输入关键字" v-model="customer_name">
          </div>
        </form>
        <form class="mui-input-group black_mui">
          <div class="mui-input-row">
            <label>任务人</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in list_tesl" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>下达人</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in list_tesl" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row goOver">
            <label>起始时间</label>
            <input type="date" class="mui-input-clear">
            <span class="go-span"></span>
            <input type="date" class="mui-input-clear">
          </div>
          <div class="mui-input-row">
            <label>状态</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in list_data" :value="item.text">{{item.text}}</option>
            </select>
          </div>
        </form>
        <table>
          <tr>
            <th><span :style="peopleTenLeft">任务人</span></th>
            <th><span :style="peopleTenLeft">下达人</span></th>
            <th><span>任务详情</span></th>
            <th><span :style="leftPx">倒计时</span></th>
            <th><span :style="leftPx">状态</span></th>
          </tr>
          <tr>
            <td><span :style="tenPx">张三送</span></td>
            <td><span :style="tenPx">李四大</span></td>
            <td><span :style="centerPx">清理仓库</span></td>
            <td><span>1:18:50:35</span></td>
            <td><span>进行中</span></td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'admin_task',
    data(){
      return{
        customer_name:'',
        money_plus: require('../image/plus.png'),
        list_tesl:[
          {text:'张三'},
          {text:'李四'},
          {text:'王五'},
          {text:'奥利弗就会物理'},
        ],
        list_data:[
          {text:'进行中'},
          {text:'完成'},
          {text:'已超时'},
          {text:'超时完成'},
          ],
        listTable: '', // table

        tenPx:{
          display:'block',
          paddingLeft:'10px'
        },
        centerPx:{
          display:'block',
          textAlign:'center'
        },
        leftPx:{
          display:'block',
          textAlign:'left'
        },
        peopleTenLeft:{
          display:'block',
          textAlign:'left',
          paddingLeft:'10px'
        }
      }
    },
    created(){
    },
    methods:{

    }
  }
</script>

<style scoped>
  /*header*/
  .customer{flex: 1}
  .one-img{display: flex;}
  .money_img{width: 36px;padding-top: 37px;padding-right: 10px}
  .money_img a img{width: 100%;}
  select{font-size: 15px}
  /*form*/
  .black_mui{margin-top: 5px;}
  /*timeData*/
  .goOver{display: flex;}
  .goOver label{flex: 0.8;}
  .goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
  .goOver input{flex: 1;}
  /*table*/
  table{width: 100%;font-size: 15px;}
  table tr th{background-color: #DADADA;line-height: 32px}
  table tr {border-bottom: 1px solid rgb(218, 218, 218)}
</style>
