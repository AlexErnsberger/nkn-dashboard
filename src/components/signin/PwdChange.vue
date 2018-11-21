<template>
<div class="pwdchange-content">
  <input-item label="ACCOUNT" placeholder="You NKN mining account" :maxlength=20 v-model="account" :size="90"></input-item>
  <input-item class="input-separate" label="CURRENT PASSWORD" type="password" placeholder="8-20 characters" :maxlength=20 v-model="currentPassword" :size="90" :errorInfo="lengthErrorInfo"></input-item>
  <input-item class="input-separate" label="NEW PASSWORD" type="password" placeholder="8-20 characters" :maxlength=20 v-model="newPassword" :size="90" :errorInfo="lengthErrorInfo"></input-item>
  <input-item class="input-separate" label="CONFIRM NEW PASSWORD" type="password" placeholder="8-20 characters" :maxlength=20 v-model="confirmPassword" :size="90" :errorInfo="confilctErrorInfo"></input-item>
  <button-item class="buttom-separate" btnContent="Change Password" linkContent="Log in" @click="pwdChange" @linkTo="signIn"></button-item>
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
      if (!this.currentPassword) {
        this.lengthErrorInfo = 'Please input 8-20 characters'
      }
      if (this.currentPassword !== this.confirmPassword) {
        this.confilctErrorInfo = 'The password for the two input is inconsistent!'
      }
    },
    signIn () {
      this.$emit('linkTo', this.$namespace.SIGNIN)
    }
  }
}
</script>

<style >

</style>
