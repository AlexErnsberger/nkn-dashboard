<template>
  <div class="signin-button-item">
    <button>
      <span>{{word}}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    word: String
  }
}
</script>

<style lang="less" scoped>
.signin-button-item{
  button{
    display: block;
    width: 400px;height: 90px;
    margin: auto;
    text-align: center;
    border-radius: 6px;
    background: #318bec;
    font-size: 24px;
    color: white;
    border: none;outline: none;
  }
}
</style>
