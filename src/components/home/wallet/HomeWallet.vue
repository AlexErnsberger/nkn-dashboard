<template>
<div class="nb-home-wallet home-component-position">
  <div class="my-node">
    <node-info-plugin></node-info-plugin>
  </div>
  <div class="my-wallet home-info-seperate">
    <currency-plugin :title="$t('homeCommon.balance')" :unit="$t('unit.NKN')" :data="checkNull(nodeWallet, 'balance')" class="home-wallet-currency-plugin-width"></currency-plugin>
    <currency-plugin :title="$t('homeCommon.miningReward')" :unit="$t('unit.NKN')" :data="checkNull(nodeWallet, 'miningAward')"  class="home-wallet-currency-plugin-width"></currency-plugin>
    <currency-plugin :title="$t('homeWallet.walletAddress')" :data="checkNull(nodeWallet, 'walletAddr')"  class="home-wallet-address-currency-plugin-width" copy></currency-plugin>
  </div>
  <div class="nkn-transfer home-info-seperate">
    <block-plugin :title="$t('homeWallet.transfer.title')"></block-plugin>
    <div class="nkn-transfer-input">
      <input-item :label="$t('homeWallet.transfer.addressInput')" v-model="toAddr" class="home-wallet-tansfer-input-width" :size="55" homeStyle></input-item>
      <input-item :label="$t('homeWallet.transfer.amountInput')" v-model="tranferNum" :unit="$t('unit.NKN')" class="home-wallet-tansfer-input-width" :size="55"  homeStyle></input-item>
    </div>
    <div class="nkn-tranfer-commit">
      <button-plugin @click.native="transferConfirm">{{$t('homeWallet.transfer.btn')}}</button-plugin>
    </div>
  </div>
  <div class="transfer-history home-wallet-tablelist-height home-info-seperate">
    <table-plugin :title="$t('homeWallet.transferHistoryTable.title')" :colHeader1="$t('homeWallet.transferHistoryTable.col1')" :colHeader2="$t('homeWallet.transferHistoryTable.col2')" :colHeader3="$t('homeWallet.transferHistoryTable.col3')" :colHeader4="$t('homeWallet.transferHistoryTable.col4')" :data="testTableList" :dataSum="txSum" :eachPageSum="8" needSep></table-plugin>
  </div>
  <div class="mining-reward home-wallet-tablelist-height home-info-seperate">
    <table-plugin :title="$t('homeWallet.miningRewardTable.title')" :colHeader1="$t('homeWallet.miningRewardTable.col1')" :colHeader2="$t('homeWallet.miningRewardTable.col2')" :colHeader3="$t('homeWallet.miningRewardTable.col3')" :colHeader4="$t('homeWallet.miningRewardTable.col4')" :data="testRewardList" :dataSum="miningSum" :eachPageSum="8" needSep></table-plugin>
  </div>
  <common-dialog v-model="transfer">
    <span slot="dialog-header-text">{{$t('homeWallet.transfer.title')}}</span>
    <dialog-input :placeholder="$t('homeWallet.transfer.walletPwd')" v-model="wpass" slot="dialog-body-content"></dialog-input>
    <dialog-button type="danger" slot="dialog-footer-btn" @click.native="NKNTransfer">{{$t('homeWallet.transfer.btn')}}</dialog-button>
  </common-dialog>
  <common-loading v-if="false"></common-loading>
</div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
import InputItem from '@/components/signin/plugins/InputItem.vue'
import TablePlugin from '@/components/home/plugins/TablePlugin.vue'
import NodeInfoPlugin from '@/components/home/commonmodules/NodeInfoPlugin.vue'
import CommonDialog from '@/components/base/CommonDialog.vue'
import DialogInput from '@/components/base/plugins/DialogInput.vue'
import DialogButton from '@/components/base/plugins/DialogButton.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
import { mapMutations, mapGetters } from 'vuex'
import storeMix from '@/assets/js/mixin/store'

export default {
  components: {
    CurrencyPlugin,
    BlockPlugin,
    NodeInfoPlugin,
    InputItem,
    ButtonPlugin,
    TablePlugin,
    CommonDialog,
    DialogInput,
    DialogButton,
    CommonLoading
  },
  mixins: [storeMix],
  mounted () {
    if (!this.nodeList) {
      this.getMyNodeList()
    }
    if (this.currentNode) {
      let node = this.currentNode
      this.getNodeWallet(node)
      this.getNodeWalletMining(node)
      this.getNodeWalletTransaction(node)
    }
  },
  data () {
    return {
      txSum: 0,
      miningSum: 0,
      transfer: false,
      nodeWallet: null,
      testTableList: [],
      testRewardList: [],
      toAddr: '',
      tranferNum: '',
      wpass: ''
    }
  },
  computed: {
    ...mapGetters({
      nodeList: 'getMyNodeList',
      currentNode: 'getCurrentNode'
    })
  },
  methods: {
    ...mapMutations([
      'setNodeList', 'setCurrentNode'
    ]),
    transferConfirm () {
      this.transfer = true
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
    },
    getNodeWallet (node) {
      this.$http.nodeWallet(this, {
        id: node.id
      }, (res) => {
        let data = res.data
        if (res.status) {
          this.nodeWallet = data
        } else {
          alert('its nodeWallet')
        }
      })
    },
    getNodeWalletTransaction (node) {
      this.$http.nodeWalletTransaction(this, {
        pageNo: 1,
        nodeId: node.id
      }, (res) => {
        let data = res.data
        if (res.status) {
          this.testTableList = data.transactionList
          this.txSum = data.sum
        } else {
          alert('its NodeWalletTransaction')
        }
      })
    },
    getNodeWalletMining (node) {
      this.$http.nodeWalletMining(this, {
        pageNo: 1,
        nodeId: node.id
      }, (res) => {
        let data = res.data
        if (res.status) {
          this.testRewardList = data.miningList
          this.miningSum = data.sum
        } else {
          alert('its nodeWalletMining')
        }
      })
    },
    NKNTransfer () {
      this.$http.walletTransfer(this, {
        to: this.toAddr,
        num: this.tranferNum,
        wpass: this.wpass
      }, (res) => {
        if (res.status) {
          alert(res.data)
          this.transfer = false
          this.clearInput()
        }
      })
    },
    clearInput () {
      this.toAddr = ''
      this.tranferNum = ''
      this.wpass = ''
    }
  },
  watch: {
    currentNode () {
      let node = this.currentNode
      this.getNodeWallet(node)
      this.getNodeWalletMining(node)
      this.getNodeWalletTransaction(node)
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-wallet {
  .my-node {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .my-wallet {
    .home-common-flex;

  }

  .nkn-transfer {
    .home-common-bg;
    .mixin-boxshadow;

    .nkn-transfer-input {
      .home-common-flex;
    }

    .nkn-tranfer-commit {
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;
    }
  }

  .transfer-history {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .mining-reward {
    .home-common-bg;
    .mixin-boxshadow;
  }
}
</style>
