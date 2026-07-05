const mongoose = require('mongoose');

const schima = new mongoose.Schema({

 phone :{
    type : String,
    required : true
 }
},
{timestamps : true}
);

const model = mongoose.model("BanUser",schima);

module.exports = model