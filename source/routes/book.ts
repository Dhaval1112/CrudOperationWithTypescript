import express from 'express';
import bookController from '../controllers/book';
import { Request, Response } from 'express';
const router = express.Router();

router.post('/create/book', bookController.createBook);
router.get('/get/books', bookController.getAllBooks);
router.get('/book/singlebook', async (req: Request, res: Response) => {
    console.log(req.query);
    const book = await bookController.getSingleBook(req.query.id);
    return res.json(book);
});

export = router;
