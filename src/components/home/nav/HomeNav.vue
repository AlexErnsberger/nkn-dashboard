<template>
<nav>
  <ul>
    <nav-plugins :tab="$namespace.HOME_MAIN" :tabActive="currentTab === $namespace.HOME_MAIN" :navTitle="$t('homeNav.tabHome')" :icon="require('../../../assets/img/icon/home.png')" :iconHover="require('../../../assets/img/icon/home-hover.png')" @select="choose" tag="li"></nav-plugins>
    <nav-plugins :tab="$namespace.HOME_WALLET" :tabActive="currentTab === $namespace.HOME_WALLET" :navTitle="$t('homeNav.tabWallet')" :icon="require('../../../assets/img/icon/wallet.png')" :iconHover="require('../../../assets/img/icon/wallet-hover.png')"  @select="choose" tag="li"></nav-plugins>
    <nav-plugins :tab="$namespace.HOME_NODE" :tabActive="currentTab === $namespace.HOME_NODE" :navTitle="$t('homeNav.tabNode')" :icon="require('../../../assets/img/icon/node.png')" :iconHover="require('../../../assets/img/icon/node-hover.png')"  @select="choose" tag="li"></nav-plugins>
    <nav-plugins :tab="$namespace.HOME_CALCULATOR" :tabActive="currentTab === $namespace.HOME_CALCULATOR" :navTitle="$t('homeNav.tabCalculator')" :icon="require('../../../assets/img/icon/calculator.png')" :iconHover="require('../../../assets/img/icon/calculator-hover.png')"  @select="choose" tag="li"></nav-plugins>
    <nav-plugins :tab="$namespace.HOME_LOG" :tabActive="currentTab === $namespace.HOME_LOG" :navTitle="$t('homeNav.tabLog')" :icon="require('../../../assets/img/icon/log.png')" :iconHover="require('../../../assets/img/icon/log-hover.png')"  @select="choose" tag="li"></nav-plugins>
  </ul>
</nav>
</template>

<script>
import NavPlugins from '@/components/home/nav/NavPlugins.vue'
export default {
  components: {
    NavPlugins
  },
  data () {
    return {
      currentTab: this.$namespace.HOME_MAIN
    }
  },
  methods: {
    choose (tab) {
      this.currentTab = tab
      this.$emit('check', tab)
    }
  }
}
</script>

<style lang="less" scoped>
nav {
  width: 356px;
  min-height: 559px;
  background: @common-bg-color;
  box-sizing: border-box;
  .mixin-boxshadow;

  ul {
    margin: 0;
    padding: 0;
    padding-top: 40px;

    li {
      list-style-type: none;
    }
  }
}
</style>
