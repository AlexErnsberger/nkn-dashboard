<template>
<div class="common-node-status">
  <node-plugin class="home-module-width" :title="$t('nodeCommon.myNodeCount')" :data="checkNull(myNodeInfo, 'myNodeCount')"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.SyncStarted')" type="status" subType="SyncStarted" :data="checkNull(myNodeInfo, 'SyncStarted')"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.SyncFinished')" type="status" subType="SyncFinished" :data="checkNull(myNodeInfo, 'SyncFinished')"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.PersistFinished')" type="status" subType="PersistFinished" :data="checkNull(myNodeInfo, 'PersistFinished')"></node-plugin>
  <node-plugin class="home-module-width" :title="$t('nodeCommon.Stopped')" type="status" subType="Stopped" :data="checkNull(myNodeInfo, 'Stopped')"></node-plugin>
</div>
</template>

<script>
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import checkNullMix from '@/assets/js/mixin/checkNull'
import { mapGetters } from 'vuex'
export default {
  components: {
    NodePlugin
  },
  mixins: [checkNullMix],
  computed: {
    ...mapGetters({
      myNodeInfo: 'getNodeInfo'
    })
  }
}
</script>

<style lang="less" scoped>
.common-node-status {
  .home-common-flex;
}
</style>
