<template>
<div class="node-plugin">
  <div v-if="!type">
    <span class="customer-title">{{title}}<span v-if="data">{{$t('colon')}}</span></span>
    <span class="customer-data">{{data}}</span>
  </div>
  <div v-else-if="type === 'status'">
    <span class="node-title " :class="nodeClass">{{title}}<span v-if="data">{{$t('colon')}}</span></span>
    <span class="node-data">{{data}}</span>
  </div>
  <div v-else-if="type === 'nodeList'">
    <span class="customer-title">{{title}}{{$t('colon')}}</span>
    <node-slide-plugin :nodeList="nodeList"></node-slide-plugin>
  </div>
  <div v-else-if="type === 'nodeAdd'" class="node-func">
    <img class="node-icon" src="../../../assets/img/icon/add.png">
    <span class="node-title">{{title}}</span>
  </div>
  <div v-else-if="type === 'nodeDelete'" class="node-func">
    <img class="node-icon" src="../../../assets/img/icon/delete.png">
    <span class="node-title">{{title}}</span>
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
    subType: String,
    title: String,
    data: [String, Number],
    nodeList: Array
  },
  computed: {
    nodeClass () {
      return 'node-' + this.subType.toLowerCase()
    }
  }
}
</script>

<style lang="less" scoped>
.node-plugin {

  .customer-title,
  .node-title {
    .home-common-title-font;
  }

  .customer-data,
  .node-data {
    .home-commom-data-font;
  }

  .node-func {
    cursor: pointer;

    img {
      width: 18px;
      height: 18px;
      max-width: 100%;
      vertical-align: -3px;
    }
  }
}
</style><style lang="less" scoped>
.node-plugin {
  .node-syncstarted::before {
    .node-dot-style;
    background: #ffb938;
  }

  .node-syncfinished::before {
    .node-dot-style;
    background: #318bec;
  }

  .node-persistfinished::before {
    .node-dot-style;
    background: #24b23c;
  }

  .node-stopped::before {
    .node-dot-style;
    background: #cc3636;
  }
}
</style>
