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
import Calculator from '@/components/home/homecalculator/HomeCalculate.vue'
import Log from '@/components/home/homelog/HomeLog.vue'
export default {
  components: {
    HomeNav,
    Home,
    Wallet,
    Node,
    Calculator,
    Log
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
.nb-content-container{
  .home-common-flex;
}
// .nb-home-nv {
//   margin-right: 16px;
//   float: left;
// }

.nb-home-content {
  // float: right;
  width: 928px;
}
</style>
