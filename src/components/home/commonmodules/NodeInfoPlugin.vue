<template>
<div class="common-node-plugin">
  <node-plugin :title="$t('nodeCommon.myNodeCount')" type="nodeList" :nodeList="nodeList" ></node-plugin>
  <node-plugin :title="$t('nodeCommon.SyncStarted')" type="status" subType="SyncStarted" class="node-flex-center"></node-plugin>
  <node-plugin :title="$t('nodeCommon.nodeAdd')" type="nodeAdd" class="node-separate"></node-plugin>
  <node-plugin :title="$t('nodeCommon.nodeDel')" type="nodeDelete" class="node-separate"></node-plugin>
</div>
</template>

<script>
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import CommonDialog from '@/components/base/CommonDialog.vue'
import DialogInput from '@/components/base/plugins/DialogInput.vue'
import DialogButton from '@/components/base/plugins/DialogButton.vue'
export default {
  components: {
    NodePlugin,
    CommonDialog,
    DialogInput,
    DialogButton
  },
  props: {
    nodeList: Array
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
