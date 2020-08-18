# 使用Vue-Cli4 构建项目并开发组件库

## 创建项目
1. 首先安装最新的vue cli脚手架
　　` npm install --global @vue/cli `

2. 查看安装的vue -V

3. 创建项目
    `vue create view-echarts`

Vue CLI v4.4.6的创建选项和提示：

? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: ts_tmpl

4. 创建完成之后，会出现如下提示
  `cd view-echarts ; npm run serve `

5. 在浏览器输入地址：http://localhost:8080/

## 项目结构

项目自动生成的代码目录结构如下：
 
 ```
|__ public/
  |__ favicon.ico
  |__ index.html
|__ src/
  |__ assets/
  |__ components/
  |__ router/
  |__ store/
  |__ views/
  |__ App.vue
  |__ main.ts
  |__ shims-tsx.d.ts
  |__ shims-vue.d.ts
|__ tsconfig.json
|__ package.json
|__ .eslintrc.js 
|__ tsconfig.json
 ```

文件说明
两个声明文件：shims-vue.d.ts和shims.tsx.d.ts

* shims-vue.d.ts：由于 TypeScript 默认并不支持 *.vue 后缀的文件，所以在 vue 项目中引入的时候需要创建一个shims-vue.d.ts 文件，放在项目项目对应使用目录下，例如 src/shims-vue.d.ts，用来支持*.vue 后缀的文件

* shims-tsx.d.ts：允许.tsx 结尾的文件，在 Vue 项目中编写 jsx 代码

* tsconfig.json：typescript配置文件,主要用于指定待编译的文件和定义编译选项

* normalize.css：Normalize.css 是一个可以定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一。Normalize.css是一种CSS reset的替代方案。

* .browserslistrc：这个配置能够分享目标浏览器和nodejs版本在不同的前端工具。这些工具能根据目标浏览器自动来进行配置，Browserslist这个东西单独是没用的，（补充: 在vue官方脚手架中，browserslist字段会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。）

 　　browserslist的配置文件n内容：
   ```
　　> 1%              兼容全球使用率大于1%的游览器
　　last 2 versions   兼容每个游览器的最近两个版本
　　not ie <= 8       不兼容ie8及以下
   ```
   
* babel.config.js：Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
* postcss.config.js：用于配置将px转化成rem，和自动添加CSS浏览器前缀等。
* esnext 是一个 JavaScript 库，可以将 ES6 草案规范语法转成今天的 JavaScript 语法。

### 改造组件库项目结构

项目目录结构如下：

 ```
 |__ examples
   |__ App.vue
   |__ main.ts
|__ public/
  |__ favicon.ico
  |__ index.html
|__ src/
  |__ assets/
  |__ components/
  |__ router/
  |__ store/
  |__ views/
  |__ App.vue
  |__ main.ts
  |__ shims-tsx.d.ts
  |__ shims-vue.d.ts
|__ tsconfig.json
|__ package.json
|__ .eslintrc.js 
|__ tsconfig.json
 ```

examples：是组件使用示例
src/components：是组件源码

