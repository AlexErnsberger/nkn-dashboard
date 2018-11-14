<template>
  <div class="nb-signin">
    <h1>NKN Mining Dashboard</h1>
    <pwd-change-component></pwd-change-component>
  </div>
</template>

<script>
import SignInComponent from '@/components/signin/Signin.vue'
import PwdChangeComponent from '@/components/signin/PwdChange.vue'
export default {
  components: {
    SignInComponent, PwdChangeComponent
  }
}
</script>

<style lang="less" scoped>
.nb-signin{
  width: 1300px;height: 680px;
  .mixin-boxshadow;
  margin: auto;
  background: @common-bg-color;
  h1{
    font-size: 30px;
    color:@si-color;
    padding:60px 0;margin: 0;
    text-align: center;
  }
}
</style>
