# mvc 

整体目录结构
```
├─ src                     源码
│  ├─ app                  业务代码
│  │  ├─ controllers       控制器：用于解析用户输入，处理后返回相应的结果
│  │  ├─ models            模型  ：用于定义数据模型
│  │  ├─ services          服务  ：用于编写业务逻辑层，比如连接数据库，调用第三方接口等
│  │  └─ views             视图  ：用于放置模板文件，返回客户端的视图层
│  │
│  ├─ config               配置
│  ├─ extends              扩展
│  ├─ middlewares          中间件
│  ├─ public               静态资源
│  ├─ routers                工具库
│  ├─ utils               路由 
│  └─ app.js             用于自定义启动时的初始化工作，比如启动 https，调用中间件、路由等
│  
├─ start.js            入口
├─ package.json            npm 配置文件
```

路由（routers）目录结构

```
├─ routers                  路由
│  ├─ router.js                   路由
│  ├─ api	                api 路由
│  ├─ web	                web 路由
│  │  
```

```
控制器（controllers）目录结构
├─ controllers             控制器
│  ├─ api                  接口
│  │  └─ v1                接口版本
│  │     ├─ admin          管理接口
│  │     │  ├─ actions     动作类接口
│  │     │  │
│  │     │
│  │     ├─ public         公开接口（无需鉴权即可调用）
│  │     │  ├─ users.js users 接口控制器
│  │     │
│  │     └─ some-app       某个应用的接口
│  │
│  ├─ web                  网站
│  │  └─ users.js          users 页面控制器
```

视图（views）目录结构

```
├─ views                   视图
│  ├─ user                  user
│  │  ├─ register.html      articles 页面视图
```


参考网站：

a Node.js MVC framework based on Koa.js. 基于 Koa.js 的 Node.js MVC 框架。
https://github.com/zhaotoday/less.js