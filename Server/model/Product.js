let mongoose = require('mongoose');
// let product = require("./Product")
let product = mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
})
let product_data  = mongoose.model('product',product);
module.exports = product_data;