const userModel = require("./../models/user");
const banUserModel = require("./../models/ban-phone");
exports.banUser = async (req, res) => {
  const mainUser = await userModel.findOne({ _id: req.params.id }).lean();
  const banUserResult = await banUserModel.create({ phone: mainUser.phone });
  
 

  if (banUserResult) {
    return res.status(200).json({
      message: "user ban successfully :)",
    });
  }
  return res.status(500).json({
    message: "server Error !!",
  });
};

exports.getAll = async (req , res) =>{

  const allUsers = await userModel.find({}).select("-password").lean()
  
  res.status(200).json({
     allUsers
  })
}