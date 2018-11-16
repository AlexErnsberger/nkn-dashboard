<template>
  <div class="nb-home-node">
    <div class="my-node-operate">
      <node-info-plugin :nodeList="nodeList"></node-info-plugin>
    </div>
    <div class="my-node-status">
      <node-plugin title="My Node Status" data="20"></node-plugin>
      <node-plugin title="SyncStarted" data="2" type="SyncStarted"></node-plugin>
      <node-plugin title="SyncFinished" data="2" type="SyncFinished"></node-plugin>
      <node-plugin title="PersistFinished" data="2" type="PersistFinished"></node-plugin>
      <node-plugin title="Stopped" data="2" type="Stopped"></node-plugin>
    </div>
    <div class="my-node-info">
      <block-plugin title="Total Node" data="1000"></block-plugin>
      <block-plugin title="Node Version" data="1.0"></block-plugin>
      <block-plugin title="Relayed Transactions" data="120"></block-plugin>
      <block-plugin title="Connected Client" data="6"></block-plugin>
    </div>
    <div class="my-node-netinfo">
      <block-plugin title="Node IP" data="192.168.1.23" small></block-plugin>
      <block-plugin title="Chord" data="1.0"></block-plugin>
      <block-plugin title="Websocket" data="120"></block-plugin>
      <block-plugin title="Json rpc" data="6"></block-plugin>
    </div>
    <div class="my-node-id">
      <block-plugin title="Node ID" data="AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6" small></block-plugin>
    </div>
    <div class="my-node-chrod">
      <block-plugin title="Chrod ID" data="AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6AKBSQRCtRwe4yj2rU1sBoQQ5sVMhhspri6" small></block-plugin>
    </div>
    <div class="my-neighbor-info">
      <table-plugin class="my-node-neighbor" title="Node Neighbor" colHeader1="Node ID" colHeader2="Node IP" colHeader3="Port"  :data="testNodeList" ></table-plugin>
      <table-plugin class="my-chrod-neighbor" title="Chrod Neighbor" colHeader1="Chrod ID" colHeader2="Chrod IP" colHeader3="Port"  :data="testChrodList" ></table-plugin>      
    </div>
  </div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonplugins/NodeInfoPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import TablePlugin from '@/components/home/plugins/TablePlugin.vue'
export default {
  components: {
    NodeInfoPlugin, NodePlugin, BlockPlugin, TablePlugin
  },
  data () {
    return {
      nodeList: [
        'Node #8','Node #2','Node #3'
      ],
      testNodeList: [],
      testChrodList: []
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-node{
  width: 928px;
  .my-node-operate{
    .home-common-bg;
    .mixin-boxshadow;
  }
  .my-node-status, .my-node-info, .my-node-netinfo, .my-node-id, .my-node-chrod{
    .home-common-bg;
    .mixin-boxshadow;
    .home-common-flex;
  }
  .my-node-info > div, .my-node-netinfo > div{
    width: 200px;
  }
  .my-neighbor-info {
     .home-common-flex;
     .my-node-neighbor, .my-chrod-neighbor{
       width: 455px; height: 350px;
       .home-common-bg;
      .mixin-boxshadow;
     }
  }
  &>div+div{
    margin-top: 16px;
  }
}
</style>
