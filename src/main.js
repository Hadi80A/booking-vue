import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './tailwind.css'

import toast from '@k90mirzaei/vue-toast';
import '@k90mirzaei/vue-toast/dist/index.css';


import 'mosha-vue-toastify/dist/style.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

import VueCookies from 'vue-cookies'



const app = createApp(App)

app.use(VCalendar, {})

app.use(toast)

app.use(VueCookies)


app.component('VueDatePicker', VueDatePicker);


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
