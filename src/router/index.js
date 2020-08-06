import Vue from 'vue'
import VueRouter from 'vue-router'
import heads from '@/components/heads.vue'
import shi from '@/components/shi.vue'
import xinjin from '@/components/xinjin.vue'
import wode from '@/components/wode.vue'
import sous from '@/components/sous.vue'
import tui from '@/components/tui.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'heads',
    component: heads
  },
  {
    path: '/shi',
    name: 'shi',
    component: shi
  },
  {
    path: '/xinjin',
    name: 'xinjin',
    component: xinjin
  },
  {
    path: '/wode',
    name: 'wode',
    component: wode
  },
  {
    path: '/sous',
    name: 'sous',
    component: sous
  },
  {
    path: '/tui',
    name: 'tui',
    component: tui
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
