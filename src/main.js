import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).mount('#app')
// 在檔案最下面加上這兩行
import App from './App.vue'
console.log('main.js 有執行，App 是：', App)
