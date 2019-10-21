import Vue from 'vue'
import Router from 'vue-router'
import config from './js/index'
// import Login from './views/Login.vue' // 登录界面
// import Index from './views/Index.vue' // 九宫格
// import summary_entry from './views/summary_entry.vue' // 九宫格
// import Setting from './views/Setting' // 设置
// import SettingPwd from './views/SettingPwd' // 修改密码
// import SettingName from './views/SettingName' // 修改密码
// import money_sale from './views/money_sale' // 售后
// import After_sales_entry from './views/After_sales_entry' // 售后录入
// import After_sales_statistics from './views/After_sales_statistics' // 售后统计
// import Follow_up_after_sale from './views/Follow_up_after_sale' // 售后跟进
// import money_Responsible from './views/money_Responsible' // 责任人录入
// import Follow_up from './views/Follow_up' // 跟进人录入
// import customer_management from './views/customer_management.vue' // 客户管理
// import customer_entry from './views/customer_entry.vue' // 客户录入
// import customer_statistics from './views/customer_statistics.vue' // 客户统计
// import customer_follow_up from './views/customer_follow_up.vue' // 客户跟进
// import customer_Designer from './views/customer_Designer.vue' // 客户设计师添加
// import site_management from './views/site_management.vue' // 工地管理
// import site_entry from './views/site_entry' // 工地录入
// import site_statistics from './views/site_statistics' // 工地统计
// import site_after_sale from './views/site_after_sale' // 工地统计详情
// import site_log from './views/site_log' // 工地日志
// import site_Inspection from './views/site_Inspection' // 工地巡检
// import customer_details from './views/customer_details' // 客户详细
// import site_details from './views/site_details' // 售后详细
// import site_modify from './views/site_modify' // 修改信息
// import siteModify from './views/siteModify' // 工地修改
// import money_projet from './views/money_projet' // 项目录入
// import money_management from './views/money_management' // 财务管理
// import money_profit from './views/money_profit' // 利润统计
// import money_receivable from './views/money_receivable' // 应收统计
// import money_entry from './views/money_entry' // 应收录入
// import account_translation from './views/account_translation' // 余额
// import account_translation_one from './views/account_translation_one' // 应收余额
// import payable_money from './views/payable_money' // 应付统计
// import accounts_payable from './views/accounts_payable' // 应付录入
// import payable_entry from './views/payable_entry' // 应付余额
// import payable_pay from './views/payable_pay' // 应付余额
// import cash_flow from './views/cash_flow' // 现金流水
// import running_money from './views/running_money' // 流水
// import transfer_money from './views/transfer_money' // 转账
// import income from './views/income' // 收入
// import income_receive from './views/income_receive' // 收入
// import expenditure from './views/expenditure' // 支出
// import rate from './views/rate' // 费率录入
// import expenditure_receive from './views/expenditure_receive' // 转为应收
// import bank_card from './views/bank_card' // 银行卡录入
// import administrative from './views/administrative' // 行政管理
// import adminPunishment from './views/adminPunishment' // 行政处罚
// import company_announcement from './views/company_announcement' // 公司公告
// import announcement_entry from './views/announcement_entry' // 公告录入
// import Project_Reconciliation from './views/Project_Reconciliation' // 项目对账

