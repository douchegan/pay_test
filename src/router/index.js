import Vue from 'vue'
import Router from 'vue-router'
import PayIndex from '@/components/PayIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PayIndex',
      component: PayIndex
    }
  ]
})
