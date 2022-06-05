import { Request, Response } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'SAMPLE CONTROLLER';

const getAllBooks = (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Sample Health check route called.. ');

    return res.status(200).json({
        message: "Book's get all books method and books controller..!"
    });
};

export default { getAllBooks };
