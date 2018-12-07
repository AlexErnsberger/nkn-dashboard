<template>
<div :class="['nb-infobox',{'show':msg}]">
  <img class="infobox-close" src="../../assets/img/infobox/close.png" @click="hiddenBox">
  <img class="infobox-img" src="../../assets/img/infobox/successfully.png">
  <span class="infobox-content" v-if="msg">
    {{msg.content}}
  </span>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      msg: 'getResInfo'
    })
  },
  methods: {
    ...mapMutations([
      'setResInfo'
    ]),
    ...mapActions([
      'clearResInfo'
    ]),
    hiddenBox () {
      this.setResInfo(null)
    }
  },
  watch: {
    msg () {
      if (this.msg) {
        this.clearResInfo()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nb-infobox {
  display: none;box-sizing: border-box;
  position: fixed;
  z-index: 2;
  top: 16px;right: 8%;
  width: 530px;height: 64px;
  padding: 20px;
  background: @common-bg-color;
  color: #f3faf0;
  border-color: #9fce8b;
  border-radius: 6px;
  .mixin-boxshadow;
  .infobox-close {
    width: 8px; height: 8px;
    position: absolute;
    right: 15px; top: 15px;
  }
  .infobox-img{
    width: 24px;
    margin-right: 16px;
  }
  .infobox-content{
    font-size: 14px;
    color: black;
    vertical-align: 6px;
  }
}

.show {
  display: block;
}
</style>
