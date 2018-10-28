import Vue from 'vue'
import Router from 'vue-router'
import ViewButton from './views/ViewButton.vue'
import ViewInput from './views/ViewInput.vue'
import ViewTabs from './views/ViewTabs.vue'
import ViewToast from './views/ViewToast.vue'
import ViewPopover from './views/ViewPopover.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'button',
      component: ViewButton
    },
    {
      path: '/input',
      name: 'input',
      component: ViewInput
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: ViewTabs
    },
    {
      path: '/toast',
      name: 'toast',
      component: ViewToast
    },
    {
      path: '/popover',
      name: 'popover',
      component: ViewPopover
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
