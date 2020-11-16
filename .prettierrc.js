module.exports = {
  singleQuote: true, // 单引号
  trailingComma: 'es5', // 行尾逗号
  printWidth: 120, // 单行限制长度
  tabWidth: 4, // 一个tab长度
  bracketSpacing: true, // 对象内收尾空格
  // prettier对不同的文件有不同的默认规则，可用overrides字段覆盖
  overrides: [
    {
      "files": ["*.md", "*.json", "*.yml"],
      "options": {
        "tabWidth": 2
      }
    }
  ]
};
