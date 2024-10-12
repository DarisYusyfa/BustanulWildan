import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Testimoni from '../views/Testimoni.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'services', component: Services },
      { path: 'contact', component: Contact },
      { path: 'testimoni', component: Testimoni },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
