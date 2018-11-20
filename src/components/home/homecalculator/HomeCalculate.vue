<template>
<div class="nb-home-calculator">
  <div class="nb-home-calculator-info">
    <div class="calculator-block home-calculator-block-size">
      <input-item  label="Average block time in seconds" v-model="averageTime" class="home-calculator-input-width" prefix="1 block/" @change="handleChange" homeStyle></input-item>
    </div>
    <div class="calculator-block home-calculator-block-size">
      <input-item  label="Currnet node count in NKN network" v-model="currentNode" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calculator-info home-info-seperate">
    <div class="calculator-block home-calculator-block-size">
      <input-item  label="Amount of your nodes" v-model="nodeSum" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
    <div class="calculator-block home-calculator-block-size">
      <input-item  label="Your nodes working time in months" v-model="workingTimes" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calcultor-compute home-info-seperate">
    <div class="price-block">
      <span class="nkn-price-title">NKN Price:</span>
      <span class="nkn-price-data">0.5100 $</span>
    </div>
    <div class="price-compute">
      <button-plugin class="compute-reset" :disabled="disabled" @click.native="reset">Reset</button-plugin>
      <button-plugin class="compute-calculate">Calculate</button-plugin>
    </div>
  </div>
  <div class="nb-home-calcultor-specific home-info-seperate">
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
      averageTime: '',
      currentNode: '',
      nodeSum: '',
      workingTimes: '',
      disabled: true
    }
  },
  methods: {
    reset () {
      this.averageTime = ''
      this.currentNode = ''
      this.nodeSum = ''
      this.workingTimes = ''
      this.disabled = !this.disabled
    },
    handleChange (e) {
      if (e) {
        this.disabled = false
      } else {
        this.disabled = true
      }
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
}
</style>
