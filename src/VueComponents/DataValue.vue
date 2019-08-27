<template>
    <div class="DataValue">
      <div class="mui-input-row date">
        <label>日期</label>
        <template>
          <el-date-picker
            v-model="myValue"
            type="datetime"
            @focus="dataFocus"
            placeholder="选择日期时间">
          </el-date-picker>
          <!--<el-date-picker
            v-model="myValue"
            type="date"
            placeholder="选择日期">
          </el-date-picker>-->
        </template>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'DataValue',
    props:{
      value:{
        type:null
      }
    },
    data(){
      return{
        myValue:this.value
      }
    },
    watch:{
      value(newValue){
        this.myValue = newValue.toString()
      },
      myValue(newValue){
        this.$emit('input',newValue)
      }
    },
    methods:{
      dataFocus(){
        document.activeElement.blur();
      }
    }
  }
</script>

<style lang="scss">
  /*element*/
    .el-time-panel{width: 149px}
    .el-input__prefix{left: 139px}
    .el-input--prefix .el-input__inner{color: black;padding: 0}
</style>
