import Vue from 'vue'
Vue.filter('NoYes', function (data) {
  if (typeof data === 'undefined') {
    return '待确认'
  } else {
    var dt = new Date(data)
    var y = dt.getFullYear()
    var m = dt.getMonth() + 1
    var d = dt.getDate()
    /* var t = dt.getHours();
              var MM =dt.getMinutes();
              var s = dt.getSeconds(); */
    return `${y}-${m}-${d}`
  }
})
