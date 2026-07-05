const userModel = require("./../models/user");
const banUserModel = require("./../models/ban-phone");
exports.banUser = async (req, res) => {
  
  const mainUser = await userModel.findOne({ _id: req.params.id }).lean();
<<<<<<< HEAD
  const banUserResult = await banUserModel.create({ phone: mainUser.phone });
=======

  const banUserResult = banUserModel.create({ phone: mainUser.phone });


>>>>>>> 9f9bb7a (database new edited2)
  if (banUserResult) {
    return res.status(200).json({
      message: "user ban successfully :)",
    });
  }
  return res.status(500).json({
    message: "server Error !!",
  });
};
