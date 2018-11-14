<template>
  <div class="signin-input-item">
    <label class="item-title">{{label}}</label>
    <input class="item-content" 
      :type="currentType" 
      :placeholder="placeholder" 
      :maxlength="maxlength" 
      :value="currentValue"
      @input="handleInput"
      @change="handleChange">
    <img v-if="this.type === 'password'" :src="iconSrc" @click="showPass">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    type: {
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxlength: {
      type: Number
    }
  },
  data () {
    return {
      currentValue: this.value,
      currentType: this.type,
      iconSrc: require('../../../assets/img/icon/closeeyes.png')
    }
  },
  methods: {
    handleInput (event) {
      let value = event.target.value
      this.setCurrentValue(value)
      this.$emit('input', value)
      this.$emit('on-change', event)
    },
    handleChange (event) {
      this.$emit('on-input-change', event)
    },
    setCurrentValue () {
      if (this.currentValue === this.value) {
        return
      }
      this.currentValue = this.value
    },
    showPass () {
      switch (this.currentType) {
        case 'text': 
        this.currentType = 'password'
        this.iconSrc = require('../../../assets/img/icon/closeeyes.png')
        break
        case 'password': 
        this.currentType = 'text'
        this.iconSrc = require('../../../assets/img/icon/eyes.png')
        break
        default:
        this.currentType = 'password'
        this.iconSrc = require('../../../assets/img/icon/closeeyes.png')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.signin-input-item{
  width: 640px;
  margin: auto;
  border-bottom: 2px solid @si-color;
  label {
    display: block;
    color: @si-input-label-color;
    font-size: 14px;
    text-align: left;
    margin-bottom: 14px;
  }
  input {
    padding-bottom: 12px;
    outline: none;border:none;
    width: 600px;
    &::placeholder{
      color: @si-input-ph-color;
    }
  }
  img {
    width: 36px;height: 21px;
  }
}
</style>
