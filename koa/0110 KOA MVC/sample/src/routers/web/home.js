const HomeController = require('../../app/controllers/web/home')
module.exports = (router) => {
    
    router.get('/', HomeController.index);
    router.get('/home', HomeController.home);
    router.get('/about', HomeController.about);
    router.get('/login', HomeController.login);
    router.post('/login', HomeController.postlogin);
    router.post('/news', HomeController.news);

}