const mongoose = require("mongoose")

const schema = mongoose.Schema({

    course:{
        type:mongoose.Types.ObjectId,
        required : true,
        ref:"Course"
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required : true,

    },
    price:{
        type:Number,
        required : true,
    },

})


const model = mongoose.model("CourseUser", schema)

module.exports = model