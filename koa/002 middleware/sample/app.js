const Koa = require('koa');
const app = new Koa();
var sleep = require('sleep');

let port = 4000
// ctx.body 赋值时， 就返回给客户端
// response
app.use((ctx, next) => {
  console.log("test1")
  next()
  console.log("test1 end")
});

app.use((ctx, next) => {
  console.log("test2")
  next()
  console.log("test2 end")
});

app.use((ctx, next) => {
  console.log("test3")
  next()
  console.log("test3 end")
});
app.listen(port);
console.log('app started at port ' + port);