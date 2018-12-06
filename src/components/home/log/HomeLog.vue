<template>
<div class="nb-home-log home-component-position">
  <div class="my-node">
    <node-info-plugin></node-info-plugin>
  </div>
  <div class="nb-home-log-content home-info-seperate">
    <log-plugin :logs="logList"></log-plugin>
  </div>
  <common-loading v-if="false"></common-loading>
</div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonmodules/NodeInfoPlugin.vue'
import LogPlugin from '@/components/home/log/plugins/LogPlugin.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    NodeInfoPlugin,
    LogPlugin,
    CommonLoading
  },
  data () {
    return {
      logList: []
    }
  },
  methods: {
    ...mapMutations([
      'setNodeList', 'setCurrentNode'
    ]),
    getNodeLog (node) {
      this.$http.log(this, {nodeId: node.id}, (res) => {
        let data = res.data
        if (res.status) {
          this.logList = data
        }
      })
    },
    getMyNodeList () {
      return this.$http.myNodeList(this, (res) => {
        let data = res.data
        if (res.status && data) {
          this.setNodeList(data)
          this.setCurrentNode(data[0])
        } else {
          alert('its myNodeList')
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      currentNode: 'getCurrentNode',
      nodeList: 'getMyNodeList'
    })
  },
  watch: {
    currentNode () {
      this.getNodeLog(this.currentNode)
    }
  },
  mounted () {
    if (!this.nodeList) {
      this.getMyNodeList()
    }
    if (this.currentNode) {
      this.getNodeLog(this.currentNode)
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-log {
  .my-node {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .nb-home-log-content {
    .home-common-bg;
    .mixin-boxshadow;
  }
}
</style>
