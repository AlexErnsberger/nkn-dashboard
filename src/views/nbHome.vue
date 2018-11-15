<template>
  <div class="nb-content-container clearfix">
    <div class="nb-home-nv">
      <home-nav></home-nav>
    </div>
    <div class="nb-home-content">
      <home-main></home-main>
    </div>
  </div>
</template>

<script>
import HomeNav from '@/components/home/nav/HomeNav.vue'
import HomeMain from '@/components/home/homemain/HomeMain.vue'
export default {
  components: {
    HomeNav, HomeMain
  },
  data () {
    return {
      currentComponent: ''
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
