<template>
<div class="block-plugin">
  <div class="block-title">{{title}}</div>
  <div v-if='!small' class="block-data">{{data}}</div>
    <div v-else class="block-data-smallsize">{{data}}</div>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: [String, Number],
    small: Boolean
  }
}
</script>

<style lang="less" scoped>
.block-plugin {
  .block-title {
    .home-common-title-font;
  }

  .block-data,
  .block-data-smallsize {
    margin-top: 16px;
  }

  .block-data {
    .home-commom-data-font;
  }

  .block-data-smallsize {
    .home-commom-data-font;
    font-size: 14px;
  }
}
</style>
