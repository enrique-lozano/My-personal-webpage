import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n/i18n';
import router from './router';

// swiper core styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
