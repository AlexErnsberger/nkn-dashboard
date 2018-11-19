<template>
<div class="nb-home-calculator">
  <div class="nb-home-calculator-info">
    <div class="calculator-block">
      <input-item  label="Average block time in seconds" v-model="averageTime" style="width:230px;" homeStyle></input-item>
    </div>
    <div class="calculator-block">
      <input-item  label="Currnet node count in NKN network" v-model="currentNode" style="width:230px;" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calculator-info">
    <div class="calculator-block">
      <input-item  label="Amount of your nodes" v-model="nodeSum" style="width:230px;" homeStyle></input-item>
    </div>
    <div class="calculator-block">
      <input-item  label="Your nodes working time in months" v-model="workingTimes" style="width:230px;" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calcultor-compute">
    <div class="price-block">
      <span class="nkn-price-title">NKN Price:</span>
      <span class="nkn-price-data">0.5100 $</span>
    </div>
    <div class="price-compute">
      <button-plugin class="compute-reset" disabled>Reset</button-plugin>
      <button-plugin class="compute-calculate">Calculate</button-plugin>
    </div>
  </div>
  <div class="nb-home-calcultor-specific">
    <calculator-item title="Approximate amount of NKN testnet tokens mined per day" data="144" unit="NKN"></calculator-item>
    <calculator-item title="Total testnet tokens mined per 1 month" data="4320" unit="NKN"></calculator-item>
    <calculator-item title="NKN mainnet tokens (1:5 ratio) per 1 month" data="864" unit="NKN"></calculator-item>
    <calculator-item title="USD profit per day" data="1.4400" unit="$"></calculator-item>
    <calculator-item title="USD profit per 1 month" data="43.2" unit="$"></calculator-item>
  </div>
</div>
</template>

<script>
import CalculatorItem from '@/components/home/homecalculator/plugins/CalculatorItem.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
import InputItem from '@/components/signin/plugins/InputItem.vue'
export default {
  components: {
    ButtonPlugin,
    CalculatorItem,
    InputItem
  },
  data () {
    return {
      averageTime: 12,
      currentNode: 1000,
      nodeSum: 2,
      workingTimes: 1
    }
  }
}
</script>

<style lang="less" scoped>
.nb-home-calculator {
  .nb-home-calculator-info {
    .home-common-flex;

    .calculator-block {
      .home-common-bg;
      .mixin-boxshadow;
      width: 455px;
      height: 100px;
    }
  }

  .nb-home-calcultor-compute {
    .home-common-flex;
    .home-common-bg;
    .mixin-boxshadow;

    .price-block {
      .nkn-price-title {
        .home-common-title-font;
      }

      .nkn-price-data {
        .home-commom-data-font;
        margin-left: 30px;
      }
    }

    .price-compute {
      .compute-reset {
        margin-right: 30px;
      }
    }
  }

  .nb-home-calcultor-specific {
    .home-common-bg;
    .mixin-boxshadow;
  }

  &>div+div {
    margin-top: 16px;
  }
}
</style>
