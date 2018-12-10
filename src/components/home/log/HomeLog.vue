<template>
<div class="nb-home-log home-component-position">
  <div class="my-node">
    <node-info-plugin></node-info-plugin>
  </div>
  <div class="nb-home-log-content home-info-seperate">
    <log-plugin :logs="logList"></log-plugin>
  </div>
  <common-loading v-if="getLoading"></common-loading>
</div>
</template>

<script>
import NodeInfoPlugin from '@/components/home/commonmodules/NodeInfoPlugin.vue'
import LogPlugin from '@/components/home/log/plugins/LogPlugin.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
import nodeSetMix from '@/assets/js/mixin/nodeSet'
import loadingMix from '@/assets/js/mixin/loading'

export default {
  components: {
    NodeInfoPlugin,
    LogPlugin,
    CommonLoading
  },
  mixins: [nodeSetMix, loadingMix],
  data () {
    return {
      logList: []
    }
  },
  methods: {
    getNodeLog (node) {
      this.setLoading(true)
      this.$http.log(this, {nodeId: node.id}, (res) => {
        let data = res.data
        if (res.status) {
          this.logList = Object.assign([], data)
        }
        this.setLoading(false)
      })
    }
  },
  watch: {
    currentNode () {
      if (this.currentNode) {
        this.getNodeLog(this.currentNode)
      }
    }
  },
  mounted () {
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
