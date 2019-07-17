

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