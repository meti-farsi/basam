const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    cover: {
      type: string,
      required: true,
    },
    href: {
      type: string,
      required: true,
    },
    status: {
      type: string,
      required: true,
    },
    price: {
      type: string,
      required: true,
    },
    support: {
      required: true,
      type: string,
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
      type: number,
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
