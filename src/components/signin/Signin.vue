<template>
<div class="sigin-content">
  <input-item :label="$t('signIn.accountLabel')" :placeholder="$t('signIn.accountPlaceholder')" :maxlength=20 v-model="account" :size="90"></input-item>
  <input-item class="input-separate" :label="$t('signIn.pwdLabel')" type="password" :placeholder="$t('signIn.pwdPlaceholder')" :maxlength=20 v-model="password" :size="90" :errorInfo="errorInfo"></input-item>
  <button-item class="buttom-separate" :btnContent="$t('signIn.login')" :linkContent="$t('signIn.pwdChange')" @click="login" @linkTo="changePass"></button-item>
</div>
</template>

<script>
import InputItem from '@/components/signin/plugins/InputItem.vue'
import ButtonItem from '@/components/signin/plugins/ButtonItem.vue'
export default {
  components: {
    InputItem,
    ButtonItem
  },
  data () {
    return {
      account: '',
      password: '',
      errorInfo: ''
    }
  },
  methods: {
    login () {
      if (!this.password) {
        this.errorInfo = this.$t('signIn.pwdErrorInfo')
      } else {
        this.$router.push({name: 'home'})
      }
    },
    changePass () {
      this.$emit('linkTo', this.$namespace.PWDCHANGE)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
