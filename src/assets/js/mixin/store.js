export default {
  methods: {
    checkNull (obj, propName) {
      return obj ? (obj[propName] ? obj[propName] : '') : ''
    }
  }
}
