const Koa = require('koa');
const app = new Koa();

// ctx.body 赋值时， 就返回给客户端
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
console.log('app started at port 3000...');