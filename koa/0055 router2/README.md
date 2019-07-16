把路由独立起来 ， 接收get / post 并 用控制器处理业务逻辑


1. 新建控制器 controller/home.js


``` javascript
// const HomeService = require('../service/home')
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
  },
  home: async (ctx, next) => {
    await ctx.render('home/index', {
      name: 'Home'
    })
  },
  about: async (ctx, next) => {
    await ctx.render('about/about', {
      name: 'About'
    })
  },
  login: async (ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    })
  },
  logged: async (ctx, next) => {
    ctx.response.body = `<h1>logged</h1>`
  },

}
```

2. 新建 ./router.js

``` javascript

const router = require('koa-router')()

const HomeController = require('./controller/home')


module.exports = (app) => {
    // 3） 写路径

    router.get('/', HomeController.index);
    router.get('/home', HomeController.home);
    router.get('/about', HomeController.about);
    router.get('/login', HomeController.login);
    router.post('/logged', HomeController.logged);

    app.use(router.routes())
        .use(router.allowedMethods())

}

```

3. router在 app.js 引用如下

``` javascript

const router = require('./router.js')
.
.
.

router(app);
```


4. get and post, 其中router.get是 get 请求; router.post是 post 请求

app.js中 引用 解析POST

``` javascript
// .
// .
// ,
const koaBody = require('koa-body'); // 解析 multipart、urlencoded和json格式的请求体

// .
// .
// .
app.use(koaBody()); // 通过该中间件解析POST请求的请求体才能拿到数据
// .
// .
// .
```
router.js中 引用 接收如下

``` javascript 
    router.get('/login', HomeController.login);
    router.post('/logged', HomeController.logged);
```

5. 获取post 内容并输出

``` javascript 
// .
// .
// .
 ctx.response.body = ctx.request.body
// .
// .
// .
```


参考网站：

curl post
https://blog.csdn.net/fungleo/article/details/80703365

nunjucks
https://github.com/ikcamp/koa2-tutorial/tree/5-nunjucks


jQuery + koa2 实现简单的Ajax请求
https://segmentfault.com/a/1190000013539516