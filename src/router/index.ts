import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        component:()=>import('../views/Home'),
        children:[
            
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        const toTop = { top: 0 }
        if (savedPosition) {
            return savedPosition
        } else {
            return toTop
        }
    }
})

export default router