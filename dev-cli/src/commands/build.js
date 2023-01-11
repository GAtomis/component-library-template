import path from 'path'
import fs from 'fs'
import { defineConfig, build} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'

const __filenameNew = fileURLToPath(import.meta.url)

const __dirnameNew = path.dirname(__filenameNew)
const entryDir = path.resolve(__dirnameNew, '../../../dev-ui')
const outputDir = path.resolve(__dirnameNew, '../../../build')

//vite配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()]
})
//rollup打包配置
const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: "Vue" //umd模式外置对象
        }
    }
}

//全局构建
const buildAll = async () => {
    await build(defineConfig({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, 'dev-ui.ts'),
                name: 'dev-ui',
                fileName: 'dev-ui',
                formats: ['es', 'umd']
            },
            outDir: outputDir
        }
    }))
}

const buildLib=async ()=> {
    await buildAll()
}
buildLib()