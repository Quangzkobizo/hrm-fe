import { createApp } from 'vue'
import App from './App.vue'

//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import router from './router'

createApp(App).use(router).mount('#app')
