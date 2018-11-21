<template>
<div class="nb-home-node home-component-position">
  <div class="my-node-operate">
    <node-info-plugin :nodeList="nodeList"></node-info-plugin>
  </div>
  <div class="my-node-status home-info-seperate">
    <node-status-plugin></node-status-plugin>
  </div>
  <div class="my-node-info home-info-seperate">
    <block-plugin :title="$t('homeCommon.nodeCount')" data="1000" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeCommon.version')" data="1.0" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeCommon.relayedTransactions')" data="120" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeCommon.connectedClient')" data="6" class="home-node-block-plugin-width"></block-plugin>
  </div>
  <div class="my-node-netinfo home-info-seperate">
    <block-plugin :title="$t('homeNode.nodeIP')" data="192.168.1.23" class="home-node-block-plugin-width" small></block-plugin>
    <block-plugin :title="$t('homeNode.chordIP')" data="192.168.1.23" class="home-node-block-plugin-width" small></block-plugin>
    <block-plugin :title="$t('homeNode.webSocket')" data="120" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeNode.jsonrpc')" data="6" class="home-node-block-plugin-width"></block-plugin>
  </div>
  <div class="my-node-id home-info-seperate">
    <block-plugin :title="$t('homeNode.nodeID')" data="AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6" small></block-plugin>
  </div>
  <div class="my-node-chrod  home-info-seperate">
    <block-plugin :title="$t('homeNode.chordID')" data="AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6" small></block-plugin>
  </div>
  <div class="my-neighbor-info home-info-seperate">
    <table-plugin class="my-node-neighbor home-node-tablelist-size" :title="$t('homeNode.nodeNeighborTable.title')" :colHeader1="$t('homeNode.nodeNeighborTable.col1')" :colHeader2="$t('homeNode.nodeNeighborTable.col2')" :colHeader3="$t('homeNode.nodeNeighborTable.col3')" :data="testNodeList"></table-plugin>
    <table-plugin class="my-chrod-neighbor home-node-tablelist-size" :title="$t('homeNode.chordNeighborTable.title')" :colHeader1="$t('homeNode.chordNeighborTable.col1')" :colHeader2="$t('homeNode.chordNeighborTable.col2')" :colHeader3="$t('homeNode.chordNeighborTable.col3')" :data="testChrodList"></table-plugin>
  </div>
  <common-loading v-if="false"></common-loading>
</div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonmodules/NodeInfoPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import TablePlugin from '@/components/home/plugins/TablePlugin.vue'
import NodeStatusPlugin from '@/components/home/commonmodules/NodeStatusPlugin.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
export default {
  components: {
    NodeInfoPlugin,
    NodePlugin,
    BlockPlugin,
    TablePlugin,
    NodeStatusPlugin,
    CommonLoading
  },
  data () {
    return {
      nodeList: [
        'Node #8', 'Node #2', 'Node #3'
      ],
      testNodeList: [],
      testChrodList: []
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-node {
  .my-node-operate {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .my-node-status,
  .my-node-info,
  .my-node-netinfo,
  .my-node-id,
  .my-node-chrod {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .my-node-info,
  .my-node-netinfo,
  .my-node-id,
  .my-node-chrod {
    .home-common-flex;
  }

  .my-neighbor-info {
    .home-common-flex;

    .my-node-neighbor,
    .my-chrod-neighbor {
      .home-common-bg;
      .mixin-boxshadow;
    }
  }
}
</style>
