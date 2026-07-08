const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    support: {
      required: true,
      type: String,
    },
    catgoryID: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    discount: {
      required: true,
      type: Number,
    },
  },
  { Timestamps: true }
);

schema.virtual("sessions", {
  ref: "Session",
  localField: "_id",
  foreignField: "course",
});

schema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "course",
});

const model = mongoose.model("Course", schema);

module.exports = model;
