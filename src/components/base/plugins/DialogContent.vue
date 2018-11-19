<template>
  <div class="dialog-content">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.dialog-content{
  flex: 1 1 auto;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}
</style>
