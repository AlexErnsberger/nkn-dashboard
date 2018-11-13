<template>
  <div id="app">
    <nb-header></nb-header>
    <router-view/>
    <nb-footer></nb-footer>
  </div>
</template>

<script>
import nbHeader from '@/components/header/Header.vue'
import nbFooter from '@/components/footer/Footer.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
export default {
  name: 'App',
  components: {
    nbHeader, nbFooter, CommonLoading
  }
}
</script>

<style lang="less" scoped>
#app {
  background: @body-bg-color;
}
</style>
