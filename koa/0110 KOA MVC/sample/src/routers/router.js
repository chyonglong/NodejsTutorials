const router = require('koa-router')()

const home = require('./web/home')
const webUser = require('./web/webUser')
const apiUser = require('./api/apiUser')

module.exports = (app) => {
    // 3） 写路径

    home(router)
    webUser(router)
    apiUser(router)

    app.use(router.routes())
        .use(router.allowedMethods())

}