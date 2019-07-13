const Koa = require('koa');
const app = new Koa();
const path = require('path');
const nunjucks = require('koa-nunjucks-2');

// 1） 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const staticServer = require('koa-static');



app.use(nunjucks({

  ext: 'html',

  path: path.join(__dirname, 'views'),   //制定视图目录

  nunjucksConfig: {

    trimBlocks: true   // 开启转译

  }
}))

// 2） log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// 3） 写路径
router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello Koa';
  ctx.render('index', {
    name: 'koa router'
  })
});

router.get('/about', async (ctx, next) => {
  // ctx.body = 'Hello Koa'; 
  ctx.render('hello', {
    name: 'about'
  })
});



// 4） add router middleware:
app.use(router.routes());

app.use(staticServer(path.join(__dirname , 'public')));

app.listen(3000);
console.log('app started at port 3000...');