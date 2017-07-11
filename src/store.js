import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment (state) {
      return state.count++
    },

    decrement (state) {
      return state.count--
    }
  }
})

export default store
