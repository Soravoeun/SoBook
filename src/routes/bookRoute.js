import { Router } from "express";
import { allBooks, createBook, deleteBook, getOneBook, updateBook } from "../controllers/bookController";

export const bookRouter = Router();

bookRouter.post('/create', createBook);
bookRouter.get('/all', allBooks);
bookRouter.get('/:id/oneBook', getOneBook);
bookRouter.put('/:id/update', updateBook);
bookRouter.delete('/:id/remove', deleteBook)