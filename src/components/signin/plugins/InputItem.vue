<template>
<div class="signin-input-item" :class="{'home-style':homeStyle}">
  <label class="item-title">{{label}}</label>
  <input class="item-content"
      :type="currentType"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="currentValue"
      :size="size"
      @input="handleInput">
  <span v-if="unit">{{unit}}</span>
  <img v-if="type === 'password'" :src="iconSrc" @click="showPass">
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
    size: {
      type: Number
    },
    maxlength: {
      type: Number
    },
    unit: {
      type: String
    },
    homeStyle: Boolean
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
    },
    setCurrentValue (value) {
      if (this.currentValue === value) {
        return
      }
      this.currentValue = value
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
.signin-input-item {
  border-bottom: 2px solid @si-color;
  position: relative;
  label {
    display: block;
    color: @si-input-label-color;
    font-size: 14px;
    text-align: left;
    line-height: 1;
  }

  input {
    padding: 14px 0 12px;
    outline: none;border: 0;background: none;
    &::placeholder {
      color: @si-input-ph-color;
    }
  }

  span{
    font-size: 12px;
    color: #000;
  }

  img {
    width: 36px;
    height: 21px;
    position: absolute;
    right: 0;
    bottom: 8px;
  }
}
.home-style{
  border-bottom-color: @home-common-border-color;
}
</style>
