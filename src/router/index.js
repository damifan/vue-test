import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/f',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
