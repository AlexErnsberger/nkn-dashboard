<template>
  <div class="nb-home-wallet">
    <div class="my-node">
      <node-plugin title="My Node" type="list" :nodeList="nodeList"></node-plugin>
    </div>
    <div class="my-wallet"></div>
    <div class="nkn-transfer"></div>
    <div class="transfer-history"></div>
    <div class="mining-reward"></div>
  </div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
export default {
  name:'home-wallet',
  components: {
    CurrencyPlugin, BlockPlugin, NodePlugin
  },
  data () {
    return {
      nodeList: [
        'Node #8','Node #2','Node #3'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-wallet{
  width: 928px;
  .my-node{
    .home-common-bg;
    .mixin-boxshadow;
    .home-common-flex;
  }
}
</style>
