const {Schema,model} = require('mongoose')
//Add validations

const UserSchema = new Schema({
    username:String,
    password:String,
    // age:Number,
    email:String,
})

const UserModel = model("user",UserSchema)


module.exports = UserModel