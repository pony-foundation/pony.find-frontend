import "the-new-css-reset/css/reset.css";
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TelegramInit from '@/telegram/init'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

TelegramInit()