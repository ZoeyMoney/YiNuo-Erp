//全局组件调用 button
import button_save from '../VueComponents/button_save'
const buttonSave={
  install:function (Vue) {
    Vue.component('buttonSave',button_save)
  }
}
export default buttonSave
