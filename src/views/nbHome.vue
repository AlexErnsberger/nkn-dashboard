<template>
<div class="nb-content-container">
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
// 导入nav tab组件名需要和$namespace中的标识符HOME_*一致
import TabHome from '@/components/home/homemain/HomeMain.vue'
import TabWallet from '@/components/home/homewallet/HomeWallet.vue'
import TabNode from '@/components/home/homenode/HomeNode.vue'
import TabCalculator from '@/components/home/homecalculator/HomeCalculate.vue'
import TabLog from '@/components/home/homelog/HomeLog.vue'
export default {
  components: {
    HomeNav,
    TabHome,
    TabWallet,
    TabNode,
    TabCalculator,
    TabLog
  },
  data () {
    return {
      currentComponent: this.$namespace.HOME_MAIN
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
.nb-home-content {
  width: 928px;
}
</style>
