import Vue from 'vue'
import Router from 'vue-router'
import Tabs from '@/components/Tabs'
import Carousel from '@/components/Carousel'
import Formulario from '@/components/Formulario'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/formulario',
      name: 'Formulario',
      component: Formulario
    }
  ]
})
