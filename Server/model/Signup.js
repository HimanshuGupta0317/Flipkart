let mongoose = require('mongoose');
let userdata = mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require :true
    },
    password:{
        type:String,
        require :true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:"user"

    }
})
let User = mongoose.model('Joy',userdata);
module.exports = User