import { Book } from "../models/bookModel";

export const createBook = async (req, res) => {
  try {
    let newBook = await Book.create(req.body);
    console.log(newBook);
    res.json({ message: "Book created successfully" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const allBooks = async (req, res) => {
  try {
    let book = await Book.find();
    res.json(
      book.map((book) => ({
        ...book.toObject(),
      }))
    );
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getOneBook = async (req, res) => {
  try {
    let findBook = await Book.findById();
    console.log(findBook);
    res.json({ message: "Book found successfully" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const updateBook = async (req, res) => {
  try {
    let putBook = await Book.findByIdAndUpdate(req.body);
    console.log(putBook);
    if (!putBook) {
      return res.status(404).json({ error: "Book non trouvé" });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const deleteBook = async (req, res) => { 
    try {
        let removeBook = await Book.findByIdAndDelete(req.body);
        console.log(removeBook);
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(404).json(error.message);
    }
}
