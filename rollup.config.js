import json from 'rollup-plugin-json'

// rollup.config 的配置项参考官方文档，https://rollupjs.org/guide/zh/#big-list-of-options

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'TZPlayer'
  },
  plugins: [
    json()
  ]
}