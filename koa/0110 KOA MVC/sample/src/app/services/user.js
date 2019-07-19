const UserModel = require('../models/user')

module.exports = {
    newUser: async (parms) => {
        const data = await UserModel.newUser(parms)
        return data
    },
    getUserByName: async (parms) => {
        const data = await UserModel.getUserByName(parms)
        return data
    }

}