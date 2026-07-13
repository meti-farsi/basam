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
       course: courseID,
        isAnswer : 0

    })

    res.status(201).json(comm)
}
exports.remove = async (req , res) =>{

    let commentID =  req.params.id

    console.log(commentID);
    
    
  let comm = await commentModel.findByIdAndDelete(commentID)

  if(!comm){
      res.status(201).json({mess:"نیست این دوره "})
      
    }
    res.status(201).json(comm)
}
exports.accept = async (req , res) =>{

  let commentaccept = await commentModel.findOneAndUpdate({_id:req.params.id},{
    isAccept:1
  })

  if(!commentaccept){
      res.status(201).json({mess:"نیست این کامنت "})
      
    }
    res.status(201).json(commentaccept)
}


exports.reject = async (req , res) =>{

    let commentrejected = await commentModel.findOneAndUpdate({_id:req.params.id},{
      isAccept:0
    })
  
    if(!commentrejected){
        res.status(201).json({mess:"نیست این کامنت "})
        
      }
      res.status(201).json(commentrejected)
  }