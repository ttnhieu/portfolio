import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import lazyLoadService from '@/shared/utils/lazy-load.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: {
      template: '<router-view></router-view>',
    },
    meta: {
      isDefaultLayout: false,
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: lazyLoadService.loadView('HomeView'),
        meta: {
          isDefaultLayout: true,
        },
      },
      {
        path: 'todo',
        name: 'TodoPage',
        component: lazyLoadService.loadView('TodoView'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: 'todo/create',
        name: 'TodoCEPage',
        component: lazyLoadService.loadView('TodoCEView'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: 'job-listings',
        name: 'JobListingPage',
        component: lazyLoadService.loadView('JobListingsView'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: 'weather',
        name: 'WeatherPage',
        component: lazyLoadService.loadView('WeatherView'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: '404',
        name: 'NotFoundPage',
        component: lazyLoadService.loadView('404'),
      },
      // {
      //   path: '**',
      //   redirect: {
      //     name: 'HomePage',
      //   },
      // },
    ],
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
