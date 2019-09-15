<template>
  <div id="app">
    <router-view v-if="isRouter" />
  </div>
</template>

<script>
export default {
  name: 'app',
  provide(){  //局部刷新
    return{
      reload:this.reload
    }
  },
  data () {
    return {
      isRouter:true,
    }
  },
  created () {
    try {
      document.body.removeChild(document.getElementById('loading'))
      setTimeout(function () {
        document.getElementById('app').style.display = 'block'
      }, 500)
    } catch (e) {}
    /* console.log("%c ", "padding:112px 150px;background:url('http://pic.962.net/up/2018-8/2018828124514356.png') no-repeat;");
        console.log("%c ", "padding:50px 150px;text-align:center;background:url('https://imgsa.baidu.com/forum/w%3D580/sign=5741eb9eb13eb13544c7b7b3961fa8cb/dca0da95d143ad4b065881b68f025aafa50f06e1.jpg') no-repeat;"); */
  },
  methods: {
    //局部刷新方法
    reload(){
      this.isRouter = false
      this.$nextTick(function () {
        this.isRouter = true
      })
    },
  }
}
</script>

<style lang="scss">

</style>
