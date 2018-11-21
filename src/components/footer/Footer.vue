<template>
<footer>
  <div class="nb-container">
    <div class="nb-copyright">{{$t("footer.copyRight")}}</div>
    <div class="nb-attention">{{$t("footer.attention")}}</div>
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
