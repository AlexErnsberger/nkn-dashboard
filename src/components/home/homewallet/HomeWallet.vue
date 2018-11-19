<template>
<div class="nb-home-wallet">
  <div class="my-node">
    <node-info-plugin :nodeList="nodeList"></node-info-plugin>
  </div>
  <div class="my-wallet">
    <currency-plugin title="Balance" data="20000.0000" unit="NKN" style="width:262px;"></currency-plugin>
    <currency-plugin title="Mining Reward" data="20000.0000" unit="NKN" style="width:262px;"></currency-plugin>
    <currency-plugin title="Wallet Address" data="ADSAddsdsadDSSCSdsaDSDSdda" copy style="width:372px;"></currency-plugin>
  </div>
  <div class="nkn-transfer">
    <block-plugin title="Transfer"></block-plugin>
    <input-item label="Transfer Address" class="transfer-input" :size="55" homeStyle></input-item>
    <input-item label="Transfer Amount" class="transfer-input" :size="55" unit="NKN" homeStyle></input-item>
    <button-plugin class="transfer-commit" @click.native="transferConfirm">Transfer</button-plugin>
  </div>
  <div class="transfer-history">
    <table-plugin title="Transaction History" colHeader1="From" colHeader2="To" colHeader3="Value" colHeader4="Time" :data="testTableList" :dataSum="testListSum" :eachPageSum="8" needSep></table-plugin>
  </div>
  <div class="mining-reward">
    <table-plugin title="Mining Reward" colHeader1="Height" colHeader2="Transaction Hash" colHeader3="Value" colHeader4="Time" :data="testRewardList" :dataSum="testListSum" :eachPageSum="8" needSep></table-plugin>
  </div>
  <section>
    <common-dialog v-model="transfer">
      <span slot="dialog-header-text">Transfer</span>
      <dialog-input placeholder="wallet password" slot="dialog-body-content"></dialog-input>
      <dialog-button type="danger" slot="dialog-footer-btn">transfer</dialog-button>
    </common-dialog>
  </section>
</div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
import BlockPlugin from '@/components/home/plugins/BlockPlugin.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
import InputItem from '@/components/signin/plugins/InputItem.vue'
import TablePlugin from '@/components/home/plugins/TablePlugin.vue'
import NodeInfoPlugin from '@/components/home/commonplugins/NodeInfoPlugin.vue'
import CommonDialog from '@/components/base/CommonDialog.vue'
import DialogInput from '@/components/base/plugins/DialogInput.vue'
import DialogButton from '@/components/base/plugins/DialogButton.vue'
export default {
  name: 'home-wallet',
  components: {
    CurrencyPlugin,
    BlockPlugin,
    NodeInfoPlugin,
    InputItem,
    ButtonPlugin,
    TablePlugin,
    CommonDialog,
    DialogInput,
    DialogButton
  },
  methods: {
    transferConfirm () {
      console.log(1)
      this.transfer = true
    }
  },
  data () {
    return {
      nodeList: [
        'Node #8', 'Node #2', 'Node #3'
      ],
      testListSum: 10,
      transfer: false,
      testTableList: [],
      testRewardList: []
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

    .transfer-input {
      width: 420px;
      display: inline-block;

      &+.transfer-input {
        margin-left: 32px;
      }
    }

    .transfer-commit {
      margin: 24px 12px 22px 746px;
    }
  }

  .transfer-history {
    .home-common-bg;
    .mixin-boxshadow;
    height: 397px;
  }

  .mining-reward {
    .home-common-bg;
    .mixin-boxshadow;
    height: 397px;
  }

  &>div+div {
    margin-top: 16px;
  }
}
</style>
