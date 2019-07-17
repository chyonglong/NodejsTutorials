const Koa = require('koa');

const path = require('path');
const nunjucks = require('koa-nunjucks-2');

// 1） 注意require('koa-router')返回的是函数:
// const router = require('koa-router')();

const staticServer = require('koa-static');

const koaBody = require('koa-body'); // 解析 multipart、urlencoded和json格式的请求体

const app = new Koa();


//const router = require('./router.js');
import router from './router.js'

app.use(staticServer(path.join(__dirname , 'public')));

app.use(nunjucks({

  ext: 'html',

  path: path.join(__dirname, 'views'),   //制定视图目录

  nunjucksConfig: {

    trimBlocks: true   // 开启转译

  }
}))

app.use(koaBody()); // 通过该中间件解析POST请求的请求体才能拿到数据
// 4） add router middleware:

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router(app);

app.listen(3000);
console.log('app started at port 3000...');