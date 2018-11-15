<template>
  <div class="node-slide-plugin">
    <div class="node-selected" @click="viewList">{{currentNode}}</div>
    <div class="node-list" :class="{'show':showList}">
      <ul>
        <li v-for="(node, index) in nodeList" :key="index" @click="choose(node)">{{node}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nodeList: Array
  },
  data () {
    return {
      currentNode: this.nodeList[0],
      showList: false
    }
  },
  methods: {
    viewList () {
      this.showList= !this.showList
      setTimeout(document.addEventListener('click', this.checkClick), 0)
    },
    checkClick (e) {
      if (!this.$el.contains(e.target)) {
        this.showList = false
      }
    },
    choose (node) {
      this.currentNode = node
      this.showList = false
    }
  },
  beforeDestroy () {
    document.removeEventListener('click', this.checkClick)
  }
}
</script>

<style lang="less" scoped>
.node-slide-plugin{
  display: inline-block;
  .node-selected{
    .home-commom-data-font;
    &::after{
      content:'';
      display: inline-block;
      width: 8px;height: 8px;
      background: url(../../../assets/img/icon/triangle.png) no-repeat right center/8px 8px;
      margin-left: 13px;
      vertical-align: 4px;
    }
  }
  .node-list{
    display: none;
    position: absolute;
    margin-top: 12px;
    ul{
      margin:0;padding: 0;
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: 6px;
      overflow: hidden;
      li{
        list-style-type: none;
        text-align: center;
        padding: 8px;
        background:@common-bg-color;
        &:hover{
          .mixin-slidehover;
        }
      }
    }
  }
  .show{
    display: block;
  }
}
</style>
