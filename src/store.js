import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment (state, payload = {}) {
      return state.count += payload.number || 1
    },

    decrement (state) {
      return state.count--
    }
  }
})

export default store
