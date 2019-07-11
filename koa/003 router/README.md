
npm install koa-router

``` js
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const nunjucks = require('koa-nunjucks-2');

// 1） 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

// 2） log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// 3） 写路径
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

// 4） add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
```