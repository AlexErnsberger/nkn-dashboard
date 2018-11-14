<template>
<div class="nb-signin">
  <h1>NKN Mining Dashboard</h1>
  <component :is="currentComponent" @linkTo="setComponent"></component>
</div>
</template>

<script>
import SignIn from '@/components/signin/SignIn.vue'
import PwdChange from '@/components/signin/PwdChange.vue'
export default {
  components: {
    SignIn,
    PwdChange
  },
  data () {
    return {
      currentComponent: 'SignIn'
    }
  },
  methods: {
    setComponent (value) {
      this.currentComponent = value
    }
  }
}
</script>

<style lang="less" scoped>
.nb-signin {
  width: 1300px;
  height: 680px;
  .mixin-boxshadow;
  margin: auto;
  background: @common-bg-color;

  h1 {
    font-size: 30px;
    color: @si-color;
    padding: 60px 0;
    margin: 0;
    text-align: center;
  }
}
</style>
