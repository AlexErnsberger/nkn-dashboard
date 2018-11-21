<template>
<div class="table-plugin">
  <div class="table-title">{{title}}</div>
  <div class="table-content">
    <table>
      <tr class="table-header">
        <th v-if="colHeader1" class="table-header-size">{{colHeader1}}</th>
        <th v-if="colHeader2" class="table-header-size">{{colHeader2}}</th>
        <th v-if="colHeader3" class="table-header-size">{{colHeader3}}</th>
        <th v-if="colHeader4" class="table-header-size">{{colHeader4}}</th>
      </tr>
      <tr class="table-record" v-for="(item, index) in currentData" :key="index">
        <td v-for="(value, index) in item" :key="index">{{value}}</td>
      </tr>
    </table>
  </div>
  <div class="table-separate" v-if="needSep">
    <table-separate-plugin :dataSum="dataSum" :eachPageSum="eachPageSum" @getData="handleData"></table-separate-plugin>
  </div>
</div>
</template>

<script>
import TableSeparatePlugin from '@/components/home/plugins/TableSeparatePlugin.vue'
export default {
  components: {
    TableSeparatePlugin
  },
  mounted () {
    this.currentData = this.data.slice(0, this.eachPageSum - 1)
  },
  props: {
    title: String,
    data: Array,
    dataSum: Number,
    eachPageSum: Number,
    needSep: Boolean,
    colHeader1: String,
    colHeader2: String,
    colHeader3: String,
    colHeader4: String
  },
  data () {
    return {
      currentData: this.data
    }
  },
  methods: {
    handleData (start, end) {
      this.currentData = this.data.slice(start, end)
    }
  }
}
</script>

<style lang="less" scoped>
.table-plugin {
  .table-title {
    font-size: 14px;
    color: #000;
    margin-bottom: 14px;
  }

  .table-content {
    height: 260px;
    overflow: auto;

    table {
      width: 100%;
      border-collapse: collapse;

      tr.table-header {
        th {
          text-align: left;
          padding: 4px 0;
          color: @home-table-color;
          font-weight: normal;

          &.table-header-size {
            font-size: 12px;
          }
        }
      }

      tr.table-record {
        border-bottom: 2px solid @home-common-border-color;

        td {
          padding: 10px 0;
          font-size: 12px;
          color: #000;
        }
      }
    }

    /**
    *滚动条设置
    */
    ::-webkit-scrollbar {
      /* 血槽宽度 */
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      /* 拖动条 */
      background-color: rgba(0, 0, 0, .3);
      border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
      /* 背景槽 */
      background-color: #ddd;
      border-radius: 6px;
    }
  }

  .table-separate {
    text-align: right;
    margin-top: 28px;
  }
}
</style>
