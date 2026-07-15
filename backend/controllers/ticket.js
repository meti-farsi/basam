const departmentModel = require("../models/department");
const departmentsubModel = require("../models/departmentsub");
const courseModel = require("../models/course");
const { isValidObjectId } = require("mongoose");



exports.getAll = async (req, res) => {

}


exports.create = async (req, res) => {

}


exports.userTickets = async (req, res) => {
//6a578085221c039831b37461 فنی
//6a57809e1ed04dec52b0dfa9 مالی
}
exports.getDeps = async (req, res) => {
    let department = await departmentModel.find({})

    res.json(department)
}
exports.getDepSubs = async (req, res) => {
    let departmentsub = await departmentsubModel.find({parent:req.params.id}).lean()

    res.json(departmentsub)
}
exports.setAnswer = async (req, res) => {

}
exports.getAnswer = async (req, res) => {

}
