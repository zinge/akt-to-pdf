import Vue from 'vue'
import Vuex from 'vuex'
import { hasValues } from '@/utils'

Vue.use(Vuex)

const initStore = () => ({
  acceptor: {},
  sender: {},
  items: [],
  modalTemplate: {},
  agreement: false,
  showModal: false,
  pdf: { content: [] }
})

export default new Vuex.Store({
  state: initStore(),

  mutations: {
    toggleModal (state) {
      state.showModal = !state.showModal
    },

    setAgreement (state, payload) {
      state.agreement = payload
    },

    setModalTemplate (state, payload) {
      state.modalTemplate = payload
    },

    saveData (state, payload) {
      if (payload.name !== 'items') {
        state[payload.name] = payload.values
        return
      }

      state[payload.name] = [
        ...state[payload.name],
        payload.values
      ]
    },

    clearStore (state) {
      const init = initStore()
      Object.keys(init).forEach(key => {
        state[key] = init[key]
      })
    },

    dropItem (state, payload) {
      state.items.splice(payload, 1)
    }
  },

  getters: {
    doneFill: state => [state.sender, state.acceptor, state.items].every(el => hasValues(el)),
    itemsCount: state => state.items.reduce((r, c) => +c.count + r, 0) || 0
  }
})
