import Vue from "vue"; //引入Vue模块
import Vuex from "vuex"; //引入vuex模块
Vue.use(Vuex); //使用vuex

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;