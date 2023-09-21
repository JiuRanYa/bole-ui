import { createRouter, createWebHistory } from 'vue-router'

document.title = 'sheet | Bole Design'

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'basic',
      component: () => import('../../docs/demos/bole-design/sheet/basic/index.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.afterEach(to => {
  document.title = `sheet - ${typeof to.name === 'string' ? to.name : 'dev'} | Bole Design`
})
