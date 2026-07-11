const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    course: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "course",
    },
    creator: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    isAccept: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    isAnswer: {
      type: Number,
      required: true,
    },
    mainCommentID: {
      // required: true,
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  },
  { Timestamps: true }
);

const model = mongoose.model("Comment", schema);

module.exports = model;
