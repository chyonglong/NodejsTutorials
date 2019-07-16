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
    // { name: '1', password: '1' }
    // console.log(ctx.request.body)
    ctx.response.body = ctx.request.body
  },

}