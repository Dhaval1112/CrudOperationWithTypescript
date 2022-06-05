import { Request, Response } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'SAMPLE CONTROLLER';

const sampleHealthCheck = (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Sample Health check route called.. ');

    return res.status(200).json({
        message: 'pong'
    });
};

export default { sampleHealthCheck };
