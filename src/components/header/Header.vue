<template>
  <div class="nb-header">
    <div class="nb-container"></div>
  </div>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo.vue'
import HeaderNav from '@/components/header/HeaderNav.vue'
export default {
  components: {
    HeaderLogo, HeaderNav
  }
}
</script>

<style lang="less" scoped>
.nb-header{
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  background: @common-bg-color;
}
</style>
