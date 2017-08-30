import Vue from 'vue'
import App from 'App'
import VueRouter from 'vue-router'
import 'material-design-icons/iconfont/material-icons.css';
import {
    store
} from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [{
            path: '/',
            component: () =>
                import ('@/components/dataList')
        },
        {
            path: '/edit',
            component: () =>
                import ('@/components/editTable')
        }
    ]
})

new Vue({
    store: store,
    router,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')