import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ImageCarousel from '../components/ImageCarousel.vue';
import PracticalInfo from '../components/PracticalInfo.vue';
import ApplicationForm from '../components/ApplicationForm.vue';
import ConcertProgram from '../components/ConcertProgram.vue';
import ContactPage from '../components/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/carousel', component: ImageCarousel },
  { path: '/practical-info', component: PracticalInfo },
  { path: '/apply', component: ApplicationForm },
  { path: '/concert-program', component: ConcertProgram },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
