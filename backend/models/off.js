const mongoose = require('mongoose');

const schima = new mongoose.Schema({

 code:{
    type : String,
    required : true
 },
 percent :{
    type : Number,
    required : true
 },
 course :{
    type :mongoose.Types.ObjectId,
    ref:"Course",
    required : true
 },
 max:{
    type : Number,
    required : true
 },
 uses :{
    type :Number,
    required : true
 }
},
{timestamps : true}
);

const model = mongoose.model("Off",schima);

module.exports = model