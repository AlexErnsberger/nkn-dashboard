<template>
<header>
  <div class="nb-container">
    <div class="header-logo">
      <img src="../../assets/img/icon/logo.png">
      </div>
      <div class="header-nav" v-if="$store.getters['global/getUserInfo']">
        <header-nav></header-nav>
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
  display: inline-block;
  width: 100%;
  line-height: 60px;
  background: @common-bg-color;
  .mixin-boxshadow;

  .header-logo {
    float: left;

    img {
      width: 90px;
      height: 36px;
    }
  }

  .header-nav {
    float: right;
  }
}
</style>
