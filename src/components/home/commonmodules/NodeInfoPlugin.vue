<template>
<div class="common-node-plugin">
  <node-plugin :title="$t('nodeCommon.myNode')" type="nodeList"></node-plugin>
  <node-plugin :title="nodeTypeI18n" type="status" :subType="checkNull(currentNode, 'status')" class="node-flex-center"></node-plugin>
  <node-plugin :title="$t('nodeCommon.nodeAdd')" type="nodeAdd" class="node-separate"></node-plugin>
  <node-plugin :title="$t('nodeCommon.nodeDel')" type="nodeDelete" class="node-separate"></node-plugin>
</div>
</template>

<script>
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import CommonDialog from '@/components/base/CommonDialog.vue'
import DialogInput from '@/components/base/plugins/DialogInput.vue'
import DialogButton from '@/components/base/plugins/DialogButton.vue'
import { mapGetters } from 'vuex'
import checkNullMix from '@/assets/js/mixin/checkNull'
import NodeType from '@/assets/js/constant/nodeType'

export default {
  components: {
    NodePlugin,
    CommonDialog,
    DialogInput,
    DialogButton
  },
  props: {
    nodeList: Array
  },
  mixins: [checkNullMix],
  computed: {
    ...mapGetters({
      currentNode: 'getCurrentNode'
    }),
    nodeTypeI18n () {
      let status = this.checkNull(this.currentNode, 'status')
      switch (status) {
        case NodeType.syncStarted:
          return this.$t('nodeCommon.SyncStarted')
        case NodeType.syncFinished:
          return this.$t('nodeCommon.SyncFinished')
        case NodeType.persistFinished:
          return this.$t('nodeCommon.PersistFinished')
        case NodeType.stopped:
          return this.$t('nodeCommon.Stopped')
        default:
          return this.$t('nodeCommon.Stopped')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.common-node-plugin {
  .home-common-flex;
  align-items: center;
  &>div{
    width: 25%;
  }
  .node-flex-center{
    display: flex;
    justify-content: center;
  }
  .node-separate{
    padding: 8px 0;
    border-left: 2px solid @si-color;
    .node-flex-center;
  }
}
</style>
