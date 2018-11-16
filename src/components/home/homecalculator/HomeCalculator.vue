<template>
  <div class="nb-home-calculator">
    <div class="nb-home-calculator-info">
      <calculator-block class="calculator-block" title="Average block time in seconds" data="12" hasOrder></calculator-block>
      <calculator-block class="calculator-block" title="Currnet node count in NKN network" data="1000"></calculator-block>
    </div>
    <div class="nb-home-calculator-info">
      <calculator-block class="calculator-block" title="Amount of your nodes" data="2"></calculator-block>
      <calculator-block class="calculator-block" title="Your nodes working time in months" data="1"></calculator-block>
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
  </div>
</template>

<script>
import CalculatorBlock from '@/components/home/homecalculator/plugins/CalculatorBlock.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
export default {
  components: {
    CalculatorBlock, ButtonPlugin
  }
}
</script>

<style lang="less" scoped>
.nb-home-calculator{
  width: 928px;
  .nb-home-calculator-info{
    .home-common-flex;
    .calculator-block{
      .home-common-bg;
      .mixin-boxshadow;
      width: 455px;height: 100px;
    }
  }
  .nb-home-calcultor-compute{
    .home-common-flex;
    .home-common-bg;
    .mixin-boxshadow;
    .price-block{
      .nkn-price-title{
        .home-common-title-font;
      }
      .nkn-price-data{
        .home-commom-data-font;
        margin-left: 30px;
      }
    }
    .price-compute{
      .compute-reset{
        margin-right: 30px;
      }
    }
  }
  &>div+div{
    margin-top: 16px;
  }
}
</style>
