
const WebUserController = require('../../app/controllers/web/user')

module.exports = (router) => {
    router.get('/register', WebUserController.register);

}