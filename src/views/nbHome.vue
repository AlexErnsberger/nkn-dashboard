<template>
  <div class="nb-content-container">
    <home-nav></home-nav>
  </div>
</template>

<script>
import HomeNav from '@/components/home/nav/HomeNav.vue'
export default {
  components: {
    HomeNav
  },
  data () {
    return {
      currentComponent: ''
    }
  }
}
</script>

<style>

</style>
