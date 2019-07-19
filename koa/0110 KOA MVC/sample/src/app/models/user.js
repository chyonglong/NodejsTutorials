const mongoose = require('mongoose')

const db = mongoose.connect("mongodb://localhost/testDB")

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
var User = mongoose.model('User', UserSchema);

module.exports = {
    newUser: async (parms) => {
        var newUser = new User(parms);
        newUser.save();
    },
    getUserByName: async (parms) => {
        const data = await User.find(parms)
        return data
    }

}