# 005 代码改动服务自动启动

当代码改动时候， 每次都要停止服务然后node app.js， 比较麻烦。

如果代码改动的时候， 有一些工具可以帮忙自动启动， 

## forever

``` bash
npm install -g forever

## forever -w app.js  替代 node app.js
forever -w app.js 

```


同样其他可以到达类似功能的有：
nodemon

node-supervisor

node-dev
