const mongoose = require("mongoose");

const rentalBookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    rentalPrice: {
      type: Number,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    pdfUrl: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "RentalBook",
  rentalBookSchema
);