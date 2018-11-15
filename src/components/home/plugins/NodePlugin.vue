<template>
  <div class="node-plugin">
    <div v-if="!type">
      <span class="customer-title">{{title}}:</span>
      <span class="customer-data">{{data}}</span>
    </div>
    <div v-else-if="type === title">
      <span class="node-title " :class="nodeClass">{{title}}:</span>
      <span class="node-data">{{data}}</span>
    </div>
    <div v-else-if="type === 'list'">
      <span class="customer-title">{{title}}:</span>
      <node-slide-plugin :nodeList="nodeList"></node-slide-plugin>
    </div>
  </div>
</template>

<script>
import NodeSlidePlugin from '@/components/home/plugins/NodeSlidePlugin.vue'
export default {
  components: {
    NodeSlidePlugin
  },
  props: {
    type: String,
    title: String,
    data: String,
    nodeList: Array
  },
  computed: {
    nodeClass () {
      return 'node-' + this.title.toLowerCase()
    }
  }
}
</script>

<style lang="less" scoped>
.node-plugin{
  .customer-title, .node-title{
    .home-common-title-font;
  }
  .customer-data, .node-data{
    .home-commom-data-font;
  }
}
</style>

<style lang="less" scoped>
.node-plugin{
  .node-syncstarted::before{
    .node-dot-style;
    background: #ffb938;
  }
  .node-syncfinished::before{
    .node-dot-style;
    background: #318bec;
  }
  .node-persistfinished::before{
    .node-dot-style;
    background: #24b23c;
  }
  .node-stopped::before{
    .node-dot-style;
    background: #cc3636;
  }
}
</style>

