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
  .home-common-bg;
  .mixin-boxshadow;
  .currency-title{
    .home-common-title-font;
  }
  .currency-content{
    margin-top: 16px;
    .currency-data{
      .home-commom-data-font;
      float: left;
    }
    .currency-unit{
      .home-common-title-font;
      float: right;
      margin-top: 6px;
    }
  }
}
</style>
