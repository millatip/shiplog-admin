import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/starter/SampleLayout.vue';
import Starter from '../layout/starter/SamplePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/cargo-management',
      component: DashboardLayout,
      children: [
        {
          path: 'cargo-management',
          name: 'cargo management',
          components: { default: Starter }
        }
      ]
    }
  ]
});
