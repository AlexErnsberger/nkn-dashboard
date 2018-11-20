<template>
<div class="common-node-plugin">
  <node-plugin title="My Node" type="nodeList" :nodeList="nodeList"></node-plugin>
  <node-plugin title="SyncStarted" type="SyncStarted"></node-plugin>
  <node-plugin title="Add Node" type="nodeAdd" class="node-separate"></node-plugin>
  <node-plugin title="Delete Node" type="nodeDelete" class="node-separate"></node-plugin>
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
  &>div{
    width: 25%;
  }
  .node-separate{
    padding: 8px 14px;
    border-left: 2px solid @si-color;
  }
}
</style>
