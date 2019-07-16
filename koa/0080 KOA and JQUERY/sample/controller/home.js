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
  postlogin: async (ctx, next) => {
    // { name: '1', password: '1' }
    // console.log(ctx.request.body)
    let { name, password } = ctx.request.body
    let data = { err_code: 1 }
    if (name == '1' && password == '1') { data.err_code = 0 }

    ctx.response.body = data
  },
  news: async (ctx, next) => {
    let news = [
      {
        author: "小明1",
        date: "20190101",
        title: "第1条新闻",
        content: "第1条新闻内容"
      }, {
        author: "小明2",
        date: "20190101",
        title: "第2条新闻",
        content: "第2条新闻内容"
      }, {
        author: "小明3",
        date: "20190101",
        title: "第3条新闻",
        content: "第3条新闻内容"
      }, {
        author: "小明4",
        date: "20190101",
        title: "第4条新闻",
        content: "第4条新闻内容"
      }, {
        author: "小明5",
        date: "20190101",
        title: "第5条新闻",
        content: "第5条新闻内容"
      }
    ]

    ctx.response.body = news
  },

}