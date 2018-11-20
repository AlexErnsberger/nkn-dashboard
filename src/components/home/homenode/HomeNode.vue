<template>
<div class="nb-home-node">
  <div class="my-node-operate">
    <node-info-plugin :nodeList="nodeList"></node-info-plugin>
  </div>
  <div class="my-node-status home-info-seperate">
    <node-status-plugin></node-status-plugin>
  </div>
  <div class="my-node-info home-info-seperate">
    <block-plugin title="Total Node" data="1000" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin title="Node Version" data="1.0" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin title="Relayed Transactions" data="120" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin title="Connected Client" data="6" class="home-node-block-plugin-width"></block-plugin>
  </div>
  <div class="my-node-netinfo home-info-seperate">
    <block-plugin title="Node IP" data="192.168.1.23" class="home-node-block-plugin-width" small></block-plugin>
    <block-plugin title="Chord" data="1.0" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin title="Websocket" data="120" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin title="Json rpc" data="6" class="home-node-block-plugin-width"></block-plugin>
  </div>
  <div class="my-node-id home-info-seperate">
    <block-plugin title="Node ID" data="AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6" small></block-plugin>
  </div>
  <div class="my-node-chrod  home-info-seperate">
    <block-plugin title="Chrod ID" data="AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6" small></block-plugin>
  </div>
  <div class="my-neighbor-info home-info-seperate">
    <table-plugin class="my-node-neighbor home-node-tablelist-size" title="Node Neighbor" colHeader1="Node ID" colHeader2="Node IP" colHeader3="Port" :data="testNodeList"></table-plugin>
    <table-plugin class="my-chrod-neighbor home-node-tablelist-size" title="Chrod Neighbor" colHeader1="Chrod ID" colHeader2="Chrod IP" colHeader3="Port" :data="testChrodList"></table-plugin>
  </div>
</div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonplugins/NodeInfoPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import TablePlugin from '@/components/home/plugins/TablePlugin.vue'
import NodeStatusPlugin from '@/components/home/commonplugins/NodeStatusPlugin.vue'
export default {
  components: {
    NodeInfoPlugin,
    NodePlugin,
    BlockPlugin,
    TablePlugin,
    NodeStatusPlugin
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
