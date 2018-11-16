<template>
  <div class="calculator-item">
    <div class="calculator-item-title">{{title}}:</div>
    <div class="calculator-item-data">
      <span class="specific-data">{{data}}</span>
      <span class="data-unit">{{unit}}</span>
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
.calculator-item{
  .home-common-flex;
  padding: 11px 0;
  border-bottom: 2px solid #d0d5e7;
  .calculator-item-title{
    .home-common-title-font;
  }
  .calculator-item-data{
    .specific-data{
      .home-commom-data-font;
      margin-right: 10px;
    }
    .data-unit{
      .home-common-title-font;
      display: inline-block;
      width: 40px;
    }
  }
}
</style>
