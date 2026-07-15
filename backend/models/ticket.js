const mongoose = require("mongoose");


const schema = mongoose.Schema({
  DepartmentId: {
    type: mongoose.Types.objectId,
    ref:"Department",
    required: true,
  },
  DepartmentsubId: {
    type: mongoose.Types.objectId,
    ref:"DepartmentSub",
    required: true,
  },
  proirity:{
    type:Number,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  body:{
    type:Number,
    required:true
  },
  user:{
    type:mongoose.Types.objectId,
    ref:"User",
    required:true
  },
  answer:{
    type:Number,
    required:true
  },
  course:{
    type:mongoose.Types.objectId,
    ref:"User",
  },
},{ timestamps: true});

const model = mongoose.model("Ticket", schema);
module.exports = model;