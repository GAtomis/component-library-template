



## 组件库搭建教学
### 配置tsconfig
查看tsconfig文件修改相关配置

#### 加入tsx支持
vite本事支持tsx组件编写 但是vue编译过程中是无法通过模版整合到vue中去编译渲染，于是我们引入插件
```
yarn add -D @vitejs/plugin-vue-jsx
```
#### 配置TSX支持
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import setupJSX from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),setupJSX()],
})

```

### 建立vitepress文档

#### 安装vitepress

```
yarn add -D vitepress
```
#### 创建第一个文档
```
    mkdir docs && echo `# Hello VitePress` > docs/index.md 
```

#### 配置文档启动命令
```
  "scripts": {
    "docs:dev":"vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
```
#### 启动文档

```
pnpm run  docs:dev
```
