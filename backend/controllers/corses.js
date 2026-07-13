const corsesModel = require("../models/course");
const CourseUserModel = require("../models/course-user");
const sessionModel = require("../models/session");
const commentModel = require("../models/comment");
const Category = require("../models/category");
const isValidObjectId = require("mongoose")

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

  console.log(req.user);

  const course = await corsesModel.create({
    name,
    description,
    cover: req.file.filename,
    href,
    status,
    price,
    support,
    catgoryID,
    creator: req.user._id,
    discount,
  });

  const mainCourse = await corsesModel
    .findById(course._id)
    .populate("creator", "-password");

  return res.status(201).json({
    mainCourse,
  });
};
exports.getAllSession = async (req, res) => {
  const mainCourse = await corsesModel
    .find()
    .populate("catgoryID", "title")
    .populate("creator", "name");

  return res.status(201).json({
    mainCourse,
  });
};

exports.getSessionInfo = async (req, res) => {
  const Course = await corsesModel
    .findOne({ href: req.params.href })
    .populate("creator")
    .lean();
  console.log(Course);

  const session = await sessionModel
    .findOne({ _id: req.params.sessionID })
    .populate("course")
    .lean();

  const sessions = await sessionModel
    .find({ course: Course._id })
    .populate("course")
    .lean();

  console.log(Course._id);

  return res.status(201).json({ Course, session, sessions });
};
exports.removeSession = async (req, res) => {
  console.log(req.params);

  const course = await sessionModel.findByIdAndDelete(req.params.id);

  if (!course) {
    res.status(201).json({ mass: "این قسمت پیدا نشد" });
  }

  return res.status(201).json({ course });
};

exports.register = async (req, res) => {
  let isUserRegisteralredy = await CourseUserModel.findOne({
    user: req.user._id,
    course: req.params.id,
  }).lean();

  if (isUserRegisteralredy) {
    return res.json({ test: "قبلا ثبت نام شده " });
  }

  let UserRegister = CourseUserModel.create({
    user: req.user._id,
    course: req.params.id,
    price: req.body.price,
  });

  res.json({ mess: " ثبت نام شد " });
};
exports.getByCategory = async (req, res) => {
  let categoryIDs = await Category.findOne({ href: req.params.href });

  if (!categoryIDs) {
    return res.json([]);
  }
  let courses = await corsesModel.find({
    catgoryID: categoryIDs._id,
  });

  res.json({ categoryIDs, courses });
};
exports.getOneCourse = async (req, res) => {
  console.log(req.params);

  let course = await corsesModel
    .findOne({ href: req.params.href })
    .populate("catgoryID")
    .populate("creator","-password")
    .lean();

  if(!course){
    return res.json({mess:"این دوره رو نداریم"})

  }
  let sessions = await sessionModel.find({ course: course._id }).lean();
  let comments = await commentModel.find({ course: course._id }).populate("creator","-password").lean();
  
  let countuserregistered = await CourseUserModel.findOne({ course: course._id }).countDocuments();
  let userRegistered = !!(await CourseUserModel.findOne({user:req.user._id, course: course._id }));
  console.log(req.user._id);
  
return res.json({course, sessions ,comments ,countuserregistered, userRegistered});
};
exports.relatedCoureses = async (req, res) => {
  console.log(req.params);

  let course = await corsesModel
    .findOne({ href: req.params.href })

  if(!course){
    return res.json({mess:"این دوره رو نداریم"})

 const deletUser = await corsesModel.findByIdAndDelete({_id :req.params.id})

  let course = await corsesModel
    .findByIdAndDelete(req.params.id)

  if(!course){
    return res.json({mess:"این دوره رو نداریم"})

  }  
  
return res.json(course);
}
}
