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
import { mapMutations } from 'vuex'
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
    ...mapMutations([
      'setReqKey'
    ]),
    login () {
      if (!this.password || this.password.length < 8) {
        this.errorInfo = this.$t('signIn.pwdErrorInfo')
        return
      }
      this.$http.login(this, {
        account: this.account,
        password: this.password
      }, (data) => {
        console.log(data)
        if (data.status) {
          this.setReqKey(data.data.reqKey)
          this.$router.push({name: this.$namespace.HOME})
        } else {
          alert(data.errMsg)
        }
      })
    },
    changePass () {
      this.$emit('linkTo', this.$namespace.SIGNIN_PWDCHANGE)
      // 返回页面顶部
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>
