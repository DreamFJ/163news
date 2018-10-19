import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import tabsFilter from '@/components/tabsFilter'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/tabsFilter',
            name: 'tabsFilter',
            component: tabsFilter
        }
    ]
})