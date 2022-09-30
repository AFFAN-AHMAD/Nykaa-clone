const {Schema,model} = require('mongoose')


const UserSchema = new Schema({
    username:String,
    password:String,
    // age:Number,
    email:String,
})

const UserModel = model("user",UserSchema)


module.exports = UserModel