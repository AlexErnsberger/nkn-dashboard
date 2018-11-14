<template>
<footer>
  <div class="nb-container">
    <div class="nb-copyright">Copyright © 2017-2018 NKN | All rights reserved</div>
    <div class="nb-attention">This software is in the early development stage and may not have all functions working properly. It should be used only for testing now.</div>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
footer {
  height: 80px;
  width: 100%;
  font-size: 12px;
  font-weight: 100;
  color: @footer-color;
  background: @common-bg-color;
  text-align: center;

  .nb-copyright {
    line-height: 40px;
  }

  .nb-attention {
    line-height: 20px;
  }
}
</style>
