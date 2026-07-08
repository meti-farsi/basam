const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    time: {
      type: string,
      required: true,
    },
    free: {
      type: number,
      required: true,
    },
    video: {
      type: string,
      required: true,
    },
    courses: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "course",
    },
  },
  { Timestamps: true }
);

const model = mongoose.model("Session", schema);

module.exports = model;
