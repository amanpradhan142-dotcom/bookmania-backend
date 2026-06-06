const RentalBook = require("../models/RentalBook");

exports.createRentalBook = async (req, res) => {
  try {
    const rentalBook = await RentalBook.create({
      title: req.body.title,
      author: req.body.author,
      rentalPrice: req.body.rentalPrice,
      duration: req.body.duration,
      pdfUrl: req.body.pdfUrl,
      coverImage: req.body.coverImage, // save URL directly
    });

    res.status(201).json({
      success: true,
      data: rentalBook,
    });
  } catch (error) {
    console.log("CREATE RENTAL BOOK ERROR:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteRentalBook = async (req, res) => {
  try {
    const book = await RentalBook.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Rental book deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getRentalBooks = async (req, res) => {
  try {
    const books = await RentalBook.find();

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};