<template>
<input class="dialog-input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    type: {
      default: 'text'
    },
    placeholder: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.dialog-input {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 10px;
  padding: .5rem 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .3rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  &:focus{
    box-shadow: 0 0 0 2px #89bdf5;
  }
}
</style>
