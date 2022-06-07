import express from 'express';
import bookController from '../controllers/book';
const router = express.Router();

router.post('/create/book', bookController.createBook);
router.get('/get/books', bookController.getAllBooks);

export = router;
