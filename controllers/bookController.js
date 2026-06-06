const Book = require('../models/Book');

// Get all books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new book
const addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();

        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBooks,
    addBook,
};