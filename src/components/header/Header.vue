<template>
<header>
  <div class="nb-container">
    <div class="nb-content-container">
      <div class="header-logo">
        <img src="../../assets/img/icon/logo.png">
      </div>
      <!-- <div class="header-nav" v-if="$store.getters['global/getUserInfo']"> -->
      <div class="header-nav">
        <header-nav></header-nav>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</header>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
header {
  height: 60px;
  background: @common-bg-color;
  box-sizing: border-box;
  .mixin-boxshadow;
  .header-logo {
    float: left;
    margin: 12px 0;
    img {
      width: 90px;
      height: 36px;
    }
  }

  .header-nav {
    float: right;
    margin: 16.5px 0;
  }

  .clearfix{
    clear: both;
  }
}
</style>
