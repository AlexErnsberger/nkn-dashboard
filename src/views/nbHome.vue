<template>
  <div class="nb-content-container clearfix">
    <div class="nb-home-nv">
      <home-nav @check="checkDetail"></home-nav>
    </div>
    <div class="nb-home-content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import HomeNav from '@/components/home/nav/HomeNav.vue'
import Home from '@/components/home/homemain/HomeMain.vue'
import Wallet from '@/components/home/homewallet/HomeWallet.vue'
import Node from '@/components/home/homenode/HomeNode.vue'
import Calculator from '@/components/home/homecalculator/HomeCalculator.vue'
export default {
  components: {
    HomeNav, Home, Wallet, Node, Calculator
  },
  data () {
    return {
      currentComponent: 'Home'
    }
  },
  methods: {
    checkDetail (tab) {
      this.currentComponent = tab
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-nv{
  margin-right: 16px;
  float: left;
}
.nb-home-content{
  float: right;
}
</style>
