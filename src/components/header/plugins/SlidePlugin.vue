<template>
  <div class="slide-plugin" @click="showList">
    <img :src="iconSrc">
    <span v-if="iconDesc">{{iconDesc}}</span>
    <div :class="['slide-list',{'show':active}]">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click.stop="handleClick">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSrc:String,
    iconDesc:String,
    list:Array
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    showList () {
      this.active = !this.active
      setTimeout(document.addEventListener('click', this.checkClick), 0)
    },
    handleClick () {
      this.active = false
      this.$emit('activeEvent',this)
    },
    checkClick (e) {
      if (!this.$el.contains(e.target)) {
        this.active = false
      }
    }
  },
  beforeDestroy () {
    document.removeEventListener('click',this.checkClick)
  }
}
</script>

<style lang="less" scoped>
.slide-plugin {
  cursor: pointer;
  img {
    height: 27px;
  }
  span{
    padding: 0 10px;
  }
  .slide-list {
    display: none;
    position: absolute;margin-top: -10px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    ul{
      padding: 0;margin: 0;
      li{
        width: 65px;line-height: 32px;
        list-style-type: none;
        cursor: pointer;
        text-align: center;
        color:#8992b0;
        background: @common-bg-color;
      }
      li:hover {
        background: #f8f9fa;
      }
    }
  }
  .show{
    display: block;
  }
}
</style>
