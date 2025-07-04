import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

import Loader from '@/components/Loader.vue'
app.component('Loader', Loader)

app.mount('#app')
