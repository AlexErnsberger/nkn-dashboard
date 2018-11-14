<template>
<nav>
  <slide-plugin v-for="(item, index) in navs" :key="index" :iconSrc="item.iconSrc" :iconDesc="item.iconDesc" :list="item.list" @activeEvent="item.event"></slide-plugin>
</nav>
</template>

<script>
import SlidePlugin from '@/components/header/plugins/SlidePlugin.vue'
export default {
  components: {
    SlidePlugin
  },
  data () {
    return {
      navs: [{
        iconSrc: require('../../assets/img/icon/user.png'),
        iconDesc: '',
        list: ['Logout'],
        event: function (scope) {
          scope.$storage.logout()
          scope.$router.push({
            name: scope.$namespace.signIn
          })
        }
      }]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
