const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema(

    {
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            ref: "role",
            type: String
        }]
    },
    {
        timestamps:true,
        versionKey: false
    }
)
userSchema.statics.encryptPassword = async (password)=>{
  const salt = await bcryptjs.genSalt(10)
  return await bcryptjs.hash(password,salt)
}

userSchema.statics.comparePassword = async (password,receivedPassword)=>{
  return await bcryptjs.compare(password,receivedPassword)
}
module.exports =  mongoose.model('user', userSchema)