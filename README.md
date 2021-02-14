logo预留

xpots 1.0  - [文档](https://nocooker.github.io/xpots/)
=========================
[![Build Status](https://www.travis-ci.org/NOcooker/xpots.svg?branch=master)](https://www.travis-ci.org/NOcooker/xpots) [![Coverage Status](https://coveralls.io/repos/github/NOcooker/xpots/badge.svg?branch=master)](https://coveralls.io/github/NOcooker/xpots?branch=master)

## 源自

`xpots` 是一个基于ts编写的js工具库。最开始来自于公司多个线上项目中公共js方法的大集合，为了不再繁琐的Ctrl+C/V，所以我们把所有公共的js方法集合到xpots里，并以npm包的形式安装到各个项目中。
> 同时集成了文档自动生成，方便后续别的小伙伴使用，学习。
> 同时，`xpots`还兼具学习ts的目的，整个项目基于ts编写，在编写方法的同时达到熟悉ts语法的目的。

## 安装

这个项目使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你本地安装了它们。

```sh
$ npm install xpots
```

## 使用说明

对于vue项目，可直接在main.js入口文件内引入，赋值到vue实例下，作为全局方法引用：
```
import xpots from 'xpots'
Vue.prototype.utils = xpots
```

## 其他优秀工具库

- [Lodash](https://github.com/lodash/lodash)

## 维护者

[@NOcooker](https://github.com/NOcooker)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/NOcooker/xpots/issues/new) 或者提交一个 Pull Request。
也可以fork项目，开发自己的工具库。

### 项目结构说明
所有方法单独一个文件，写在src/下，为了生成的doc页面内容美观，注释里都ignore掉，只在types/对应文件下复制一份备注
所有内部不对外开发的方法写在internal/里
所有类型声明、接口等写在types/里，一类的方法，如`lodash的math` 可以做合并

### 开发参考
通过 `npm run start` 开启ts watch 实时编译;  
通过 `npm run doc` 基于 gulp 根据代码变更自动生成对应文档;  
针对单文件测试，可以使用 `npm run test:single` 然后输入文件名，开始对本次编写的文件进行单元测试。如果直接测试全体文件，请使用 `npm run test`;  

每个方法需写明：作者，功能描述，参数，返回值
具体注释的写法可参考[tsdoc文档](https://typedoc.org/guides/doccomments/)，如：
```
  @hidden 和 @ignore ：用于隐藏代码内容，不在文档展示
```

### 贡献者

感谢以下参与项目的人：`hzxdffe`


## 使用许可

[MIT](LICENSE)
