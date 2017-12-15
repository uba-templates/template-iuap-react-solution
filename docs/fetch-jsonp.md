# fetch-jsonp之跨域请求

### 一、fetch-jsonp 概述

[fetch-jsonp](https://www.npmjs.com/package/fetch-jsonp)

安装 nam install fetch-jsonp;

## 兼容IE

IE8/9/10/11 does not support [ES6 Promise](https://tc39.github.io/ecma262/#sec-promise-constructor), run this to polyfill the global environment at the beginning of your application.

```
require('es6-promise').polyfill();
```

## 使用方法

JSONP only supports GET method, same as `fetch-jsonp`.

### 简单的方式获取JSONP

```
fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### 集JSONP回调参数名称，默认是“回调”

```
fetchJsonp('/users.jsonp', {
    jsonpCallback: 'custom_callback',
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### 集JSONP回调函数名称，默认的是一个json_prefix随机数

```
fetchJsonp('/users.jsonp', {
    jsonpCallbackFunction: 'function_name_of_jsonp_response'
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### JSONP请求超时设置，默认是5000ms

```
fetchJsonp('/users.jsonp', {
    timeout: 3000,
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```