const commentModel = require('./../models/comment')
const courseModel = require('./../models/course')


exports.create = async (req , res) =>{

    let {body , courseHref , score} = req.body
    let course = await courseModel.findOne({href:"back"})
    let creator = await req.user._id

    
    
    
    
    let courseID =  course._id
    
    console.log(body,courseHref,score);
    console.log(courseID , creator);
    
  let comm = await commentModel.create({
        isAccept:0,
        body,
        score,
        creator,
        isAccept:0,
        courseID,
        isAnswer : 0,
        mainCommentID : ""

    })

    res.status(201).json(comm)
}