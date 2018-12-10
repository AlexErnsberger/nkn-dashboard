<template>
<div class="log-list">
  <div class="log-title">{{$t('homeLog.title')}}</div>
  <div class="log-item" v-for="(log, idx) in logs" :key="idx">{{log}}</div>
</div>
</template>

<script>
export default {
  props: {
    logs: Array
  }
}
</script>

<style lang="less" scoped>
.log-list {
  height: 714px;
  overflow: auto;
  .scroll-bar-set;
  .log-title {
    .home-common-title-font;
    margin-bottom: 4px;
  }

  .log-item {
    padding: 16px 0;
    font-size: 14px;
    color: @si-color;
    border-bottom: 2px solid @home-common-border-color;
    word-wrap: break-word;
  }
}
</style>
