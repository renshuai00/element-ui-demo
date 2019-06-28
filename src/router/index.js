import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/elementUI/button-element'
import Layout from '@/components/elementUI/layout-element'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },{
      path: 'navmenu',
      name: 'Navmenu',
      component: () =>import('@/components/elementUI/navmenu-element')
    }
  ]
})
