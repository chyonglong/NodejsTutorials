const router = require('koa-router')()

const HomeController = require('./controller/home')


module.exports = (app) => {
    // 3） 写路径

    router.get('/', HomeController.index);
    router.get('/home', HomeController.home);
    router.get('/about', HomeController.about);
    router.get('/login', HomeController.login);
    router.post('/logged', HomeController.logged);

    app.use(router.routes())
        .use(router.allowedMethods())

}