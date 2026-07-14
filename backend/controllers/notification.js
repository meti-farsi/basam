const NotificationModel = require("../models/notificatin");
const { isValidObjectId } = require("mongoose");

exports.create = async (req, res) => {
  const { message, admin } = req.body;

  const notification = await NotificationModel.create({
    message,
    admin,
  });

  res.status(201).json(notification);
};

exports.getAll = async (req, res) => {
  const notifications = await NotificationModel.find({});

  if (!notifications) {
    res.status(401).json({
      mess: "notification not found",
    });
  }

  res.status(200).json(notifications);
};

exports.get = async (req, res) => {
  const { _id } = req.user;

  const notifications = await NotificationModel.find({ admin: _id });

  if (!notifications) {
    res.status(401).json({
      mess: "notification not found",
    });
  }

  res.status(200).json(notifications);
};

exports.seen = async (req, res) => {
  isValidNotif =await isValidObjectId(req.params.id);

  if (!isValidNotif) {
    return res.status(404).json({
      mess: "id not valid",
    });
  }

  const { id } = req.params;
  const seenNotification =await NotificationModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      seen: 1,
    },
    {
      new: true,
    }
  );


  if (!seenNotification) {
    return res.status(422).json({ mess: "notif not found" });
  }

  res.status(200).json({seenNotification});
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  const deletNotification = await NotificationModel.findByIdAndDelete({
    _id: id,
  });

  if (!deletNotification) {
    return res.status(404).json({
      mess: "notification not found",
    });
  }

  res.status(202).json(deletNotification);
};
