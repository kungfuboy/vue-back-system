import Vue from 'vue'
import App from 'App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [{
            path: '/',
            component: () => import('@/components/dataList')
        },
        {
            path: '/edit',
            component: () => import('@/components/editTable')
        }
    ]
})

new Vue({
    router,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')