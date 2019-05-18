<template>
    <div class="money_entry">
11
    </div>
</template>

<script>
export default {
  name: 'money_sale_entry',
  data () {
    return {
      msg: [
        { href: 'customer_entry', ImgArr: require('../image/bi.png'), text: '客户录入' },
        { href: 'customer_statistics', ImgArr: require('../image/data.png'), text: '客户统计' },
        { href: 'customer_follow_up', ImgArr: require('../image/liaotian.png'), text: '客户跟进' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  @import "../css/public.css";
</style>
