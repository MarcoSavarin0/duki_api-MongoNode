const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const rolesSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4 
    },
    name: String, 
},{
    versionKey:false
})

module.exports =  mongoose.model('role', rolesSchema)