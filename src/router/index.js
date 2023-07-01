import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '',
          alias: ['/hotel'],
          name : 'hotel and sweets',
          components:{
            search: () => import('../components/search/Hotel.vue')
          }
        },
        {
          path: '/flight-ticket',
          name : 'flight-ticket',
          components:{
            search: () => import('../components/search/Flight.vue')
          }
        },
        {
          path: '/bus-ticket',
          name : 'bus-ticket',
          components:{
            search: () => import('../components/search/Bus.vue')
          }
        },
        {
          path: '/train-ticket',
          name : 'train-ticket',
          components:{
            search: () => import('../components/search/Train.vue')
          }
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResultView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },
    
  ]
})

export default router
