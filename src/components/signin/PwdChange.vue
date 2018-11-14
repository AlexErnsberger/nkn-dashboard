<template>
  <div class="pwdchange-content">
    <input-item 
      label="CURRENT PASSWORD" 
      placeholder="8-20 characters" 
      :maxlength=20
      v-model="currentPassword"></input-item>
    <input-item 
      class="input-separate" 
      label="NEW PASSWORD" 
      type="password" 
      placeholder="8-20 characters" 
      :maxlength=20
      v-model="newPassword"></input-item>
    <input-item 
      class="input-separate" 
      label="CONFIRM NEW PASSWORD" 
      type="password" 
      placeholder="8-20 characters" 
      :maxlength=20
      v-model="confirmPassword"></input-item>
    <button-item 
      class="buttom-separate" 
      btnContent="Change Password" 
      linkContent="Log in"
      @click="pwdChange"
      @linkTo="signIn"></button-item>
  </div>
</template>

<script>
import InputItem from '@/components/signin/plugins/InputItem.vue'
import ButtonItem from '@/components/signin/plugins/ButtonItem.vue'
export default {
  components: {
    InputItem, ButtonItem
  },
  data () {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    pwdChange () {
      console.log('change password')
    },
    signIn () {
      console.log('signin')
    }
  }
}
</script>

<style >

</style>
