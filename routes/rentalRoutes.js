const express = require("express");
const router = express.Router();

const {
  createRentalBook,
  getRentalBooks,
  deleteRentalBook,
} = require("../controllers/rentalController");

router.post("/", createRentalBook);

router.get("/", getRentalBooks);

router.delete("/:id", deleteRentalBook);

module.exports = router;