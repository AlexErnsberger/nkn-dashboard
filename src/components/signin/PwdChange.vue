<template>
<div class="pwdchange-content">
  <input-item :label="$t('signIn.accountLabel')" :placeholder="$t('signIn.accountPlaceholder')" :maxlength=20 v-model="account" :size="90"></input-item>
  <input-item class="input-separate" :label="$t('pwdChange.currentPwdLabel')" type="password" :placeholder="$t('signIn.pwdPlaceholder')" :maxlength=20 v-model="currentPassword" :size="90" :errorInfo="lengthErrorInfo"></input-item>
  <input-item class="input-separate" :label="$t('pwdChange.newPwdLabel')" type="password" :placeholder="$t('signIn.pwdPlaceholder')" :maxlength=20 v-model="newPassword" :size="90" :errorInfo="lengthErrorInfo"></input-item>
  <input-item class="input-separate" :label="$t('pwdChange.confirmPwdLabel')" type="password" :placeholder="$t('signIn.pwdPlaceholder')" :maxlength=20 v-model="confirmPassword" :size="90" :errorInfo="confilctErrorInfo"></input-item>
  <button-item class="buttom-separate" :btnContent="$t('signIn.pwdChange')" :linkContent="$t('signIn.login')" @click="pwdChange" @linkTo="signIn"></button-item>
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
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      lengthErrorInfo: '',
      confilctErrorInfo: ''
    }
  },
  methods: {
    pwdChange () {
      if (!this.currentPassword || this.currentPassword.length < 8 || this.newPassword.length < 8) {
        this.lengthErrorInfo = this.$t('signIn.pwdErrorInfo')
        return
      }
      if (this.newPassword !== this.confirmPassword) {
        this.confilctErrorInfo = this.$t('pwdChange.confirmPwdErrorInfo')
        return
      }
      if (this.currentPassword === this.newPassword) {
        this.confilctErrorInfo = 'old and new passwords cannot equally'
        return
      }
      this.$http.pwdc(this, {
        account: this.account,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword
      }, (data) => {
        console.log(data)
        if (data.status) {
          alert('change password success')
          this.signIn()
        } else {
          alert(data.errMsg)
        }
      })
    },
    signIn () {
      this.$emit('linkTo', this.$namespace.SIGNIN)
    }
  }
}
</script>
