<template>
<div class="nb-home-main home-component-position">
  <div class="nkn-currency">
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.balance')" data="18000.0000" :unit="$t('unit.NKN')"></currency-plugin>
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.miningReward')" data="20000.0000" :unit="$t('unit.NKN')"></currency-plugin>
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.priceToUSTD')" data="0.05100" :unit="$t('unit.USDT')"></currency-plugin>
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.priceToETH')" data="0.0002210" :unit="$t('unit.ETH')"></currency-plugin>
  </div>
  <div class="nkn-block home-info-seperate">
    <block-plugin :title="$t('homeCommon.height')" data="5707446"></block-plugin>
    <block-plugin :title="$t('homeCommon.transection')" data="5707446"></block-plugin>
    <block-plugin :title="$t('homeCommon.averageBlockTime')" data="10s"></block-plugin>
    <block-plugin :title="$t('homeCommon.nodeCount')" data="1000"></block-plugin>
    <block-plugin :title="$t('homeCommon.version')" data="1.0"></block-plugin>
  </div>
  <div class="nkn-node home-info-seperate">
    <node-status-plugin></node-status-plugin>
  </div>
  <common-loading v-if="false"></common-loading>
</div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import NodeStatusPlugin from '@/components/home/commonmodules/NodeStatusPlugin.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
export default {
  components: {
    CurrencyPlugin,
    BlockPlugin,
    NodePlugin,
    NodeStatusPlugin,
    CommonLoading
  }
}
</script>

<style lang="less" scoped>
.nb-home-main {
  .nkn-currency {
    .home-common-flex;
  }
  .nkn-block{
    .home-common-flex;
  }
  .nkn-block,
  .nkn-node {
    .home-common-bg;
    .mixin-boxshadow;
  }
}
</style>
