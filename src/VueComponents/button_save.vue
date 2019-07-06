<template>
    <div class="button_save">
      <div class="mui-input-row form-btn">
        <button type="button" id="btn" class="mui-btn mui-btn-blue">保存</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'button_save'
  }
</script>

<style scoped>
  @import "../css/public.css";
  /*按钮*/
  .mui-radio{overflow: visible;}
  .mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
