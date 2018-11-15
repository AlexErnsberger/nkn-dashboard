<template>
  <div class="table-plugin">
    <div class="table-title">{{title}}</div>
    <div class="table-content">
      <ul>
        <li class="table-header">
          <span></span>
        </li>
        <li class="table-record">
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
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
    ul{
      margin: 0;padding: 0;
      li{
        list-style-type: none;
        .home-common-flex;
        &.table-header{
          padding: 4px 0;
          span{
            font-size: 12px;
            color: #8992b0;
          }
        }
        &.table-record{
          padding: 10px 0;
          border-bottom:2px solid #d0d57e;
        }
      }
    }
  }
}
</style>
