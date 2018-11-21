<template>
<div class="nb-home-calculator home-component-position">
  <div class="nb-home-calculator-info">
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input1')" :prefix="$t('homeCalculator.input1Prefix')" v-model="averageTime" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input2')" v-model="currentNode" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calculator-info home-info-seperate">
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input3')" v-model="nodeSum" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input4')" v-model="workingTimes" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calcultor-compute home-info-seperate">
    <div class="price-block">
      <span class="nkn-price-title">{{$t('homeCommon.price')}}</span>
      <span class="nkn-price-data">0.5100 $</span>
    </div>
    <div class="price-compute">
      <button-plugin class="compute-reset" :disabled="disabled" @click.native="reset">{{$t('homeCalculator.btnReset')}}</button-plugin>
      <button-plugin class="compute-calculate">{{$t('homeCalculator.btnCompute')}}</button-plugin>
    </div>
  </div>
  <div class="nb-home-calcultor-specific home-info-seperate">
    <calculator-item :title="$t('homeCalculator.result1')" :unit="$t('unit.NKN')" data="144"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result2')" :unit="$t('unit.NKN')" data="4320"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result3')" :unit="$t('unit.NKN')" data="864"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result4')" :unit="$t('unit.$')" data="1.4400"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result5')" :unit="$t('unit.$')" data="43.2"></calculator-item>
  </div>
  <common-loading v-if="false"></common-loading>
</div>
</template>

<script>
import CalculatorItem from '@/components/home/homecalculator/plugins/CalculatorItem.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
import InputItem from '@/components/signin/plugins/InputItem.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
export default {
  components: {
    ButtonPlugin,
    CalculatorItem,
    InputItem,
    CommonLoading
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
