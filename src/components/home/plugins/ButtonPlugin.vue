<template>
  <div class="home-btn-plugin" :class="{'disabled':disabled}">
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
.home-btn-plugin{
  display: inline-block;
  width: 130px;line-height: 38px;
  border-radius: 6px;
  background: @si-buttom-common-color;
  font-size: 14px;
  color: white;
  text-align: center;
  cursor: pointer;
}
.disabled{
  background: #BAC1DA;
  cursor: not-allowed;
}
</style>
