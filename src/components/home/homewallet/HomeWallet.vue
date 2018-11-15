<template>
  <div class="nb-home-wallet">
    <div class="my-node">
      <node-plugin title="My Node" type="nodeList" :nodeList="nodeList"></node-plugin>
      <node-plugin title="SyncStarted" data="2" type="SyncStarted"></node-plugin>
      <node-plugin title="My Node" data="20" class="node-separate"></node-plugin>
      <node-plugin title="Add Node" type="nodeAdd" class="node-separate"></node-plugin>
      <node-plugin title="Delete Node" type="nodeDelete" class="node-separate"></node-plugin>
    </div>
    <div class="my-wallet">
      <currency-plugin title="Balance" data="20000.0000" unit="NKN" style="width:262px;"></currency-plugin>
      <currency-plugin title="Mining Reward" data="20000.0000" unit="NKN" style="width:262px;"></currency-plugin>
      <currency-plugin title="Wallet Address" data="ADSAddsdsadDSSCSdsaDSDSdda" copy  style="width:372px;"></currency-plugin>
    </div>
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
  .my-wallet{
    .home-common-flex;

  }
  &>div+div{
    margin-top: 16px;
  }
}
</style>
