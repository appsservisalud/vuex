import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')