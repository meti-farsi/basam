const userModel = require("../models/user");
const banUserModel = require("../models/ban-phone");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const registerValidator = require("../validators/userValidator");

exports.register = async (req, res) => {
  console.log(req.body);

  const validateRigester = registerValidator(req.body);

  console.log(validateRigester);

  if (validateRigester !== true) {
    return res.status(422).json(validateRigester);
  }

  let { username, name, email, password, phone } = req.body;

  const userExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (userExists) {
    res.status(422).json({
      mass: "user hast",
    });
  }
  const isUserBan = await banUserModel.find({ phone });

  if (isUserBan) {
    res.status(409).json({
      message: "this phon number ban",
    });
  }

  const userCount = await userModel.count();
  const hashPassword = bcrypt.hash(password, 10);

  const user = await userModel.create({ username, name, email, password:hashPassword, phone , role:userCount > 0 ? "USER" : "ADMIN"});
  

  accsesToken = jsonwebtoken.sign({id:user._id},process.env.JWT_SECRET,{
    expiresIn:"30 day"
  })

  return res.status(201).json(user , accsesToken)

  
};

exports.login = async (req, res) => {};

exports.getMe = async (req, res) => {};
