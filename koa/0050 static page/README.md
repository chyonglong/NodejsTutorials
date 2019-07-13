
1. npm install koa-static
2. 新建public文件夹
3. 建立想对应的images / css / js 文件夹
4. 引用如下
``` js

const staticServer = require('koa-static');
app.use(staticServer(path.join(__dirname , 'public')));

//...

```
5. 静态资源（）直接引用， 如下, **不用public目录**

``` html
<link rel="stylesheet" href="css/style.css" media="screen" />

<p  class="test">test</p>
<div  class="testdiv"><img src="images/search-btn.png"/></div>

```