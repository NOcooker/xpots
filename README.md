# xpots
基于ts编写的js工具库

[![Build Status](https://www.travis-ci.org/NOcooker/xpots.svg?branch=master)](https://www.travis-ci.org/NOcooker/xpots) [![Coverage Status](https://coveralls.io/repos/github/NOcooker/xpots/badge.svg?branch=master)](https://coveralls.io/github/NOcooker/xpots?branch=master)

# 安装代码格式化依赖 eslint | prettier
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier

新建 eslint | prettier 的配置文件

新增npm命令：lint | format

# 增加单元测试
npm install --save-dev jest ts-jest @types/jest

新增npm命令：test

# 项目结构说明
所有方法单独一个文件，写在src/下，为了doc页面内容没关，注释里都ignore掉，只在types/对应文件下复制一份备注
所有内部不对外开发的方法写在internal/里
所有类型声明、接口等写在types/里，一类的方法可以做合并，如math都用于计算

# 开发参考
每个方法需写明：作者，功能描述，参数，返回值

```
  @hidden 和 @ignore ：用于隐藏代码内容，不在文档展示
```
