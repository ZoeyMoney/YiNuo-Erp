import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue' // 登录界面
import Index from './views/Index.vue' // 九宫格
import Setting from './views/Setting' // 设置
import SettingPwd from './views/SettingPwd' // 修改密码
import SettingName from './views/SettingName' // 修改密码
import money_sale from './views/money_sale' // 售后
import After_sales_entry from './views/After_sales_entry' // 售后录入
import After_sales_statistics from './views/After_sales_statistics' // 售后统计
import Follow_up_after_sale from './views/Follow_up_after_sale' // 售后跟进
import money_Responsible from './views/money_Responsible' // 责任人录入
import Follow_up from './views/Follow_up' // 跟进人录入
import customer_management from './views/customer_management.vue' // 客户管理
import customer_entry from './views/customer_entry.vue' // 客户录入
import customer_statistics from './views/customer_statistics.vue' // 客户统计
import customer_follow_up from './views/customer_follow_up.vue' // 客户跟进
import customer_Designer from './views/customer_Designer.vue' // 客户设计师添加
import site_management from './views/site_management.vue' // 工地管理
import site_entry from './views/site_entry' // 工地录入
import customer_details from './views/customer_details' // 客户详细
import site_details from './views/site_details' // 工地详细
import site_modify from './views/site_modify' // 修改信息
import siteModify from './views/siteModify' // 工地修改
import money_projet from './views/money_projet' // 项目录入
import money_management from './views/money_management' // 财务管理
import money_profit from './views/money_profit' // 利润统计
import money_receivable from './views/money_receivable' // 应收统计
import money_entry from './views/money_entry' // 应收录入
import account_translation from './views/account_translation' // 余额
import account_translation_one from './views/account_translation_one' // 应收余额
import payable_money from './views/payable_money' // 应付统计
import accounts_payable from './views/accounts_payable' // 应付录入
import payable_entry from './views/payable_entry' // 应付余额
import payable_pay from './views/payable_pay' // 应付余额
import cash_flow from './views/cash_flow' // 现金流水
import running_money from './views/running_money' // 流水
import transfer_money from './views/transfer_money' // 转账
import income from './views/income' // 收入
import income_receive from './views/income_receive' // 收入
import expenditure from './views/expenditure' // 支出
import expenditure_receive from './views/expenditure_receive' // 转为应收
import bank_card from './views/bank_card' // 银行卡录入
import administrative from './views/administrative' // 行政管理
import adminPunishment from './views/adminPunishment' // 行政处罚
import company_announcement from './views/company_announcement' // 公司公告
import announcement_entry from './views/announcement_entry' // 公告录入
import Project_Reconciliation from './views/Project_Reconciliation' // 项目对账

Vue.use(Router)
export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/Index',
      name: 'index',
      component: Index
    }, {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    }, {
      path: '/SettingPwd',
      name: 'SettingPwd',
      component: SettingPwd
    }, {
      path: '/SettingName',
      name: 'SettingName',
      component: SettingName
    }, {
      path: '/customer_management',
      name: 'customer_management',
      component: customer_management
    }, {
      path: '/customer_entry',
      name: 'customer_entry',
      component: customer_entry
    }, {
      path: '/customer_statistics',
      name: 'customer_statistics',
      component: customer_statistics
    }, {
      path: '/customer_follow_up',
      name: 'customer_follow_up',
      component: customer_follow_up
    }, {
      path: '/customer_Designer',
      name: 'customer_Designer',
      component: customer_Designer
    }, {
      path: '/site_management',
      name: 'site_management',
      component: site_management
    }, {
      path: '/site_entry',
      name: 'site_entry',
      component: site_entry
    }, {
      path: '/customer_details',
      name: 'customer_details',
      component: customer_details
    }, {
      path: '/site_modify',
      name: 'site_modify',
      component: site_modify
    },
    {
      path: '/money_management',
      name: 'money_management',
      component: money_management
    }, {
      path: '/money_profit',
      name: 'money_profit',
      component: money_profit
    }, {
      path: '/money_receivable',
      name: 'money_receivable',
      component: money_receivable
    }, {
      path: '/Follow_up',
      name: 'Follow_up',
      component: Follow_up
    }, {
      path: '/money_entry',
      name: 'money_entry',
      component: money_entry
    }, {
      path: '/account_translation',
      name: 'account_translation',
      component: account_translation
    }, {
      path: '/account_translation_one',
      name: 'account_translation_one',
      component: account_translation_one
    }, {
      path: '/money_sale',
      name: 'money_sale',
      component: money_sale
    }, {
      path: '/After_sales_entry',
      name: 'After_sales_entry',
      component: After_sales_entry
    }, {
      path: '/After_sales_statistics',
      name: 'After_sales_statistics',
      component: After_sales_statistics
    }, {
      path: '/Follow_up_after_sale',
      name: 'Follow_up_after_sale',
      component: Follow_up_after_sale
    }, {
      path: '/money_Responsible',
      name: 'money_Responsible',
      component: money_Responsible
    }, {
      path: '/payable_money',
      name: 'payable_money',
      component: payable_money
    }, {
      path: '/accounts_payable',
      name: 'accounts_payable',
      component: accounts_payable
    }, {
      path: '/payable_entry',
      name: 'payable_entry',
      component: payable_entry
    }, {
      path: '/payable_pay',
      name: 'payable_pay',
      component: payable_pay
    }, {
      path: '/cash_flow',
      name: 'cash_flow',
      component: cash_flow
    }, {
      path: '/running_money',
      name: 'running_money',
      component: running_money
    }, {
      path: '/transfer_money',
      name: 'transfer_money',
      component: transfer_money
    }, {
      path: '/income',
      name: 'income',
      component: income
    }, {
      path: '/income_receive',
      name: 'income_receive',
      component: income_receive
    }, {
      path: '/expenditure',
      name: 'expenditure',
      component: expenditure
    }, {
      path: '/expenditure_receive',
      name: 'expenditure_receive',
      component: expenditure_receive
    }, {
      path: '/bank_card',
      name: 'bank_card',
      component: bank_card
    }, {
      path: '/site_details',
      name: 'site_details',
      component: site_details
    }, {
      path: '/siteModify',
      name: 'siteModify',
      component: siteModify
    }, {
      path: '/money_projet',
      name: 'money_projet',
      component: money_projet
    }, {
      path: '/administrative',
      name: 'administrative',
      component: administrative
    }, {
      path: '/adminPunishment',
      name: 'adminPunishment',
      component: adminPunishment
    }, {
      path: '/company_announcement',
      name: 'company_announcement',
      component: company_announcement
    }, {
      path: '/announcement_entry',
      name: 'announcement_entry',
      component: announcement_entry
    }, {
      path: '/Project_Reconciliation',
      name: 'Project_Reconciliation',
      component: Project_Reconciliation
    }
    /* {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:''
        }
      ]
    } */
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
