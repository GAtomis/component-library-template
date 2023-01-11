import type {App} from 'vue'
import TreeInstall,{TreeTest} from './tree-test'

const installs =[TreeInstall]

export {
    TreeTest
}


export default {
    verison:'0.0.1',
    install(app:App):void{
        installs.forEach(comp=>app.use(comp))
    }
} 