<template>
  <nav>
    <ul>
      <nav-plugins 
        option="Home" 
        :icon="require('../../../assets/img/icon/home.png')" 
        :iconHover="require('../../../assets/img/icon/home-hover.png')"
        :active="currentTab === 'Home'"
        @select="choose"
        tag="li"></nav-plugins>
      <nav-plugins 
        option="Wallet" 
        :icon="require('../../../assets/img/icon/wallet.png')" 
        :iconHover="require('../../../assets/img/icon/wallet-hover.png')"
        :active="currentTab === 'Wallet'"
        @select="choose"
        tag="li"></nav-plugins>
      <nav-plugins 
        option="Node" 
        :icon="require('../../../assets/img/icon/node.png')" 
        :iconHover="require('../../../assets/img/icon/node-hover.png')"
        :active="currentTab === 'Node'"
        @select="choose"
        tag="li"></nav-plugins>
      <nav-plugins 
        option="Calculator" 
        :icon="require('../../../assets/img/icon/calculator.png')" 
        :iconHover="require('../../../assets/img/icon/calculator-hover.png')"
        :active="currentTab === 'Calculator'"
        @select="choose"
        tag="li"></nav-plugins>
      <nav-plugins 
        option="Log" 
        :icon="require('../../../assets/img/icon/log.png')" 
        :iconHover="require('../../../assets/img/icon/log-hover.png')"
        :active="currentTab === 'Log'"
        @select="choose"
        tag="li"></nav-plugins>
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
      currentTab: 'Home'
    }
  },
  methods: {
    choose (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="less" scoped>
nav{
  width: 356px;
  min-height: 559px;
  background: @common-bg-color;
  box-sizing: border-box;
  .mixin-boxshadow;
  ul{
    margin: 0;padding: 0;
    padding-top: 40px;
    li{
      list-style-type: none;
    }
  }
}
</style>
