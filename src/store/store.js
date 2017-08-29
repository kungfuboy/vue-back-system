import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        menuShow: false
    },
    mutations: {
        handleMenuState(state) {
            // 反转 menu 状态
            state.menuShow = !state.menuShow
        }
    }
})
