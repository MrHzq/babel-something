# js-npm-template

[![Build Status](https://travis-ci.org/MrHzq/js-npm-template.svg?branch=master)](https://travis-ci.org/MrHzq/js-npm-template) [![Coverage Status](https://coveralls.io/repos/github/MrHzq/js-npm-template/badge.svg?branch=master)](https://coveralls.io/github/MrHzq/js-npm-template?branch=master)

JavaScript Npm 包 模板

## 发布流程

1. `npm run build`
2. `npm run cover（可省略）`
3. `npm login`
4. `npm version patch`
5. `npm publish`

## 安装

```sh
 cnpm i js-npm-template -S
```

```sh
 npm install js-npm-template --save
```

```sh
 yarn add js-npm-template
```

## 使用

```javascript
import { Jsadd } from 'js-npm-template'

console.log(Jsadd(100, 1000))
```
