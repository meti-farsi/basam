const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    body: {
      type: string,
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
      type: number,
      required: true,
    },
    score: {
      type: number,
      required: true,
    },
    isAnswer: {
      type: number,
      required: true,
    },
    mainCommentID: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  },
  { Timestamps: true }
);

const model = mongoose.model("Comment", schema);

module.exports = model;
