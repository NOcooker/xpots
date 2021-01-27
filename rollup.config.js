// 为了支持import xx from 'xxx' 其实可以不用，因为tsconfig已经打包成es5了
import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript'; // https://github.com/rollup/rollup-plugin-typescript
import { uglify } from 'rollup-plugin-uglify' // 只支持ES5, 注意用结构式取uglify方法，否则会报错
import { minify } from 'uglify-es';
import pkg from './package.json'

export default {
  input: './lib/index.js',
  output: {
    name: 'xpots',
    file: pkg.main,
    format: 'umd'
  },
  plugins: [
    resolve(), // 解析import引入
    // typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
    uglify({},minify) // 压缩代码
  ]
}