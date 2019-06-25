import Vue from 'vue'
Vue.filter('tosDate', function (data) {
  if (typeof data === 'undefined') {
    return ''
  } else {
    var yy = ''
    var ss = ''
    var dt = new Date(data)
    var y = dt.getFullYear()
    yy+=y
    ss+=yy.slice(2)
    var m = dt.getMonth() + 1
    var d = dt.getDate() - 1
    /* var t = dt.getHours();
              var MM =dt.getMinutes();
              var s = dt.getSeconds(); */
    return `${ss}-${m}-${d}`

  }

})
