module.exports = {
  pkgTypeList: [
    { type: 'cjs', min: false, suffix: '.common.js' },
    { type: 'cjs', min: true, suffix: '.common.min.js' },
    { type: 'umd', min: false, suffix: '.js' },
    { type: 'umd', min: true, suffix: '.min.js' }
  ],
  addons: [
    {
      min: true,
      type: 'es',
      suffix: '.min.js',
      globalName: '',
      src: 'src/packages/index.js',
      dist: 'lib/index'
    },
    {
      min: false,
      type: 'cjs',
      suffix: '.js',
      globalName: '',
      src: 'src/packages/core.js',
      dist: 'lib/core'
    },
    {
      min: false,
      type: 'cjs',
      suffix: '.js',
      globalName: '',
      src: 'src/packages/utils.js',
      dist: 'lib/utils'
    },
    {
      min: false,
      type: 'cjs',
      suffix: '.js',
      globalName: '',
      src: 'src/packages/constants.js',
      dist: 'lib/constants'
    }
  ]
}
