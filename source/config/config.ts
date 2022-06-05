import dotenv from 'dotenv';
dotenv.config();

// server host details
const SERVER_HOSTNAME = process.env.SERVER_PORT || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

// mongodb connection options
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false,
    socketTimeoutMS: 30000
};

// mongodb connection string
const MONGO = {
    MONGO_DB_CONNECTION_STRING: process.env.MONGO_URL
};

// server configurations
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    mongo: MONGO
};

export default config;
