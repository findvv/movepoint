# 小数点移动

## 安装

```bash
$ npm install sm-movepoint
```
## 测试
```bash
$ npm test
```
## 使用方法
```javascript
var movepoint = require('sm-movepoint');
movepoint(1.1, 2)    //  110
movepoint(1.1, -2)    //  0.011
movepoint(1.1, 0)    //  1.1
movepoint(-1.1, 2)    //  -110
movepoint(-1.1, -2)    //  -0.011
```
