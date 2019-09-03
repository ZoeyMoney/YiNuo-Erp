import Vue from 'vue'
Vue.filter('negative', function (value) {
  value = value.toString()
  return value.replace(/[-]/g, '')
})
