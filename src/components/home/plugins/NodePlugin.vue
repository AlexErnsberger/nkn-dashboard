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
    <node-slide-plugin></node-slide-plugin>
  </div>
  <div v-else-if="type === 'nodeAdd'" class="node-func" @click="addNode">
    <img class="node-icon" src="../../../assets/img/icon/add.png">
    <span class="node-title">{{title}}</span>
  </div>
  <div v-else-if="type === 'nodeDelete'" class="node-func" @click="warning">
    <img class="node-icon" src="../../../assets/img/icon/delete.png">
    <span class="node-title">{{title}}</span>
  </div>
  <common-dialog v-model="del">
    <span slot="dialog-header-text">Warning</span>
    <div slot="dialog-body-content">
      <img src="../../../assets/img/infobox/warning.png" class="del-btn-img">
      <span class="del-btn-text">Are you sure to delete <strong v-if="currentNode">{{currentNode.name + "#"}}</strong></span>
    </div>
    <dialog-button slot="dialog-footer-btn" type="danger" @click.native="delCurrentNode">delete</dialog-button>
  </common-dialog>
</div>
</template>

<script>
import NodeSlidePlugin from '@/components/home/plugins/NodeSlidePlugin'
import CommonDialog from '@/components/base/CommonDialog'
import DialogButton from '@/components/base/plugins/DialogButton.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    NodeSlidePlugin, CommonDialog, DialogButton
  },
  props: {
    type: String,
    subType: String,
    title: String,
    data: [String, Number],
    nodeList: Array
  },
  data () {
    return {
      del: false
    }
  },
  computed: {
    ...mapGetters({
      currentNode: 'getCurrentNode',
      myNodeList: 'getMyNodeList'
    }),
    nodeClass () {
      return 'node-' + this.subType.toLowerCase()
    }
  },
  methods: {
    ...mapMutations([
      'addNodeList', 'setCurrentNode', 'delNode', 'setResInfo'
    ]),
    addNode () {
      this.$http.addNode(this, (res) => {
        let data = res.data
        if (res.status) {
          this.addNodeList(data.node)
          this.setResInfo({content: `${this.$t('nodeCommon.nodeAddPrefix')} ${data.node.name} ${this.$t('nodeCommon.nodeAddSuffix')}`})
        }
      })
    },
    delCurrentNode () {
      let nlists = this.myNodeList
      if (nlists && nlists.length > 0) {
        this.$http.delNode(this, {
          nodeId: this.currentNode.id
        }, (res) => {
          console.log(res)
          if (res.status) {
            this.delNode(this.currentNode)
            this.setResInfo({content: `${this.currentNode.name} ${this.$t('nodeCommon.nodeDelMsg')}`})
            if (nlists && nlists.length > 0) {
              this.setCurrentNode(nlists[0])
            } else {
              this.setCurrentNode(null)
            }
          }
        })
      }
    },
    warning () {
      this.del = true
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

<style lang="less" scoped>
  .del-btn-img{
    width: 24px;
    margin-right: 16px;
  }

  .del-btn-text{
    font-size: 14px;
    vertical-align: 6px;
  }
</style>
