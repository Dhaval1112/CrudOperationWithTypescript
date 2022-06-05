import http from 'http';
import express from 'express';

import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';
import bookRoutes from './routes/book';

const NAMESPACE = 'Server';
const router = express();

// LOGING REQUEST
router.use((req, res, next) => {
    logging.info(NAMESPACE, `${req.method}, URL - [${req.url}] , IP [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.body}], IP - [${req.socket.remoteAddress}] , STATUS - [${res.statusCode}]`);
    });
    next();
});

// parse the request
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// rules of our API

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Originm X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

// Routes
router.use('/sample', sampleRoutes);
router.use('/api/books', bookRoutes);

//  Because above routes not match so it's en error and for so it's (Error Handling Section)
router.use((req, res, next) => {
    const error = new Error('Not Found ');
    return res.status(404).json({
        message: error.message
    });
});

// create the server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, ` SERVER RUNNING AT ${config.server.hostname} : ${config.server.port}`));
