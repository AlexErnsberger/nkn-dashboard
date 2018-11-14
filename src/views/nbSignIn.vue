<template>
  <div class="nb-signin">
    <h1>NKN Mining Dashboard</h1>
    <sign-in-content></sign-in-content>
  </div>
</template>

<script>
import SignInContent from '@/components/signin/Signin.vue'
export default {
  components: {
    SignInContent
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
    color:@signIn-color;
    padding:60px 0;
    text-align: center;
  }
}
</style>
