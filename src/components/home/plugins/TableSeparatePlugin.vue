<template>
<div class="table-page-separate">
  <a class="go-previous" @click="firstPage">
      <img src="../../../assets/img/icon/firstpage.png">
    </a>
  <a class="go-previous" @click="previousPage">
      <img src="../../../assets/img/icon/previouspage.png">
    </a>
  <span>{{currentPage}}-{{pageSum}}</span>
  <a class="go-next" @click="nextPage">
      <img src="../../../assets/img/icon/nextpage.png">
    </a>
  <a class="go-next" @click="lastPage">
      <img src="../../../assets/img/icon/lastpage.png">
    </a>
</div>
</template>

<script>
export default {
  props: {
    dataSum: Number,
    eachPageSum: Number
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    firstPage () {
      if (this.currentPage === 1) {
        return
      }
      this.$emit('getData', 0, this.eachPageSum - 1)
      this.currentPage = 1
    },
    lastPage () {
      if (this.currentPage === this.pageSum) {
        return
      }
      this.$emit('getData', this.eachPageSum * (this.pageSum - 1), this.dataSum - 1)
      this.currentPage = this.pageSum
    },
    previousPage () {
      if (this.currentPage === 1) {
        return
      }
      this.$emit('getData', (this.currentPage - 2) * this.eachPageSum, (this.currentPage - 1) * this.eachPageSum - 1)
      this.currentPage -= 1
    },
    nextPage () {
      if (this.currentPage === this.pageSum) {
        return
      }
      this.$emit('getData', this.currentPage * this.eachPageSum, (this.currentPage + 1) * this.eachPageSum - 1)
      this.currentPage += 1
    }
  },
  computed: {
    pageSum () {
      return Math.ceil(this.dataSum / this.eachPageSum)
    }
  }
}
</script>

<style lang="less" scoped>
.table-page-separate {
  display: inline-block;

  a {
    display: inline-block;
    box-sizing: border-box;
    width: 32px;
    line-height: 32px;
    border-radius: 50%;

    img {
      width: 14px;
      height: 14px;
      position: relative;
    }

    img+img {
      margin-left: 24px;
    }

    &:hover {
      background: #ecedf2;
    }

    &.go-previous {
      padding-right: 10px;
    }

    &.go-next {
      padding-right: 8px;
    }
  }

  a+a {
    margin-left: 24px;
  }

  span {
    font-size: 14px;
    color: #8992b0;
    margin: 0 24px;
  }
}
</style>
