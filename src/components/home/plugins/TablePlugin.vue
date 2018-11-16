<template>
  <div class="table-plugin">
    <div class="table-title">{{title}}</div>
    <div class="table-content">
      <table>
        <tr class="table-header">
          <th v-if="colHeader1">{{colHeader1}}</th>
          <th v-if="colHeader2">{{colHeader2}}</th>
          <th v-if="colHeader3">{{colHeader3}}</th>
          <th v-if="colHeader4">{{colHeader4}}</th>
        </tr>
        <tr class="table-record" v-for="(item, index) in data" :key="index">
          <td v-for="(value, index) in item" :key="index">{{value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: Array,
    colHeader1: String,
    colHeader2: String,
    colHeader3: String,
    colHeader4: String
  }
}
</script>

<style lang="less" scoped>
.table-plugin {
  .table-title{
    font-size: 14px;
    color: #000;
    margin-bottom: 14px;
  }
  .table-content{
    table{
      width: 100%;
      border-collapse: collapse;
      tr.table-header{
        th{
          text-align: left;
          padding: 4px 0;
          font-size: 12px;
          color: #8992b0;
          font-weight: normal;
        }
      }
      tr.table-record{
        border-bottom:2px solid #d0d5e7;
        td{
          padding: 10px 0;
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
}
</style>
