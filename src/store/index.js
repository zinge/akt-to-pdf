import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    akt: undefined,
    transferUser: {},
    acceptUser: {}
  },

  mutations: {
    changeAkt (state, payload) {
      state.akt = payload
    },
    addTransferUser (state, payload) {
      state.transferUser = payload
    },
    addAcceptUser (state, payload) {
      state.acceptUser = payload
    }
  }
})
