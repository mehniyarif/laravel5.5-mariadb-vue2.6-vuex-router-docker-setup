import Vuex from 'vuex'

/* globally vuex structures */
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

/* vuex modules */
import board from './board'

window.store = new Vuex.Store({
    namespaced: true,
    getters,
    mutations,
    state,
    actions,
    modules: {
      board
    },
    strict: process.env.NODE_ENV !== 'production'
})