<template>
<div class="currency-plugin">
  <div class="currency-header clearfix">
    <div class="currency-title">{{title}}</div>
    <div v-if="copy" class="currency-copy">
      <img src="../../../assets/img/icon/copy.png">
      <span>copy</span>
    </div>
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
      cursor: pointer;
      float: right;

      img {
        width: 10px;
        height: 10px;
        vertical-align: -2px;
      }

      span {
        color: #318bec;
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
    }

    .currency-unit {
      .home-common-title-font;
      float: right;
      margin-top: 6px;
    }
  }
}
</style>
