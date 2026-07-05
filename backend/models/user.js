const mongoose = require('mongoose');

const schima = new mongoose.Schema({
 username :{
    type : String,
    required : true
 },
 name :{
    type : String,
    required : true
 },
 email :{
    type : String,
    required : true,
    unique : true
 },
 password :{
    type : String,
    required : true
 },
 phone :{
    type : String,
    required : true
 },
 role:{
    type :String ,
    default : "USER",
    required: true,
    enum:["ADMIN" , "USER"]
 }
},
{timestamps : true}
);

const model = mongoose.model("User",schima);

module.exports = model