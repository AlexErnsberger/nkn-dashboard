<template>
  <div class="currency-plugin">
    <div class="currency-title">{{title}}</div>
    <div class="currency-content clearfix">
      <div class="currency-data">{{data}}</div>
      <div class="currency-unit">{{unit}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: String,
    unit: String
  }
}
</script>

<style lang="less" scoped>
.currency-plugin{
  background: @common-bg-color;
  .mixin-boxshadow;
  padding: 20px;
  .currency-title{
    font-size: 14px;
    color:black;
    line-height: 1;
  }
  .currency-content{
    margin-top: 16px;
    .currency-data{
      font-size: 20px;
      color: @si-color;
      float: left;
      line-height: 1;
    }
    .currency-unit{
      font-size: 14px;
      color:black;
      float: right;
      margin-top: 6px;
      line-height: 1;
    }
  }
}
</style>
