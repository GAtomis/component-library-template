import DefaultTheme from 'vitepress/theme'
import Button from '../../../dev-ui/button/button'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Tree from '../../../dev-ui/tree-test'

export default {
    ...DefaultTheme,
    enhanceApp(ctx){
        const {app}=ctx
        app.component("d-button",Button)
        app.use(Tree)
        DefaultTheme.enhanceApp(ctx)
        app.component("Demo",Demo)
        app.component("DemoBlock",DemoBlock) 
    }

 
}