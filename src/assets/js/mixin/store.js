export default {
  methods: {
    checkNull (obj, propName) {
      if (propName) {
        return obj ? (obj[propName] ? obj[propName] : '') : ''
      }
    }
  }
}
