export default {
  methods: {
    checkNull (obj, propName, rtnType) {
      if (!rtnType) {
        return obj ? (obj[propName] ? obj[propName] : '') : ''
      } else if (rtnType === 'array') {
        return obj ? (obj[propName] ? obj[propName] : []) : []
      }
    }
  }
}
