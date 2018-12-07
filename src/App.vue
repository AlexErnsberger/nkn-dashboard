<template>
  <div id="app">
    <nb-header></nb-header>
    <div class="nb-container">
      <router-view class="view-margin"/>
    </div>
    <nb-footer></nb-footer>
    <common-info-dialog></common-info-dialog>
  </div>
</template>

<script>
import nbHeader from '@/components/header/Header.vue'
import nbFooter from '@/components/footer/Footer.vue'
import CommonInfoDialog from '@/components/base/CommonInfoDialog.vue'
export default {
  name: 'App',
  components: {
    nbHeader, nbFooter, CommonInfoDialog
  }
}
</script>

<style lang="less" scoped>
#app {
  background: @body-bg-color;
  .view-margin{
    margin: 20px auto;
  }
}
</style>
