const corsesModel = require("../models/course");
const sessionModel = require("../models/session");

exports.create = async (req, res) => {
  const {
    name,
    description,
    href,
    status,
    price,
    support,
    catgoryID,
    discount,
  } = req.body;

  console.log(req.user)

  const course = await corsesModel.create({
    name,
    description,
    cover: req.file.filename,
    href,
    status,
    price,
    support,
    catgoryID,
    creator : req.user._id,
    discount,
  });

  const mainCourse = await corsesModel.findById(course._id).populate("creator" , "-password")

  return res.status(201).json({
    mainCourse
  })

};
exports.getAllSession = async (req, res) => {

  const mainCourse = await corsesModel.find().populate("catgoryID","title").populate("creator","name")

  return res.status(201).json({
    mainCourse
  })

};

exports.getSessionInfo = async (req, res) => {

  const Course = await corsesModel.findOne({href:req.params.href}).populate("creator").lean()
  console.log(Course);
  

  const session = await sessionModel.findOne({_id:req.params.sessionID}).populate("course").lean()

  const sessions = await sessionModel.find({course : Course._id}).populate("course").lean()

console.log(Course._id);


  return res.status(201).json({Course ,session,sessions })

};
exports.removeSession = async (req, res) => {

  console.log(req.params);
  
  const course = await sessionModel.findByIdAndDelete(req.params.id);

if(!course){
  res.status(201).json({mass:"این قسمت پیدا نشد" })

}

  return res.status(201).json({course })

};


