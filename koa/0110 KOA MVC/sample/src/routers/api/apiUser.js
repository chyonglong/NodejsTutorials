
const ApiUserController = require('../../app/controllers/api/v1/public/user')

module.exports = (router) => {
    
    router.post('/register', ApiUserController.register);
}