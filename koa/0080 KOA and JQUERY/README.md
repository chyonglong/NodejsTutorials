jquery ajax 使用

1. 后端新建返回函数

login / news
   
2. view 页面加入 jquery

``` javascript
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>

// 声明逻辑处理的js
<script src="js/xxx.js"></script>

```


3. 控件触发ajax


html 定义form id
``` javascript

  <form id='login_form' method="post">
```

js 定义触发事件 ， ajax post url 并在success 处理返回结果

``` javascript
$('#login_form').on('submit', function (e) {
    e.preventDefault()
    var formData = $(this).serialize()
    $.ajax({
        url: '/login',
        type: 'post',
        data: formData,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            var err_code = data.err_code
            if (err_code === 0) {
                // window.alert('注册成功！')
                // 服务端重定向针对异步请求无效
                window.location.href = '/'
            } else if (err_code === 1) {
                window.alert('用户或密码错误')
            }
        }
    })
})
```

4. 页面加载触发


html 定义div id
``` javascript

   <div id="message"></div>
```

js 定义触发事件 ， ajax post url 并在success 处理返回结果

``` javascript
$(function () {
    $.ajax({
        type: 'POST',
        url: 'news',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            let news = data.map((item, index) => {
                return '<p>' + item.title + '</p>'
            }
            )
            console.log(news)
            $('#message').html(news)
        }
    })
})
```


参考网站：

jquery api
https://api.jquery.com/


jQuery + koa2 实现简单的Ajax请求
https://segmentfault.com/a/1190000013539516