module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],//定义文件继承的子规范
  plugins: ['@typescript-eslint'],//定义了该eslint文件所依赖的插件
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // hzxdf FE团队自定义
    'eqeqeq': 'off',
    'guard-for-in': 0,
    'global-require': 0,
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'semi': [2, 'never'],
    'import/named': 'off',
    'arrow-parens': 'off',
    'no-lonely-if': 'off',
    'no-useless-escape': 0,
    'no-unused-vars': [0, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-else-return': 'off',
    'prefer-destructuring': 'off',
    'import/no-dynamic-require': 0,
    'linebreak-style': ["off", "windows"],
    "max-classes-per-file": ["error", 20],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'ts': 'never'
    }],
    'dot-notation': 'off', // 允许 this['key']写法
    'comma-dangle': ['error', 'only-multiline'],
    'lines-between-class-members': 'off', // 不强制要求空一行
    'object-curly-newline': ['error', { 'consistent': true }],
    'no-restricted-syntax': 0, // 设置不允许使用的语法，0：不设置
    'class-methods-use-this': 'off', // 不强制要求class方法里要使用this
    'quote-props': ["error", "as-needed"], // 支持一个对象里，属性名可以带引号也可以不带引号
    'no-shadow': ["error", { "allow": ["state"] }], // 处理vuex state变量与传参state重名的报错
    'no-param-reassign': ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }],

    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': ["error", { "properties": "never" }], // 驼峰命名检测
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      }
    ],
  },
  env: {                          //指定代码的运行环境
    browser: true,
    node: true,
  }
}