const UserService = require('../../../../services/user')

module.exports = {

    register: async (ctx, next) => {
        // {
        //     username: String,
        //     password: String,
        //     email: String
        // }
        let { username, password, email } = ctx.request.body
        let newUser = {
            username: username,
            password: password,
            email: email,
        }
        const data = await UserService.newUser(newUser)
        console.log('data', data)
        const result = {
            code: 200,
            data: newUser,
            ts: 12345
        }
        ctx.response.body = result
    }


}
