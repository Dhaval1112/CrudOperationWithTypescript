import { Request, Response } from 'express';
import mongoose from 'mongoose';
import logging from '../config/logging';
import Book from '../models/book';

const NAMESPACE = 'SAMPLE CONTROLLER';

const createBook = (req: Request, res: Response) => {
    let { author, title } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    book.save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllBooks = (req: Request, res: Response) => {
    Book.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                books: results,
                count: results.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getOnlyBooks = async () => {
    const books = Book.find()
        .exec()
        .then((results) => {
            // console.log('RESULT :: ', results);

            return results;
        })
        .catch((error) => {
            return {
                message: error.message,
                error
            };
        });
    return books;
};

export default { getAllBooks, createBook, getOnlyBooks };
