$('#register_form').on('submit', function (e) {
    e.preventDefault()
    var formData = $(this).serialize()
    $.ajax({
        url: '/register',
        type: 'post',
        data: formData,
        dataType: 'json',
        success: function (data) {
            // var err_code = data.err_code
            if (data.code === 200) {
                // window.alert('注册成功！')

                let user = '<p>' + JSON.stringify(data.data) + '</p>'
                $('#userlist').append(user)

                // $('#userlist').append("user")

            } else {
                window.alert('注册错误')
            }
        }
    })
})