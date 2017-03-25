import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Start from '@/view/Start'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require(['@/view/home'],resolve)
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
