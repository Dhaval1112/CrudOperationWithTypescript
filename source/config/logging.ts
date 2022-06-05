import e from 'express';

const getTimeStamp = (): String => {
    return new Date().toISOString();
};

const info = (namespace: String, message: String, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}]   ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}]   ${message}`);
    }
};

const warn = (namespace: String, message: String, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}]   ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}]   ${message}`);
    }
};

const error = (namespace: String, message: String, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}]   ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}]   ${message}`);
    }
};

const debug = (namespace: String, message: String, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [ERROR] [${namespace}]   ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [ERROR] [${namespace}]   ${message}`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
