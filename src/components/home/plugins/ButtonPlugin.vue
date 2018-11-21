<template>
<div class="btn-plugin" :class="{'disabled':disabled}">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="less" scoped>
.btn-plugin {
  display: inline-block;
  position: relative;
  width: 130px;
  line-height: 38px;
  border-radius: 6px;
  background: @si-buttom-common-color;
  font-size: 14px;
  color: white;
  text-align: center;
  cursor: pointer;
  .mixin-button-hover;
}

.disabled {
  background: #BAC1DA;
  cursor: not-allowed;
}
</style>
