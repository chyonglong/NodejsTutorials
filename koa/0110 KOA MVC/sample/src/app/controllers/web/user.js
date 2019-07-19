const UserService = require('../../services/user')

module.exports = {
  
  register: async (ctx, next) => {
    await ctx.render('user/register', {
      btnName: 'GoGoGo'
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
  

}
