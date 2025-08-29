const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {name:String,required:true},
    {email:String,required:true,unique:true},
    {password:String,required:true},
    {phone:Number,required:true}
)

const User = mongoose.model("User",userSchema)

module.exports = User;