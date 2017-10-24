import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aktWithAgreement: false,
    acceptMember: {},
    transferMember: {},
    blocks: [
      {name: 'accept', changed: false},
      {name: 'transfer', changed: false},
      {name: 'items', changed: false}
    ],
    items: []
  },

  mutations: {
    changeAkt (state, payload) {
      state.aktWithAgreement = payload
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
    },
    changeBlock (state, payload) {
      let keyName = Object.getOwnPropertyNames(payload)
      state.blocks.forEach(function (element) {
        if (element.name === keyName[0]) {
          element.changed = payload[keyName]
        }
      }, this)
    }
  }
})
