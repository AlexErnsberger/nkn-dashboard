<template>
  <div class="nb-home-main">
    <div class="nkn-currency">
      <currency-plugin class="size" title="Balance" data="18000.0000" unit="NKN"></currency-plugin>
      <currency-plugin class="size" title="Mining Reward" data="20000.0000" unit="NKN"></currency-plugin>
      <currency-plugin class="size" title="NKN/USDT Price" data="0.05100" unit="USDT"></currency-plugin>
      <currency-plugin class="size" title="NKN/ETH Price" data="0.0002210" unit="ETH"></currency-plugin>
    </div>
    <div class="nkn-block">
      <block-plugin title="Current Height" data="5707446"></block-plugin>
      <block-plugin title="Current Transection" data="5707446"></block-plugin>
      <block-plugin title="Average Block Time" data="10s"></block-plugin>
      <block-plugin title="Total Node" data="1000"></block-plugin>
      <block-plugin title="Version Info" data="V 1.0"></block-plugin>
    </div>
    <div class="nkn-node">
      <node-plugin title="My Node:" data="20"></node-plugin>
      <node-plugin title="SyncStarted" data="2" type="SyncStarted"></node-plugin>
      <node-plugin title="SyncFinished" data="2" type="SyncFinished"></node-plugin>
      <node-plugin title="PersistFinished" data="2" type="PersistFinished"></node-plugin>
      <node-plugin title="Stopped" data="2" type="Stopped"></node-plugin>
    </div>
  </div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
export default {
  name:'home-main',
  components: {
    CurrencyPlugin, BlockPlugin, NodePlugin
  }
}
</script>

<style lang="less" scoped>
.nb-home-main{
  width: 928px;
  .nkn-currency{
    .home-common-flex;
    .size{
      width: 220px;
    }
  }
  .nkn-block{
    .home-common-bg;
    .mixin-boxshadow;
    .home-common-flex;
    margin-top: 16px;
  }
  .nkn-node{
    .home-common-bg;
    .mixin-boxshadow;
    .home-common-flex;
    margin-top: 16px;
  }
}
</style>
