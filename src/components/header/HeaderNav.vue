<template>
<nav>
  <slide-plugin :iconSrc="require('../../assets/img/icon/language.png')" :iconDesc="$t('header.langSel')">
    <li slot="nav-list" @click="changeLang('en')">{{$t("header.langList.en")}}</li>
    <li slot="nav-list" @click="changeLang('zh')">{{$t("header.langList.zh")}}</li>
  </slide-plugin>
  <slide-plugin :iconSrc="require('../../assets/img/icon/user.png')">
    <li slot="nav-list" @click="logOut">{{$t('header.logOut')}}</li>
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
    },
    changeLang (lang) {
      this.$i18n.locale = lang
      this.$storage.setLanguage(lang)
      this.$store.commit('local/setLang', lang)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
