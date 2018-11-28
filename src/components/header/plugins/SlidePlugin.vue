<template>
<div class="slide-plugin">
  <div class="slide-nav">
    <img :src="iconSrc">
    <span v-if="iconDesc">{{iconDesc}}</span>
  </div>
  <div class="slide-list">
    <ul>
      <slot name="nav-list" @click="handleClick"></slot>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    iconSrc: String,
    iconDesc: String,
    list: Array
  }
}
</script>

<style lang="less" scoped>
.slide-plugin {
  cursor: pointer;
  display: inline-block;
  padding: 16.5px 0;
  .slide-nav{
    display: flex;
    align-items: center;
    img {
      height: 27px;
      max-width: 100%;
    }

    span {
      width: 70px;
      text-align: center;
      font-size: 14px;
      color: @home-table-color;
    }
  }

  .slide-list {
    display: none;
    position: absolute;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
    z-index: 1;
    margin:6px 0 0 13.5px;

    ul {
      padding: 0;
      margin: 0;

      li {
        width: 65px;
        line-height: 32px;
        list-style-type: none;
        cursor: pointer;
        text-align: center;
        color: @home-table-color;
        background: @common-bg-color;
      }

      li:hover {
        .mixin-slidehover;
      }
    }
  }

  &:hover {
    & .slide-list{
      display: block;
    }
  }
}
</style>
