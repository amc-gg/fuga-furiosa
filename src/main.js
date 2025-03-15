import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './locales/i18n';
import { FontAwesomeIcon } from './plugins/fontawesome';

createApp(App)
  .use(router)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');