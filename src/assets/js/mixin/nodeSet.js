import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentNode: 'getCurrentNode',
      nodeList: 'getMyNodeList'
    })
  },
  methods: {
    ...mapMutations([
      'setNodeList', 'setCurrentNode'
    ]),
    getMyNodeList () {
      return this.$http.myNodeList(this, (res) => {
        let data = res.data
        if (res.status && data) {
          this.setNodeList(data)
          this.setCurrentNode(data[0])
        } else {
          alert('its myNodeList')
        }
      })
    }
  },
  mounted () {
    if (!this.nodeList) {
      this.getMyNodeList()
    }
  }
}
