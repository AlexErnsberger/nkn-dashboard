<template>
<div :class="['nav-tab', {'tab-active':tabActive}]" @click="handleClick">
  <img :src="currentIcon">
  <span>{{navTitle}}</span>
</div>
</template>

<script>
export default {
  props: {
    tab: String, // 标识符
    navTitle: String, // 导航栏标题
    icon: String,
    iconHover: String,
    tabActive: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.tabActive) {
      this.currentIcon = this.iconHover
    }
  },
  data () {
    return {
      currentIcon: this.icon
    }
  },
  watch: {
    tabActive () {
      if (this.tabActive) {
        this.currentIcon = this.iconHover
      } else {
        this.currentIcon = this.icon
      }
    }
  },
  methods: {
    handleClick () {
      // 返回页面顶部
      document.documentElement.scrollTop = document.body.scrollTop = 0
      this.$emit('select', this.tab)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-tab {
  line-height: 52px;
  padding-left: 34px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    vertical-align: -4px;
    margin-right: 14px;
  }

  span {
    color: inherit;
    font-size: 14px;
  }
}

.tab-active {
  .mixin-slidehover;
}
</style>
