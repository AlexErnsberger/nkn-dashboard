<template>
  <div class="block-plugin">
    <div class="block-title">{{title}}</div>
    <div class="block-data">{{data}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: String
  }
}
</script>

<style lang="less" scoped>
.block-plugin{
  .block-title{
    .home-common-title-font;
  }
  .block-data{
    margin-top: 16px;
    .home-commom-data-font;
  }
}
</style>
