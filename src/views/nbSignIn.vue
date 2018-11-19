<template>
<div class="nb-signin">
  <div class="nb-content-container">
    <h1>NKN Mining Dashboard</h1>
    <component :is="currentComponent" @linkTo="setComponent"></component>
  </div>
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
  .nb-content-container{
    height: 784px;
    .mixin-boxshadow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: @common-bg-color;

    h1 {
      font-size: 30px;
      color: @si-color;
      padding: 60px 0;
      margin: 0;
      text-align: center;
      line-height: 1;
    }
  }
}
</style>
