<template>
<header>
  <div class="nb-container">
    <div class="nb-content-container">
      <div class="header-logo">
        <img src="../../assets/img/icon/logo.png">
      </div>
        <div class="header-nav">
          <header-nav></header-nav>
        </div>
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

  .nb-content-container {
    .home-common-flex;

    .header-logo {
      padding: 12px 0;

      img {
        width: 90px;
        height: 36px;
      }
    }
  }

}
</style>
