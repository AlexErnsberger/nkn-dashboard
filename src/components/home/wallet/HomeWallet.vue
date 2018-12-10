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
      <input-item :label="$t('homeWallet.transfer.addressInput')" v-model="toAddr" class="home-wallet-tansfer-input-width" :size="55" :errorInfo="addrErr" homeStyle></input-item>
      <input-item :label="$t('homeWallet.transfer.amountInput')" v-model="tranferNum" :unit="$t('unit.NKN')" class="home-wallet-tansfer-input-width" :errorInfo="transferErr" :size="55"  homeStyle></input-item>
    </div>
    <div class="nkn-tranfer-commit">
      <button-plugin @click.native="transferConfirm">{{$t('homeWallet.transfer.btn')}}</button-plugin>
    </div>
  </div>
  <div class="transfer-history home-wallet-tablelist-height home-info-seperate">
    <table-plugin :title="$t('homeWallet.transferHistoryTable.title')" :colHeader1="$t('homeWallet.transferHistoryTable.col1')" :colHeader2="$t('homeWallet.transferHistoryTable.col2')" :colHeader3="$t('homeWallet.transferHistoryTable.col3')" :colHeader4="$t('homeWallet.transferHistoryTable.col4')" :data="testTableList"></table-plugin>
    <table-separate-plugin class="table-sep" :dataSum="txSum" @getData="getNodeWalletTransaction(currentNode, currentPage)"></table-separate-plugin>
  </div>
  <div class="mining-reward home-wallet-tablelist-height home-info-seperate">
    <table-plugin :title="$t('homeWallet.miningRewardTable.title')" :colHeader1="$t('homeWallet.miningRewardTable.col1')" :colHeader2="$t('homeWallet.miningRewardTable.col2')" :colHeader3="$t('homeWallet.miningRewardTable.col3')" :colHeader4="$t('homeWallet.miningRewardTable.col4')" :data="testRewardList"></table-plugin>
    <table-separate-plugin class="table-sep" :dataSum="miningSum" @getData="getNodeWalletMining(currentNode, currentPage)"></table-separate-plugin>
  </div>
  <common-dialog v-model="transfer">
    <span slot="dialog-header-text">{{$t('homeWallet.transfer.title')}}</span>
    <dialog-input :placeholder="$t('homeWallet.transfer.walletPwd')" v-model="wpass" :errorInfo="wpassErr" slot="dialog-body-content"></dialog-input>
    <dialog-button type="danger" slot="dialog-footer-btn" @click.native="NKNTransfer">{{$t('homeWallet.transfer.btn')}}</dialog-button>
  </common-dialog>
  <common-loading v-if="getLoading"></common-loading>
</div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
import InputItem from '@/components/signin/plugins/InputItem.vue'
import TablePlugin from '@/components/home/plugins/TablePlugin.vue'
import TableSeparatePlugin from '@/components/home/plugins/TableSeparatePlugin.vue'
import NodeInfoPlugin from '@/components/home/commonmodules/NodeInfoPlugin.vue'
import CommonDialog from '@/components/base/CommonDialog.vue'
import DialogInput from '@/components/base/plugins/DialogInput.vue'
import DialogButton from '@/components/base/plugins/DialogButton.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
import checkNullMix from '@/assets/js/mixin/checkNull'
import nodeSetMix from '@/assets/js/mixin/nodeSet'
import loadingMix from '@/assets/js/mixin/loading'
import { mapMutations } from 'vuex'

export default {
  components: {
    CurrencyPlugin,
    BlockPlugin,
    NodeInfoPlugin,
    InputItem,
    ButtonPlugin,
    TablePlugin,
    TableSeparatePlugin,
    CommonDialog,
    DialogInput,
    DialogButton,
    CommonLoading
  },
  mixins: [checkNullMix, nodeSetMix, loadingMix],
  data () {
    return {
      txSum: 0,
      miningSum: 0,
      transfer: false,
      nodeWallet: null,
      testTableList: [],
      testRewardList: [],
      toAddr: '',
      addrErr: '',
      tranferNum: '',
      transferErr: '',
      wpass: '',
      wpassErr: ''
    }
  },
  methods: {
    ...mapMutations([
      'setResInfo'
    ]),
    transferConfirm () {
      if (!this.toAddr) {
        this.addrErr = this.$t('homeWallet.transfer.addressInputErr')
        return
      }
      if (!this.tranferNum) {
        this.transferErr = this.$t('homeWallet.transfer.amountInputErr')
        return
      }
      this.transfer = true
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
    getNodeWalletTransaction (node, pageNo) {
      this.$http.nodeWalletTransaction(this, {
        pageNo: pageNo,
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
    getNodeWalletMining (node, pageNo) {
      this.$http.nodeWalletMining(this, {
        pageNo: pageNo,
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
      if (!this.wpass) {
        this.wpassErr = this.$t('homeWallet.transfer.pwdErr')
        return
      }
      this.$http.walletTransfer(this, {
        to: this.toAddr,
        num: this.tranferNum,
        wpass: this.wpass
      }, (res) => {
        if (res.status) {
          this.transfer = false
          this.setResInfo({content: `${this.$t('homeWallet.transfer.success')}`})
          this.clearInput()
        }
      })
    },
    reqBatchHandle (node, pageNo) {
      this.$http.reqBatch(this, [this.getNodeWallet(node), this.getNodeWalletMining(node, pageNo), this.getNodeWalletTransaction(node, pageNo)], () => {
        this.setLoading(false)
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
      if (node) {
        this.reqBatchHandle(node, 1)
      }
    }
  },
  mounted () {
    if (this.currentNode) {
      let node = this.currentNode
      this.reqBatchHandle(node, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-wallet {
  .my-node, .transfer-history, .mining-reward, .nkn-transfer {
    .home-common-bg;
    .mixin-boxshadow;
  }

  .my-wallet,  {
    .home-common-flex;
  }

  .nkn-transfer {
    .nkn-transfer-input {
      .home-common-flex;
    }
    .nkn-tranfer-commit {
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;
    }
  }

  .mining-reward, .transfer-history{
    position: relative;
  }

  .table-sep {
    text-align: right;
    margin-top: 10px;
    position: absolute;
    right: 20px; bottom: 5px;
  }
}
</style>
