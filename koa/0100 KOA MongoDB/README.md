# 连接上mongodb和mongoose

1. 安装mongodb参考 https://www.jianshu.com/p/d3b0106cad22
2. npm install mongoose --save
3. 在home.js.js中添加
``` javascript
const db = mongoose.connect("mongodb://localhost/testDB")

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
var User = mongoose.model('User',UserSchema);

// 新增数据
var user = {
  username: 'ydj',
  password: '123123',
  email: ''
}
var newUser = new User(user);
newUser.save();

router.get('/', async (ctx, next) => {
	let val = null
	const data = await User.findOne({username: 'ydj'})
	console.log('data', data)
	const result = {
		code:200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
})

```

这里的操作是： 新建一个用户的数据模型，接着讲user的数据加入到我们的testDB数据库中，接着当我们访问localhost:3000的时候，就会请求我们的数据库，查询到数据之后返回。可以从上面图上看到，我们刚开始是没有users这个集合的，当我们运行该程序的时候，我们的数据库就会自动新增该集合了和数据了：

``` bash
> mongo
> show dbs
testDB   0.000GB
>
> use testDB
switched to db testDB
>
>
> show collections
users
> db.users.find()
{ "_id" : ObjectId("5d2ed0a746877f9663e37f24"), "username" : "ydj", "password" : "123123", "email" : "", "__v" : 0 }
>

```

4. 访问http://localhost:3000/

页面显示
{"code":200,"response":{"_id":"5d2ed0a746877f9663e37f24","username":"ydj","password":"123123","email":"","__v":0},"ts":12345}


参考网站：

nodejs+koa2+mongodb 从0到1搭建自己的项目
https://juejin.im/post/5bad9b1af265da0ae80120fe6


linux如何查看端口被哪个进程占用？
https://www.cnblogs.com/CEO-H/p/7794306.html


mongodb
https://www.runoob.com/mongodb/mongodb-tutorial.html