<template>
<div class="common-node-status">
  <node-plugin :title="$t('nodeCommon.myNodeCount')" data="20"></node-plugin>
  <node-plugin :title="$t('nodeCommon.SyncStarted')" :type="$t('nodeCommon.SyncStarted')" data="2"></node-plugin>
  <node-plugin :title="$t('nodeCommon.SyncFinished')" :type="$t('nodeCommon.SyncFinished')" data="2"></node-plugin>
  <node-plugin :title="$t('nodeCommon.PersistFinished')" :type="$t('nodeCommon.PersistFinished')" data="2"></node-plugin>
  <node-plugin :title="$t('nodeCommon.Stopped')" :type="$t('nodeCommon.Stopped')" data="2"></node-plugin>
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
.common-node-status {
  .home-common-flex;
}
</style>