Vue.use(Router)
const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/views/Login'], resolve)
    }, {
      path: '/Index',
      name: 'index',
      component: resolve => require(['@/views/Index'], resolve)
    }, {
      path: '/summary_entry',
      name: 'summary_entry',
      component: resolve => require(['@/views/summary_entry'], resolve)
    }, {
      path: '/Setting',
      name: 'Setting',
      component: resolve => require(['@/views/Setting'], resolve)
    }, {
      path: '/SettingPwd',
      name: 'SettingPwd',
      component: resolve => require(['@/views/SettingPwd'], resolve)
    }, {
      path: '/SettingName',
      name: 'SettingName',
      component: resolve => require(['@/views/SettingName'], resolve)
    }, {
      path: '/customer_management',
      name: 'customer_management',
      component: resolve => require(['@/views/customer_management'], resolve)
    }, {
      path: '/customer_entry',
      name: 'customer_entry',
      component: resolve => require(['@/views/customer_entry'], resolve)
    }, {
      path: '/customer_statistics',
      name: 'customer_statistics',
      component: resolve => require(['@/views/customer_statistics'], resolve)
    }, {
      path: '/customer_follow_up',
      name: 'customer_follow_up',
      component: resolve => require(['@/views/customer_follow_up'], resolve)
    }, {
      path: '/customer_Designer',
      name: 'customer_Designer',
      component: resolve => require(['@/views/customer_Designer'], resolve)
    }, {
      path: '/site_management',
      name: 'site_management',
      component: resolve => require(['@/views/site_management'], resolve)
    }, {
      path: '/site_log',
      name: 'site_log',
      component: resolve => require(['@/views/site_log'], resolve)
    }, {
      path: '/site_entry',
      name: 'site_entry',
      component: resolve => require(['@/views/site_entry'], resolve)
    }, {
      path: '/site_project_inspection',
      name: 'site_project_inspection',
      component: resolve => require(['@/views/site_project_inspection'], resolve)
    }, {
      path: '/customer_details',
      name: 'customer_details',
      component: resolve => require(['@/views/customer_details'], resolve)
    }, {
      path: '/site_modify',
      name: 'site_modify',
      component: resolve => require(['@/views/site_modify'], resolve)
    }, {
      path: '/site_after_sale',
      name: 'site_after_sale',
      component: resolve => require(['@/views/site_after_sale'], resolve)
    }, {
      path: '/money_management',
      name: 'money_management',
      component: resolve => require(['@/views/money_management'], resolve)
    }, {
      path: '/money_profit',
      name: 'money_profit',
      component: resolve => require(['@/views/money_profit'], resolve)
    }, {
      path: '/money_receivable',
      name: 'money_receivable',
      component: resolve => require(['@/views/money_receivable'], resolve)
    }, {
      path: '/Follow_up',
      name: 'Follow_up',
      component: resolve => require(['@/views/Follow_up'], resolve)
    }, {
      path: '/money_entry',
      name: 'money_entry',
      component: resolve => require(['@/views/money_entry'], resolve)
    }, {
      path: '/account_translation',
      name: 'account_translation',
      component: resolve => require(['@/views/account_translation'], resolve)
    }, {
      path: '/account_translation_one',
      name: 'account_translation_one',
      component: resolve => require(['@/views/account_translation_one'], resolve)
    }, {
      path: '/money_sale',
      name: 'money_sale',
      component: resolve => require(['@/views/money_sale'], resolve)
    }, {
      path: '/After_sales_entry',
      name: 'After_sales_entry',
      component: resolve => require(['@/views/After_sales_entry'], resolve)
    }, {
      path: '/After_sales_statistics',
      name: 'After_sales_statistics',
      component: resolve => require(['@/views/After_sales_statistics'], resolve)
    }, {
      path: '/Follow_up_after_sale',
      name: 'Follow_up_after_sale',
      component: resolve => require(['@/views/Follow_up_after_sale'], resolve)
    }, {
      path: '/money_Responsible',
      name: 'money_Responsible',
      component: resolve => require(['@/views/money_Responsible'], resolve)
    }, {
      path: '/payable_money',
      name: 'payable_money',
      component: resolve => require(['@/views/payable_money'], resolve)
    }, {
      path: '/accounts_payable',
      name: 'accounts_payable',
      component: resolve => require(['@/views/accounts_payable'], resolve)
    }, {
      path: '/payable_entry',
      name: 'payable_entry',
      component: resolve => require(['@/views/payable_entry'], resolve)
    }, {
      path: '/payable_pay',
      name: 'payable_pay',
      component: resolve => require(['@/views/payable_pay'], resolve)
    }, {
      path: '/cash_flow',
      name: 'cash_flow',
      component: resolve => require(['@/views/cash_flow'], resolve)
    }, {
      path: '/running_money',
      name: 'running_money',
      component: resolve => require(['@/views/running_money'], resolve)
    }, {
      path: '/running_details',
      name: 'running_details',
      component: resolve => require(['@/views/running_details'], resolve)
    }, {
      path: '/transfer_money',
      name: 'transfer_money',
      component: resolve => require(['@/views/transfer_money'], resolve)
    }, {
      path: '/income',
      name: 'income',
      component: resolve => require(['@/views/income'], resolve)
    }, {
      path: '/income_receive',
      name: 'income_receive',
      component: resolve => require(['@/views/income_receive'], resolve)
    }, {
      path: '/expenditure',
      name: 'expenditure',
      component: resolve => require(['@/views/expenditure'], resolve)
    }, {
      path: '/rate',
      name: 'rate',
      component: resolve => require(['@/views/rate'], resolve)
    }, {
      path: '/expenditure_receive',
      name: 'expenditure_receive',
      component: resolve => require(['@/views/expenditure_receive'], resolve)
    }, {
      path: '/bank_card',
      name: 'bank_card',
      component: resolve => require(['@/views/bank_card'], resolve)
    }, {
      path: '/site_details',
      name: 'site_details',
      component: resolve => require(['@/views/site_details'], resolve)
    }, {
      path: '/siteModify',
      name: 'siteModify',
      component: resolve => require(['@/views/siteModify'], resolve)
    }, {
      path: '/site_statistics',
      name: 'site_statistics',
      component: resolve => require(['@/views/site_statistics'], resolve)
    }, {
      path: '/site_Inspection',
      name: 'site_Inspection',
      component: resolve => require(['@/views/site_Inspection'], resolve)
    }, {
      path: '/money_projet',
      name: 'money_projet',
      component: resolve => require(['@/views/money_projet'], resolve)
    }, {
      path: '/administrative',
      name: 'administrative',
      component: resolve => require(['@/views/administrative'], resolve)
    }, {
      path: '/adminPunishment',
      name: 'adminPunishment',
      component: resolve => require(['@/views/adminPunishment'], resolve)
    }, {
      path: '/company_announcement',
      name: 'company_announcement',
      component: resolve => require(['@/views/company_announcement'], resolve)
    }, {
      path: '/announcement_entry',
      name: 'announcement_entry',
      component: resolve => require(['@/views/announcement_entry'], resolve)
    }, {
      path: '/Project_Reconciliation',
      name: 'Project_Reconciliation',
      component: resolve => require(['@/views/Project_Reconciliation'], resolve)
    }, {
      path: '/admin_task',
      name: 'admin_task',
      component: resolve => require(['@/views/admin_task'], resolve)
    }, {
      path: '/task_people',
      name: 'task_people',
      component: resolve => require(['@/views/task_people'], resolve)
    }, {
      path: '/reward_statistics',
      name: 'reward_statistics',
      component: resolve => require(['@/views/reward_statistics'], resolve)
    }, {
      path: '/projet_modify',
      name: 'projet_modify',
      component: resolve => require(['@/views/projet_modify'], resolve)
    }, {
      path: '/userNameUpdate',
      name: 'userNameUpdate',
      component: resolve => require(['@/views/userNameUpdate'], resolve)
    }, {
      path: '/edit_bank',
      name: 'edit_bank',
      component: resolve => require(['@/views/edit_bank'], resolve)
    }, {
      path: '/profit_edit',
      name: 'profit_edit',
      component: resolve => require(['@/views/profit_edit'], resolve)
    }, {
      path: '/money_summary',
      name: 'money_summary',
      component: resolve => require(['@/views/money_summary'], resolve)
    }, {
      path: '/site_stage',
      name: 'site_stage',
      component: resolve => require(['@/views/site_stage'], resolve)
    }, {
      path: '/exit_money',
      name: 'exit_money',
      component: resolve => require(['@/views/exit_money'], resolve)
    }, {
      path: '/edit_message',
      name: 'edit_message',
      component: resolve => require(['@/views/edit_message'], resolve)
    }, {
      path: '/NewUserName',
      name: 'NewUserName',
      component: resolve => require(['@/views/NewUserName'], resolve)
    }, {
      path: '/receive_data',
      name: 'receive_data',
      component: resolve => require(['@/views/receive_data'], resolve)
    }, {
      path: '/paid_data',
      name: 'paid_data',
      component: resolve => require(['@/views/paid_data'], resolve)
    }, {
      path: '/approval',
      name: 'approval',
      component: resolve => require(['@/views/approval'], resolve)
    }, {
      path: '/task_admins',
      name: 'task_admins',
      component: resolve => require(['@/views/task_admins'], resolve)
    }, {
      path: '/informaction',
      name: 'informaction',
      component: resolve => require(['@/views/informaction'], resolve)
    }, {
      path: '/cash_assessment',
      name: 'cash_assessment',
      component: resolve => require(['@/views/cash_assessment'], resolve)
    }, {
      path: '/admin_log',
      name: 'admin_log',
      component: resolve => require(['@/views/admin_log'], resolve)
    }, {
      path: '/workers_enter',
      name: 'workers_enter',
      component:resolve=>require(['@/views/workers_enter'],resolve)
    }, {
      path: '/list_workers',
      name: 'list_workers',
      component:resolve=>require(['@/views/list_workers'],resolve)
    }, {
      path: '/log_admin',
      name: 'log_admin',
      component:resolve=>require(['@/views/log_admin'],resolve)
    }, {
      path: '/log_statistics',
      name: 'log_statistics',
      component:resolve=>require(['@/views/log_statistics'],resolve)
    }, {
      path: '/Workers_comments',
      name: 'Workers_comments',
      component:resolve=>require(['@/views/Workers_comments'],resolve)
    }, {
      path: '/Follow_people',
      name: 'Follow_people',
      component:resolve=>require(['@/views/Follow_people'],resolve)
    }, {
      path: '/newStting',
      name: 'newStting',
      component:resolve=>require(['@/views/newStting'],resolve)
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  if (to.fullPath != '/Login' || to.fullPath =='newStting') {
    next();
    if (!sessionStorage.getItem(config.KEY.CACHE_LOGIN_USER)) {
      return next('/Login')
    }
  }
  next()
})
