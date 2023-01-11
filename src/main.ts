import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Tree from '../build/tree-test'

createApp(App).use(Tree).mount('#app')
