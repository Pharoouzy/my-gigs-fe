import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/gigs',
    name: 'gigs.index',
    component: () => import('../views/gigs/Create.vue'),
    children: [
      {
        path: 'create',
        name: 'gigs.create',
        component: () => import('../views/gigs/Create.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
