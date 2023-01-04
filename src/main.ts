import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Tree from '../dev-ui/tree-test'

createApp(App).use(Tree).mount('#app')
