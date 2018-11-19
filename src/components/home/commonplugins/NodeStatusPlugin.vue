<template>
  <div class="common-node-status">
    <node-plugin title="My Node" data="20"></node-plugin>
    <node-plugin title="SyncStarted" data="2" type="SyncStarted"></node-plugin>
    <node-plugin title="SyncFinished" data="2" type="SyncFinished"></node-plugin>
    <node-plugin title="PersistFinished" data="2" type="PersistFinished"></node-plugin>
    <node-plugin title="Stopped" data="2" type="Stopped"></node-plugin>
  </div>
</template>

<script>
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
export default {
  components: {
    NodePlugin
  }
}
</script>

<style lang="less" scoped>
.common-node-status{
  .home-common-flex;
}
</style>
