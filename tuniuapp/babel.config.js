module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [ //使用vant按需引入插件
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
