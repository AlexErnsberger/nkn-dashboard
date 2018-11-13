<template>
  <div id="nb-loading">
    <img src="/static/img/spin.svg">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#nb-loading{
  position: fixed;
  z-index: 1;
  left: 0;top: 0;right: 0;bottom: 0;
  background-color: rgba(255, 255, 255,0.8);
  img{
    display: block;
    width: 64px;height: 64px;
    margin: auto;
    margin-top: 300px;
  }
}
</style>
