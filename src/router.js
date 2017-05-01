import Vue from 'vue';
import VueRouter from 'vue-router';

import authStore from './store/auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: require('./components/Home.vue')
    },
    {
      path: '/login', component: require('./components/authenticate/Login.vue')
    },
    {
      path: '/register', component: require('./components/authenticate/Register.vue')
    },
    {
      path: '/register', component: require('./components/authenticate/Register.vue')
    },
    {
      path: '/generate', component: require('./components/generate-steps/Generate.vue')
    },
    {
      path: '/split', component: require('./components/split/Split.vue')
    },
    {
      path: '/train', component: require('./components/program/Program.vue')
    },
    {
      path: '/workout/:type', component: require('./components/workout/Workout.vue')
    },
  ]
});


router.beforeEach((to, from, next) => {
  // these paths will not be redirected if not authorized
  const unprotected = ['/login', '/register'];

  if (!authStore.state.uid && (unprotected.indexOf(to.path) < 0)) {
    next({path: '/login'})
  } else {
    next();
  }
});

export default router;