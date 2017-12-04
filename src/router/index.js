import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Ue from '@/page/ue_test'
import Jq from '@/page/jq'
import Login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/content/:id',
      name: 'content',
      component: Content
    },
    {
      path: '/ue/',
      name: 'ue_test',
      component: Ue
    },
    {
      path: '/jq/',
      name: 'jq',
      component: Jq
    }
  ]
})
