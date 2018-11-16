<template>
<div class="common-node-plugin">
  <node-plugin title="My Node" type="nodeList" :nodeList="nodeList"></node-plugin>
  <node-plugin title="SyncStarted" data="2" type="SyncStarted"></node-plugin>
  <node-plugin title="My Node" data="20" class="node-separate"></node-plugin>
  <node-plugin title="Add Node" type="nodeAdd" class="node-separate"></node-plugin>
  <node-plugin title="Delete Node" type="nodeDelete" class="node-separate"></node-plugin>
</div>
</template>

<script>
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
export default {
  components: {
    NodePlugin
  },
  props: {
    nodeList: Array
  }
}
</script>

<style lang="less" scoped>
.common-node-plugin {
  .home-common-flex;
}
</style>
