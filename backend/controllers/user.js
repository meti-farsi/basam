const userModel = require("./../models/user");
const banUserModel = require("./../models/ban-phone");
const { isValidObjectId } = require("mongoose");
const bcrypt = require("bcrypt")
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

exports.updateUser = async (req, res) => {

  const updates = {};

  if (req.body.username) updates.username = req.body.username;
  if (req.body.name) updates.name = req.body.name;
  if (req.body.email) updates.email = req.body.email;
  if (req.body.phone) updates.phone = req.body.phone;
  
  if (req.body.password) {
      updates.password = await bcrypt.hash(req.body.password, 12);
  }
  
  const user = await userModel.findByIdAndUpdate(
      req.user._id,
      updates,
      {
          new: true,
          runValidators: true
      }
  )
  .select("-password")
  .lean();  

  return res.json(user)

}
