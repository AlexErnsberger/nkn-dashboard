<template>
<div class="nb-home-calculator home-component-position">
  <div class="nb-home-calculator-info">
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input1')" :prefix="$t('homeCalculator.input1Prefix')" v-model="averageTime" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input2')" v-model="NKNnodeNum" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calculator-info home-info-seperate">
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input3')" v-model="myNodeNum" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
    <div class="calculator-block home-calculator-block-size">
      <input-item  :label="$t('homeCalculator.input4')" v-model="workedTimes" class="home-calculator-input-width"  @change="handleChange" homeStyle></input-item>
    </div>
  </div>
  <div class="nb-home-calcultor-compute home-info-seperate">
    <div class="price-block">
      <span class="nkn-price-title">{{$t('homeCommon.price')}}{{$t('colon')}}</span>
      <span class="nkn-price-data">{{checkNull(NKNGlobalInfo, 'NKNprice')}} $</span>
    </div>
    <div class="price-compute">
      <button-plugin class="compute-reset" :disabled="disabled" @click.native="reset">{{$t('homeCalculator.btnReset')}}</button-plugin>
      <button-plugin class="compute-calculate" @click.native="dataCompute">{{$t('homeCalculator.btnCompute')}}</button-plugin>
    </div>
  </div>
  <div class="nb-home-calcultor-specific home-info-seperate">
    <calculator-item :title="$t('homeCalculator.result1')" :unit="$t('unit.NKN')" :data="checkNull(result, 'dailyToken')"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result2')" :unit="$t('unit.NKN')" :data="checkNull(result, 'monthToken')"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result3')" :unit="$t('unit.NKN')" :data="checkNull(result, 'NKNToken')"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result4')" :unit="$t('unit.$')" :data="checkNull(result, 'dailyProfit')"></calculator-item>
    <calculator-item :title="$t('homeCalculator.result5')" :unit="$t('unit.$')" :data="checkNull(result, 'monthProfit')"></calculator-item>
  </div>
  <common-loading v-if="getLoading"></common-loading>
</div>
</template>

<script>
import CalculatorItem from '@/components/home/calculator/plugins/CalculatorItem.vue'
import ButtonPlugin from '@/components/home/plugins/ButtonPlugin.vue'
import InputItem from '@/components/signin/plugins/InputItem.vue'
import CommonLoading from '@/components/base/CommonLoading.vue'
import checkNullMix from '@/assets/js/mixin/checkNull'
import loadingMix from '@/assets/js/mixin/loading'
import { mapGetters } from 'vuex'

export default {
  components: {
    ButtonPlugin,
    CalculatorItem,
    InputItem,
    CommonLoading
  },
  mixins: [checkNullMix, loadingMix],
  data () {
    return {
      averageTime: '',
      NKNnodeNum: '',
      myNodeNum: '',
      workedTimes: '',
      disabled: true,
      result: null
    }
  },
  computed: {
    ...mapGetters({
      NKNGlobalInfo: 'getGlobalInfo'
    })
  },
  methods: {
    reset () {
      if (!this.averageTime && !this.NKNnodeNum && !this.myNodeNum && !this.workedTimes) {
        return
      }
      this.averageTime = ''
      this.NKNnodeNum = ''
      this.myNodeNum = ''
      this.workedTimes = ''
      this.disabled = !this.disabled
    },
    handleChange (e) {
      if (e) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    dataCompute () {
      this.setLoading(true)
      this.$http.dataCompute(this, {
        averageTime: this.averageTime,
        NKNnodeNum: this.NKNnodeNum,
        myNodeNum: this.myNodeNum,
        workedTimes: this.workedTimes
      }, (res) => {
        let data = res.data
        if (res.status) {
          this.result = data
        }
        this.setLoading(false)
      })
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
