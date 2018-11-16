<template>
<div class="nb-home-log">
  <div class="my-node">
    <node-info-plugin :nodeList="nodeList"></node-info-plugin>
  </div>
  <div class="nb-home-log-content">
    <log-plugin></log-plugin>
  </div>
</div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonplugins/NodeInfoPlugin.vue'
import LogPlugin from '@/components/home/homelog/plugins/LogPlugin.vue'
export default {
  components: {
    NodeInfoPlugin,
    LogPlugin
  },
  data () {
    return {
      nodeList: [
        'Node #8', 'Node #2', 'Node #3'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-log {
  .my-node {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .nb-home-log-content {
    .home-common-bg;
    .mixin-boxshadow;
  }

  &>div+div {
    margin-top: 16px;
  }
}
</style>
