import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import GlobalComponent from '@/components/GlobalComponent.vue'


const vuetify = createVuetify({
    components,
    directives
})

createApp(App)
    .component('GlobalComponent', GlobalComponent)
    .use(vuetify)
    .mount('#app')
