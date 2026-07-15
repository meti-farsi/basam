const mongoose = require("mongoose");


const schema = mongoose.Schema({
  test: {
    type: String,
    required: true,
  }
},{ timestamps: true});

const model = mongoose.model("Newsletter", schema);
module.exports = model;