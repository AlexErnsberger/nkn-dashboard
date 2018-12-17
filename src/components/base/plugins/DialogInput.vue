<template>
  <div>
    <input class="dialog-input" :type="type" :placeholder="placeholder" :value="value" @input="handleInput">
    <div class="item-errorinfo" :class="{'item-errorInfo-show':errorInfo}">{{errorInfo}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'text'
    },
    placeholder: {
      type: String
    },
    errorInfo: {
      type: String
    },
    value: [String, Number]
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.dialog-input {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  padding: .5rem 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .3rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:focus {
    box-shadow: 0 0 0 2px #89bdf5;
  }
}
.item-errorinfo{
    visibility: hidden;
    position: absolute;
    color: #c22;
    font-size: 12px;
    font-weight: 300;
  }
.item-errorInfo-show{
  visibility: visible;
}
</style>
