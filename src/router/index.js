import Vue from 'vue'
import Router from 'vue-router'
import Filters from '@/components/Filters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Filters',
      component: Filters
    }
  ]
})
