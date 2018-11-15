<template>
  <div :class="['nav-option', {'active':active}]" @click="handleClick">
    <img :src="currentIcon">
    <span>{{option}}</span>
  </div>
</template>

<script>
export default {
  props: {
    option: String,
    icon: String,
    iconHover: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentIcon: this.icon
    }
  },
  watch: {
    active () {
      if(this.active) {
        this.currentIcon = this.iconHover
      } else {
        this.currentIcon = this.icon
      } 
    }
  },
  methods: {
    handleClick () {
      this.$emit('select', this.option)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-option{
  line-height: 52px;
  padding-left: 34px;
  cursor: pointer;
  img{
    width: 20px;height: 20px;
    vertical-align: -4px;
    margin-right: 14px;
  }
  span{
    color: inherit;
    font-size: 14px;
  }
}
.active{
  .mixin-slidehover;
}
</style>
