const courseesModel = require("../models/course");

exports.searchCourse = async(req, res)=>{

    const {keyword} = req.params;

    const course = await courseesModel.find({
        name : { $regex: ".*" + keyword + ".*" }
    })

    if(!course){
        return res.status(404).json({
            message : "No course found"
        })
    }
    return res.status(200).json(course)
}