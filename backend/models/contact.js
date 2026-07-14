const mongoose = require('mongoose');

const schima = new mongoose.Schema({

 name :{
    type : String,
    required : true
 },
 email :{
    type : String,
    required : true
 },
 phone :{
    type : String,
    required : true
 },
 answer:{
    type : Number,
    required : true
 },
 body :{
    type : String,
    required : true
 }
},
{timestamps : true}
);

const model = mongoose.model("Contact",schima);

module.exports = model