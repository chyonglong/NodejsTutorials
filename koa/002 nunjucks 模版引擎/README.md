# get started

步骤 

1 快速建立 npm 项目
npm init -y

2 安装koa
npm install koa

3 安装 koa-nunjucks-2
npm install koa-nunjucks-2

4 建立views文件夹 和 hello.html 

hello.html
``` html
<h1>Hello {{ name }}</h1>
```

4 新起app.js 文件 代码如下

``` js
const Koa = require('koa');
const app = new Koa();
// 1) 定义path 和建立views 的文件夹
const path = require('path');

// 2) 定义 nunjucks
const nunjucks = require('koa-nunjucks-2');


// 3) 使用中间件
app.use(nunjucks({

  ext: 'html',

  path: path.join(__dirname, 'views'),   //制定视图目录

  nunjucksConfig: {

    trimBlocks: true   // 开启转译

  }
}))

// 4） views文件夹 下建立 hello.html ctx.render 渲染
app.use(ctx => {
  // ctx.body = 'Hello Koa';
  ctx.render('hello', {
    name: 'koa'
  })
});

app.listen(3000);
console.log('app started at port 3000...');
```

4 跑node app.js 运行
``` bash
node app.js
```

5 浏览器访问http://localhost:3000/



