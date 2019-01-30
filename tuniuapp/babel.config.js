module.exports = {
  presets: [
    '@vue/app',
    ["es2015", { "modules": false }]
  ],
  plugins: [ //使用vant按需引入插件
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
    ,
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}


