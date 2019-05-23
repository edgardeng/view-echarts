const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const {terser} = require('rollup-plugin-terser')
// import css from 'rollup-plugin-css-only'

const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const path = require('path')
const fs = require('fs')

const componentInfo = require('./component-list')
const {pkgTypeList, addons} = require('./config')

console.log(' ------------------------------')
console.log('|---     Roll Up Start     ----|')
console.log(' ------------------------------')

let pkg = []

pkgTypeList.forEach(({type, min, suffix}) => {
  Object.keys(componentInfo).forEach(name => {
    const {src, dist} = componentInfo[name]
    pkg.push({min, type, suffix, globalName: name, src, dist})
  })
})

pkg = pkg.concat(addons)

pkg.forEach(item => {
  rollupFn(item)
})

fs.mkdirSync(path.resolve(__dirname, '../lib'))

async function rollupFn(item) {
  try {

    const {min, dist, suffix, src: input, type: format, globalName: name} = item
    const plugins = [
      eslint(),
      commonjs(),
      postcss({
        plugins: [ autoprefixer, cssnano ],
        extract: 'lib/style.min.css' // 输出路径
      }),
      vue({
        // extract styles in a .css file.
        css: false
      }),
      resolve({extensions: ['.js', '.vue']}),
      babel({
        plugins: ['external-helpers'],
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
    // if (min) plugins.push(uglify({}, minify))
    if (min) {
      plugins.push(terser())
    }

    // const distPath = '../' + dist + suffix
    const file =  dist + suffix

    const isCommonjs = format === 'cjs'
    let reg = isCommonjs ? /(^(echarts|numerify|utils-lite)|(\/core|\/utils|\/constants)$)/ : /^(echarts)/
    const external = id => reg.test(id)
    const globals = {'echarts/lib/echarts': 'echarts'}

    const inputOpts = { input, external, plugins }
    // console.log(inputOpts);
    const bundle = await rollup.rollup(inputOpts)

    const outputOpts = { file, format, name, globals }
    let { code } = await bundle.generate(outputOpts)

    await bundle.write(outputOpts)

    // if (isCommonjs && code) {
    //   code = code.replace(
    //     /require\(['"](..?\/)+(utils|core|constants)['"]\)/g,
    //     'require(\'./$2\')'
    //   )
    // }
    // fs.writeFileSync(path.resolve(__dirname, distPath), code)
  } catch (e) {
    console.log('Rollup Error --> ', e.message, e)
  }
}
