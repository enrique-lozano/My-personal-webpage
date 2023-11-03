import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n/i18n';
import router from './router';

// swiper core styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.component('font-awesome-icon', FontAwesomeIcon);

/* add icons to the library */
library.add(faGithub, faEnvelope, faLinkedin, faFilePdf, faCalendar, faArrowUpRightFromSquare, faMoon, faSun);

app.mount('#app');
