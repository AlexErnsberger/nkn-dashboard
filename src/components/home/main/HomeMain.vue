<template>
<div class="nb-home-main home-component-position">
  <div class="nkn-currency">
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.balance')" :data="this.myBalance" :unit="$t('unit.NKN')"></currency-plugin>
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.miningReward')" :data="this.myAward" :unit="$t('unit.NKN')"></currency-plugin>
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.priceToUSTD')" :data="checkNull(NKNGlobalInfo, 'priceToUSTD')" :unit="$t('unit.USDT')"></currency-plugin>
    <currency-plugin class="home-main-currency-plugin-width" :title="$t('homeCommon.priceToETH')" :data="checkNull(NKNGlobalInfo, 'priceToETH')" :unit="$t('unit.ETH')"></currency-plugin>
  </div>
  <div class="nkn-block home-info-seperate">
    <block-plugin class="home-module-width" :title="$t('homeCommon.height')" :data="checkNull(NKNGlobalInfo, 'height')"></block-plugin>
    <block-plugin class="home-module-width" :title="$t('homeCommon.transection')" :data="checkNull(NKNGlobalInfo, 'transection')"></block-plugin>
    <block-plugin class="home-module-width" :title="$t('homeCommon.averageBlockTime')" :data="checkNull(NKNGlobalInfo, 'averageBlockTime')"></block-plugin>
    <block-plugin class="home-module-width" :title="$t('homeCommon.nodeCount')" :data="checkNull(NKNGlobalInfo, 'nodeCount')"></block-plugin>
    <block-plugin class="home-module-width" :title="$t('homeCommon.version')" :data="checkNull(NKNGlobalInfo, 'version')"></block-plugin>
  </div>
  <div class="nkn-node home-info-seperate">
    <node-status-plugin></node-status-plugin>
  </div>
  <common-loading v-if="$store.getters.getLoading"></common-loading>
</div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import NodePlugin from '@/components/home/plugins/NodePlugin.vue'
import NodeStatusPlugin from '@/components/home/commonmodules/NodeStatusPlugin.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
import checkNullMix from '@/assets/js/mixin/checkNull'
import { mapGetters } from 'vuex'

export default {
  components: {
    CurrencyPlugin,
    BlockPlugin,
    NodePlugin,
    NodeStatusPlugin,
    CommonLoading
  },
  mixins: [checkNullMix],
  mounted () {
    this.$store.commit('setLoading', true)
    this.reqBatchHandle()
  },
  data () {
    return {
      myBalance: '',
      myAward: ''
    }
  },
  computed: {
    ...mapGetters({
      NKNGlobalInfo: 'getGlobalInfo'
    })
  },
  methods: {
    getMyInfo () {
      this.$http.myInfo(this, (res) => {
        if (res.status) {
          let data = res.data
          this.myBalance = data.balance
          this.myAward = data.miningAward
        } else {
          alert('its myInfo')
        }
      })
    },
    getGlobalInfo () {
      this.$http.globalInfo(this, (res) => {
        if (res.status) {
          let data = res.data
          this.$store.commit('setGlobalNKNInfo', data)
        } else {
          alert('its globalInfo')
        }
      })
    },
    getMyNodeInfo () {
      this.$http.myNodeInfo(this, (res) => {
        if (res.status) {
          let data = res.data
          this.$store.commit('setNodeInfo', data)
        } else {
          alert('its myNodeInfo')
        }
      })
    },
    reqBatchHandle () {
      this.$http.reqBatch(this, [this.getMyInfo(), this.getMyNodeInfo(), this.getGlobalInfo()], () => {
        this.$store.commit('setLoading', false)
      })
    }
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
