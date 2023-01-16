import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ui from '@library/dev-admin/build/tree-test'

createApp(App).use(ui).mount('#app')
