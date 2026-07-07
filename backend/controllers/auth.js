const userModel = require("../models/user");
const banUserModel = require("../models/ban-phone");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const registerValidator = require("../validators/userValidator");
const { json } = require("body-parser");

exports.register = async (req, res) => {
  const validateRigester = registerValidator(req.body);

  if (validateRigester !== true) {
    return res.status(422).json(validateRigester);
  }

  let { username, name, email, password, phone } = req.body;

  const userExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (userExists) {
    return res.status(422).json({
      mass: "user hast",
    });
  }
  const isUserBan = await banUserModel.find({ phone });

  if (isUserBan.length) {
    return res.status(409).json({
      message: "this phon number ban",
    });
  }

  const userCount = await userModel.countDocuments();
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    name,
    email,
    password: hashPassword,
    phone,
    role: userCount > 0 ? "USER" : "ADMIN",
  });

  accsesToken = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 day",
  });

  return res.status(201).json({ user, accsesToken });

  let x = "sdvkn";
};

exports.login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  });

  if (!user) {
    return res.status(401).json({
      mes: "Ther is no user with email or username",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      mess: "password in not valid",
    });
  }

  const accessToken = jsonwebtoken.sign({id : user._id} , process.env.JWT_SECRET,{
    expiresIn : "30 day"
  });
 return res.status(200).json({accessToken})
};

exports.getMe = async (req, res) => {};
