const corsesModel = require("../models/course");

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



