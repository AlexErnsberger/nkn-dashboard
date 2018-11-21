<template>
<div class="common-node-status">
  <node-plugin class="home-module-width" :title="$t('nodeCommon.myNodeCount')" data="20"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.SyncStarted')" type="status" subType="SyncStarted" data="2"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.SyncFinished')" type="status" subType="SyncFinished" data="2"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.PersistFinished')" type="status" subType="PersistFinished" data="2"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.Stopped')" type="status" subType="Stopped" data="2"></node-plugin>
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
