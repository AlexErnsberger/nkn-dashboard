<template>
<button class="dialog-btn" :class="[{'danger':type==='danger'},{'primary':type==='primary'},{'secondary':type==='secondary'}]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>

<style lang="less" scoped>
.dialog-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  margin-right: .25rem;
  color: white;
  pointer-events: auto;
  position: relative;
  outline: none;border:none;
  .mixin-button-hover;
}

.secondary {
  background: #6c757d;
}

.danger {
  background: #dc3545;
}
</style>
