<template>
  <div class="sigin-content">
    <input-item 
      label="ACCOUNT" 
      placeholder="8-20 characters" 
      :maxlength=20
      v-model="account"></input-item>
    <input-item 
      class="input-separate" 
      label="PASSWORD" 
      type="password" 
      placeholder="8-20 characters" 
      :maxlength=20
      v-model="password"></input-item>
  </div>
</template>

<script>
import InputItem from '@/components/signin/plugins/InputItem.vue'
export default {
  components: {
    InputItem
  },
  data () {
    return {
      account: '',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>
.sigin-content {
  .input-separate {
    margin-top: 42px;
  }
}
</style>
