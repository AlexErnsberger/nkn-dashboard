<template>
<div class="nb-home-node home-component-position">
  <div class="my-node-operate">
    <node-info-plugin></node-info-plugin>
  </div>
  <div class="my-node-status home-info-seperate">
    <node-status-plugin></node-status-plugin>
  </div>
  <div class="my-node-info home-info-seperate">
    <block-plugin :title="$t('homeCommon.nodeCount')" :data="checkNull(NKNGlobalInfo, 'nodeCount')" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeCommon.version')" :data="checkNull(NKNGlobalInfo, 'version')" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeCommon.relayedTransactions')" :data="checkNull(NKNGlobalInfo, 'relayedTransactions')" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeCommon.connectedClient')" :data="checkNull(NKNGlobalInfo, 'connectedClient')" class="home-node-block-plugin-width"></block-plugin>
  </div>
  <div class="my-node-netinfo home-info-seperate">
    <block-plugin :title="$t('homeNode.nodeIP')" :data="checkNull(nodeDetail,'nodeIP')" class="home-node-block-plugin-width" small></block-plugin>
    <block-plugin :title="$t('homeNode.chordIP')" :data="checkNull(nodeDetail,'chordIP')" class="home-node-block-plugin-width" small></block-plugin>
    <block-plugin :title="$t('homeNode.webSocket')" :data="checkNull(nodeDetail,'webSocket')" class="home-node-block-plugin-width"></block-plugin>
    <block-plugin :title="$t('homeNode.jsonrpc')" :data="checkNull(nodeDetail,'jsonrpc')" class="home-node-block-plugin-width"></block-plugin>
  </div>
  <div class="my-node-id home-info-seperate">
    <block-plugin :title="$t('homeNode.nodeID')" :data="checkNull(currentNode,'id')" small></block-plugin>
  </div>
  <div class="my-node-chrod  home-info-seperate">
    <block-plugin :title="$t('homeNode.chordID')" :data="checkNull(nodeDetail,'chordID')" small></block-plugin>
  </div>
  <div class="my-neighbor-info home-info-seperate">
    <table-plugin class="my-node-neighbor home-node-tablelist-size" :title="$t('homeNode.nodeNeighborTable.title')" :colHeader1="$t('homeNode.nodeNeighborTable.col1')" :colHeader2="$t('homeNode.nodeNeighborTable.col2')" :colHeader3="$t('homeNode.nodeNeighborTable.col3')" :data="checkNull(nodeDetail,'neighborNode', 'array')"></table-plugin>
    <table-plugin class="my-chrod-neighbor home-node-tablelist-size" :title="$t('homeNode.chordNeighborTable.title')" :colHeader1="$t('homeNode.chordNeighborTable.col1')" :colHeader2="$t('homeNode.chordNeighborTable.col2')" :colHeader3="$t('homeNode.chordNeighborTable.col3')" :data="checkNull(nodeDetail,'neighborChrod', 'array')"></table-plugin>
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
import checkNullMix from '@/assets/js/mixin/checkNull'
import nodeSetMix from '@/assets/js/mixin/nodeSet'
import { mapGetters } from 'vuex'

export default {
  components: {
    NodeInfoPlugin,
    NodePlugin,
    BlockPlugin,
    TablePlugin,
    NodeStatusPlugin,
    CommonLoading
  },
  mixins: [checkNullMix, nodeSetMix],
  data () {
    return {
      nodeDetail: null
    }
  },
  computed: {
    ...mapGetters({
      NKNGlobalInfo: 'getGlobalInfo'
    })
  },
  methods: {
    getNodeDetail (node) {
      this.$http.nodeDetail(this, {nodeId: node.id}, (res) => {
        let data = res.data
        if (res.status) {
          this.nodeDetail = data
        }
      })
    }
  },
  watch: {
    currentNode () {
      if (this.currentNode) {
        this.getNodeDetail(this.currentNode)
      }
    }
  },
  mounted () {
    if (this.currentNode) {
      this.getNodeDetail(this.currentNode)
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
