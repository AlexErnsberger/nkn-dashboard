<template>
<div class="currency-plugin">
  <div class="currency-header clearfix">
    <div class="currency-title">{{title}}</div>
    <button v-if="copy" class="currency-copy" v-clipboard:copy="data">
      <img src="../../../assets/img/icon/copy.png">
      <span>copy</span>
    </button>
  </div>
  <div class="currency-content clearfix">
    <div class="currency-data">{{data}}</div>
      <div v-if="unit" class="currency-unit">{{unit}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: String,
    unit: String,
    copy: Boolean
  }
}
</script>

<style lang="less" scoped>
.currency-plugin {
  .home-common-bg;
  .mixin-boxshadow;

  .currency-header {
    line-height: 12px;

    .currency-title {
      float: left;
      .home-common-title-font;
    }

    .currency-copy {
      float: right;
      cursor: pointer;
      outline: none;background:none;border:none;

      img {
        width: 10px;
        height: 10px;
        vertical-align: -2px;
      }

      span {
        color: @home-wallet-copy-color;
        font-size: 12px;
      }
    }
  }

  .currency-content {
    margin-top: 16px;
    line-height: 20px;

    .currency-data {
      .home-commom-data-font;
      float: left;
      word-break: break-all;
    }

    .currency-unit {
      .home-common-title-font;
      float: right;
      margin-top: 6px;
    }
  }
}
</style>
