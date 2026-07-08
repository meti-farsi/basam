const mongoose = require('mongoose');

const schima = new mongoose.Schema({
 title :{
    type : String,
    required : true
 },
 href :{
    type : String,
    required : true
 },
},
{timestamps : true}
);

const model = mongoose.model("Category",schima);

module.exports = model