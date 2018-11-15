<template>
  <div class="nb-home-main">
    <div class="nkn-currency">
      <ul>
        <li>
          <currency-plugin title="Balance" data="18000.0000" unit="NKN"></currency-plugin>
        </li>
        <li>
          <currency-plugin title="Mining Reward" data="20000.0000" unit="NKN"></currency-plugin>
        </li>
        <li>
          <currency-plugin title="NKN/USDT Price" data="0.05100" unit="USDT"></currency-plugin>
        </li>
        <li>
          <currency-plugin title="NKN/ETH Price" data="0.0002210" unit="ETH"></currency-plugin>
        </li>
      </ul>
    </div>
    <div class="nkn-block">
      <ul>
        <li class="current-height"></li>
        <li class="current-transection"></li>
        <li class="average-time"></li>
        <li class="total-node"></li>
        <li class="version-info"></li>
      </ul>
    </div>
    <div class="nkn-node"></div>
  </div>
</template>

<script>
import CurrencyPlugin from '@/components/home/plugins/CurrencyPlugin.vue'
export default {
  name:'home-main',
  components: {
    CurrencyPlugin
  }
}
</script>

<style lang="less" scoped>
.nb-home-main{
  width: 928px;
  ul{
    margin: 0;padding: 0;
    display: inline-block;
    li{
      list-style-type: none;
      float: left;
    }
  }
  .nkn-currency{
    ul{
      li{
        width: 220px;height: 90px;
      }
      li+li{
        margin-left: 16px;
      }
    }
  }
  .nkn-block{
    margin-top: 16px;
    ul{

    }
  }
}
</style>
