import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getLoading'
    ])
  },
  methods: {
    ...mapMutations([
      'setLoading'
    ])
  }
}
