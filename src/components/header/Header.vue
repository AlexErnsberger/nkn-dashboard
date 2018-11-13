<template>
  <header>
    <div class="nb-container">
      <div class="header-logo">
        <img src="../../assets/img/logo.png">
      </div>
      <div class="header-nav">
        
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
header{
  display: inline-block;
  width: 100%;
  line-height: 60px;
  margin-bottom: 30px;
  background: @common-bg-color;
  .header-logo{
    float: left;
    img{
      height: 30px;
      max-width: 100%;
    }
  }
  .header-nav{
    float: right;
  }
}
</style>
