<template>
<div class="nb-home-log home-component-position">
  <div class="my-node">
    <node-info-plugin :nodeList="nodeList"></node-info-plugin>
  </div>
  <div class="nb-home-log-content home-info-seperate">
    <log-plugin></log-plugin>
  </div>
  <common-loading v-if="true"></common-loading>
</div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonplugins/NodeInfoPlugin.vue'
import LogPlugin from '@/components/home/homelog/plugins/LogPlugin.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
export default {
  components: {
    NodeInfoPlugin,
    LogPlugin,
    CommonLoading
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
}
</style>
