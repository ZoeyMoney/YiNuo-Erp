import Vue from 'vue'
Vue.filter('tosDate', function (data) {
  if (typeof data === 'undefined') {
    return ''
  } else {
    var yy = ''
    var ss = ''

    /* var dateStr = data.split("")
    var strGMT = dateStr[0]+""+dateStr[1]+""+dateStr[2]+""+dateStr[5]+""+dateStr[3]+" GMT+0800"
    var dt = new Date(Date.parse(strGMT));
    console.log(dt) */
    var dt = new Date(data)
    /* var y = dt.getFullYear()
    yy+=y
    ss+=yy.slice(2) */
    var m = dt.getMonth() + 1
    var d = dt.getDate()
    /* dt.setDate(dt.getDate()-1)
    var d = dt.getDate() */
    /* var t = dt.getHours();
              var MM =dt.getMinutes();
              var s = dt.getSeconds(); */
    return `${m}-${d}`
  }
})
