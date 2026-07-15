const courseUserModel = require("../models/course-user");
const courseModel = require("../models/course");
const { isValidObjectId } = require("mongoose");



exports.getAll = async (req, res) => {
    let allcourse = await courseUserModel.find({user:req.user._id}).populate("course", "name href")
    res.status(201).json(allcourse)

}


exports.getOne = async (req, res) => {
    let onecourse = await courseUserModel.find({_id:req.params._id})
    res.status(201).json(onecourse)

}
