<template>
<div class="signin-button-item">
  <button @click="btnClick">
      {{btnContent}}
    </button>
  <span @click="linkClick">{{linkContent}}</span>
</div>
</template>

<script>
export default {
  props: {
    btnContent: String,
    linkContent: String
  },
  methods: {
    btnClick (event) {
      this.$emit('click', event)
    },
    linkClick (event) {
      this.$emit('linkTo', event)
    }
  }
}
</script>

<style lang="less" scoped>
.signin-button-item {
  text-align: center;

  button {
    width: 400px;
    height: 90px;
    text-align: center;
    border-radius: 6px;
    background: @si-buttom-common-color;
    font-size: 24px;
    color: white;
    border: none;
    outline: none;
  }

  &>span {
    display: block;
    cursor: pointer;
    margin-top: 25px;
    font-size: 20px;
    color: @si-buttom-common-color;
  }
}
</style>
