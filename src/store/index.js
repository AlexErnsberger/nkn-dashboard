import Vue from 'vue'
import Vuex from 'vuex'
import global from '@/store/global'
import nbNamespace from '@/assets/js/nbNamespace'

Vue.use(Vuex)

let modules = {}
modules[nbNamespace.GLOBAL] = global

const vuex = new Vuex.Store({
  modules: modules
})

export default vuex
