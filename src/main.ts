import "the-new-css-reset/css/reset.css";
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TelegramInit from '@/telegram/init'
import materialSymbolsPlugin from '@dbetka/vue-material-symbols';
import 'material-symbols/index.css';
import timeago from 'vue-timeago3'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(timeago)
app.use(materialSymbolsPlugin)

app.mount('#app')

TelegramInit()