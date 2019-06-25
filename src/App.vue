<template>
  <div id="app">
    <div class="loading"></div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    /*created () {
        console.log("%c ", "padding:112px 150px;background:url('http://pic.962.net/up/2018-8/2018828124514356.png') no-repeat;");
        console.log("%c ", "padding:50px 150px;text-align:center;background:url('https://imgsa.baidu.com/forum/w%3D580/sign=5741eb9eb13eb13544c7b7b3961fa8cb/dca0da95d143ad4b065881b68f025aafa50f06e1.jpg') no-repeat;","快说：你是不是爱上我了;我至今是单身哦、你有机会追上我");
    }*/
  }
</script>

<style lang="scss">
  .loading{background-image: url("image/loading.gif")}
</style>
