const url = {
//  https://formattingclub.com/
  Login:'https://formattingclub.com/YiNuoLogin/Login',//登录
  clientAdd:'https://formattingclub.com/YiNuoLogin/Customer/AddCustomer',//客户录入
  clientProjet:'https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer',//项目名称
  clientFollowPerson:'https://formattingclub.com/YiNuoLogin/Customer/select_follow_person',//跟进人
  listName:'https://formattingclub.com/YiNuoLogin/Customer/SelectStylist', //设计师
  list:'https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer',  //客户统计数据
  // stageName:'https://formattingclub.com/YiNuoLogin/Customer/SelectStageName', //客户统计阶段
  modify_projet:'https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer',//客户详细
  modify_stage:'https://formattingclub.com/YiNuoLogin/Customer/selectStage',//客户详细信息
  projet_follow:'https://formattingclub.com/YiNuoLogin/Customer/SelectFollow',//项目详情-跟进信息
  clientUndata:'https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate',//客户修改信息
  clientDelect:'https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer',//客户详情删除
  clinetModify:'https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer',//客户修改内容
  clientAddFollow:'https://formattingclub.com/YiNuoLogin/Customer/AddFollow',//客户跟进录入
  DesignerAdd:'https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist',//设计师添加
  moneyProfit:'https://formattingclub.com/YiNuoLogin/fund/Select_profits',//利润统计数据
  moneyModify:'https://formattingclub.com/YiNuoLogin/fund/Select_sum_details',//利润详情
  moneyReceivable:'https://formattingclub.com/YiNuoLogin/fund/select_fund_sum',//应收应付汇总
  ClassSelect:'https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name',//类别选择
  moneyAddFund:'https://formattingclub.com/YiNuoLogin/fund/Add_Fund',//应收应付录入
  BankAdd:'https://formattingclub.com/YiNuoLogin/fund/AddBank',//银行卡录入
  AdminAnnouncement:'https://formattingclub.com/YiNuoLogin/notice/select_notice',//行政公告
  AnnouncementAdd:'https://formattingclub.com/YiNuoLogin/notice/addNotice',//行政公告添加
  moneyRunning:'https://formattingclub.com/YiNuoLogin/fund/select_detail',//现金流水数据
  bankCard:'https://formattingclub.com/YiNuoLogin/fund/select_bank',//银行卡
  moneyTransfer:'https://formattingclub.com/YiNuoLogin/fund/add_bank_deal',//转账保存
  moneyOutEnter:'https://formattingclub.com/YiNuoLogin/fund/Add_out_enter',//收入保存
  selectSerch:'https://formattingclub.com/YiNuoLogin/User/Select_accounting',//项目对账-查询
  listProjet:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer',//售后录入-项目名称
  AfterSaleAdd:'https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer',//售后录入-保存
  AfterStatistics:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer',//售后统计
  AfterListName:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist',//售后责任人
  AfterStage:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName',//售后阶段
  AfterSiteDetails:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer',//售后详细
  AfterSiteSlectStage:'https://formattingclub.com/YiNuoLogin/AfterSale/selectStage',// 售后详情客户信息
  AfterSiteFollow:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow',//售后详情跟进信息
  AfterSiteUpdate:'https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate',//售后详情修改记录
  AfterSiteDelete:'https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer',//售后删除
  AfterUpdata:'https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer',//售后修改信息保存
  AfterUpdata:'https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer',//售后修改信息保存
  AfterPerson:'https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person',//售后跟进
  AfterAdd:'https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow',//售后跟进保存
  projetAdd:'https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name',//项目录入
  AfterlistAdd:'https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist',//责任人添加
  AfterPersonAdd:'https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person',//跟进人添加
  ringNingDelect:'https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing',//流水删除
  Select_fund_person:'https://formattingclub.com/YiNuoLogin/fund/Select_fund_person',//收款人
  Update_Customer:'https://formattingclub.com/YiNuoLogin/Customer/Update_Customer',//  利润原始数据修改
  Update_fund_detail:'https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail',//应收应付修改
  Update_fund_details:'https://formattingclub.com/YiNuoLogin/fund/update_fund_details',//应收应付收款
  Delete_fund_detail:'https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details',//应收应付删除
  money_search:'https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money',//款项汇总
  money_refund:'https://formattingclub.com/YiNuoLogin/fund/money_refund',//流水收款
  newUserName:'https://formattingclub.com/YiNuoLogin/User/Add_User',//账户添加
  add_customer_person_fund:'https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund',//账户添加

}
module.exports = url
