import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "isimple" */ './views/iSimple.vue'),
      children: [
        {
          path: '',
          name: 'home',
          meta: {
            scrollToTop: false,
          },
          component: () =>
            import(/* webpackChunkName: "isimple-home" */ './views/iSimple/Home.vue'),
        },
        {
          path: 'epaper',
          name: 'e-paper',
          meta: {
            scrollToTop: false,
          },
          component: () =>
            import(/* webpackChunkName: "isimple-home" */ './views/iSimple/Epaper.vue'),
        },
        {
          path: 'about',
          name: 'about',
          meta: {
            scrollToTop: false,
          },
          component: () =>
            import(/* webpackChunkName: "isimple-about" */ './views/iSimple/About.vue'),
        },
        {
          path: 'works',
          name: 'works',
          meta: {
            scrollToTop: false,
          },
          component: () =>
            import(/* webpackChunkName: "isimple-works" */ './views/iSimple/Works.vue'),
        },
        {
          path: 'projects',
          name: 'projects',
          meta: {
            scrollToTop: false,
          },
          component: () =>
            import(/* webpackChunkName: "isimple-projects" */ './views/iSimple/Projects.vue'),
        },
        {
          path: 'detail/:id',
          name: 'detail',
          meta: {
            scrollToTop: true,
          },
          component: () =>
            import(/* webpackChunkName: "isimple-detail" */ './views/iSimple/Detail.vue'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    let position = { selector: to.hash }
    if (to.meta.scrollToTop || !savedPosition) {
      position = { x: 0, y: 0 }
    } else {
      position = savedPosition
    }
    // for page transition async scroll
    if (to.name !== from.name) {
      return new Promise(resolve => {
        this.app.$root.$once('scrollBeforeEnter', () => {
          this.app.$root.$nextTick(() => resolve(position))
        })
      })
    }
  },
})
