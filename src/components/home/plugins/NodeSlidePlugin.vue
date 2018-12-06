<template>
<div class="node-slide-plugin">
  <div class="node-selected">{{currentNode}}</div>
  <div class="node-list">
    <ul>
      <li v-for="(node, index) in nodeList" :key="index" @click="choose(node)">{{node.name}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  data () {
    return {
      currentNode: ''
    }
  },
  computed: {
    ...mapGetters({
      nodeList: 'getMyNodeList'
    })
  },
  methods: {
    ...mapMutations([
      'setNodeWallet',
      'setLoading'
    ]),
    choose (node) {
      this.currentNode = node.name
      this.getNodeWallet(node)
    },
    getNodeWallet (node) {
      this.setLoading(true)
      this.$http.nodeWallet(this, {
        id: node.id
      }, (res) => {
        let data = res.data
        console.log(data)
        if (res.status) {
          this.setNodeWallet(res.data)
          this.setLoading(false)
        } else {
          alert('its nodeWallet')
        }
      })
    }
  },
  watch: {
    nodeList () {
      if (this.nodeList) {
        this.currentNode = this.nodeList[0].name
        this.getNodeWallet(this.currentNode)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.node-slide-plugin {
  display: inline-block;
  cursor: pointer;

  .node-selected {
    display: inline;
    padding: 20px 0;
    .home-commom-data-font;

    &::after {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: url(../../../assets/img/icon/triangle.png) no-repeat right center/8px 8px;
      margin-left: 13px;
      vertical-align: 4px;
    }
  }

  .node-list {
    display: none;
    position: absolute;
    margin-top: 12px;

    ul {
      margin: 0;
      padding: 0;
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: 6px;
      overflow: hidden;

      li {
        list-style-type: none;
        text-align: center;
        padding: 8px;
        background: @common-bg-color;

        &:hover {
          .mixin-slidehover;
        }
      }
    }
  }

  &:hover .node-list {
    display: block;
  }
}
</style>
