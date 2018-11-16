<template>
<div class="calculator-block">
  <div class="calculator-block-title">{{title}}</div>
  <div class="calculator-block-content">
    <span class="calculator-block-order" v-if="hasOrder">1 block /</span>
    <span class="calculator-block-data">{{data}}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    data: String,
    hasOrder: Boolean
  }
}
</script>

<style lang="less" scoped>
.calculator-block {
  .calculator-block-title {
    .home-common-title-font;
    margin-bottom: 20px;
  }

  .calculator-block-content {
    width: 220px;
    border-bottom: 2px solid #d0d5e7;
    text-align: right;
    position: relative;

    span {
      display: inline-block;
      padding-bottom: 3px;
    }

    span.calculator-block-order {
      position: absolute;
      left: 0;
      bottom: 3px;
      .home-common-title-font;

      &::after {
        content: '';
        width: 70px;
        height: 10px;
        display: inline-block;
        background: @common-bg-color;
        position: absolute;
        left: 0;
        bottom: -10px;
      }
    }

    span.calculator-block-data {
      .home-commom-data-font;
    }
  }
}
</style>
