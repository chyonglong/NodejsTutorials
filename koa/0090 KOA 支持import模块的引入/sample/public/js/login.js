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