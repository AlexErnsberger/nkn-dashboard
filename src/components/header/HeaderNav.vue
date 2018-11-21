<template>
<nav>
  <slide-plugin :iconSrc="require('../../assets/img/icon/user.png')">
    <li slot="nav-list" @click="logOut">Logout</li>
  </slide-plugin>
</nav>
</template>

<script>
import SlidePlugin from '@/components/header/plugins/SlidePlugin.vue'
export default {
  components: {
    SlidePlugin
  },
  methods: {
    logOut () {
      this.$storage.logout()
      this.$router.push({
        name: this.$namespace.SIGNIN.toLowerCase()
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
