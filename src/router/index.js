import Vue from 'vue'
import VueRouter from 'vue-router'
// import hello from '@/components/HelloWorld.vue'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect:'/index',
    children:[{
        path:'/index',
        name:'/index',
        component:Index
    },
    {
        path:'s/:name',
        name:'goods',
        component:goodsList
    },
    {
        path:'/changeCity',
        name:'changeCity',
        component:changeCity
    }
]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children:[
        {
            path:'login',
            name:'login',
            component:Login
        },
        {
            path:'register',
            name:'register',
            component:Register
        }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
