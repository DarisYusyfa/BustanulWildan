import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Testimoni from '../views/Testimoni.vue';
import Ppdb from '../components/Ppdb.vue';
import Pengajian from '../components/Pengajian.vue';
import Acaralain from '../components/Acaralain.vue';
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'services', component: Services },
      { path: 'contact', component: Contact },
      { path: 'testimoni', component: Testimoni },
      { path: 'ppdb', component: Ppdb },
      { path: 'pengajian', component: Pengajian },
      { path: 'acaralain', component: Acaralain },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
