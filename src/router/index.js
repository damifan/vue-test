import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Ue from '@/page/ue_test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
    }
  ]
})
