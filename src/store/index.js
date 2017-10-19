import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    akt: undefined,
    acceptMember: {},
    transferMember: {},
    items: []
  },

  mutations: {
    changeAkt (state, payload) {
      state.akt = payload
    },
    addItem (state, payload) {
      state.items.push(payload)
    },
    dropItem (state, payload) {
      state.items.splice(payload, 1)
    },
    createAcceptMember (state, payload) {
      state.acceptMember = payload
    },
    createTransferMember (state, payload) {
      state.transferMember = payload
    }
  }
})
