const userModel = require("./../models/user");
const banUserModel = require("./../models/ban-phone");
const { isValidObjectId } = require("mongoose");
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

exports.getAll = async (req, res) => {
  const allUsers = await userModel.find({}).select("-password").lean();

  res.status(200).json({
    allUsers,
  });
};
exports.removeUser = async (req, res) => {
  const { id } = req.params;
  const isValidUser = isValidObjectId(id);

  if (!isValidUser) {
    return res.status(409).json({
      mess: "user is not valid",
    });
  }

  const deletUser = await userModel.findByIdAndDelete({ _id: id });
  if (!deletUser) {
    return res.status(409).json({
      mess: "user is not found",
    });
  }
  return res.status(200).json({
    mess: "user is deleted successfully",
  });
};
exports.updateRole = async (req, res) => {
  const { id } = req.body;
  const isValidUser = isValidObjectId(id);

  if (!isValidUser) {
    return res.status(409).json({
      mess: "user is not valid",
    });
  }

  const user = await userModel.findOne({ _id: id });
  if (!user) {
    return res.status(409).json({
      mess: "user is not found",
    });
  }

  const newRole = user.role === "ADMIN" ? "USER" : "ADMIN";

  const updateRole = await userModel.findOneAndUpdate({_id: id,},
    {
      role: newRole,
    });

    return res.status(200).json({
      mess: "user role is updated successfully",
    })

};
