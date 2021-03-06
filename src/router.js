import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Category from '@/pages/PageCategory'
import ThreadShow from '@/pages/PageThreadShow'
import Forum from '@/pages/PageForum'
import NotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
      // redirect: { name: 'Home' }
    }
  ]
})
