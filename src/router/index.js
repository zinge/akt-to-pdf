import Vue from 'vue'
import Router from 'vue-router'
import TheDashboard from '@/components/TheDashboard'
const ResultPdf = () => import('@/components/ResultPdf')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheDashboard',
      component: TheDashboard
    },
    {
      path: '/result',
      component: ResultPdf
    }
  ]
})
