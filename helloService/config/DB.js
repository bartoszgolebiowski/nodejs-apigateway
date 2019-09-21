const HELLO_SERVICE_NAME = 'hello-service';
const HELLO_SERVICE_DB_NAME = 'hello-mongo';
const HELLO_SERVICE_DB_PORT = 27018;

const URL = `mongodb://${HELLO_SERVICE_DB_NAME}:${HELLO_SERVICE_DB_PORT}/`;
const DB_NAME = HELLO_SERVICE_NAME;

module.exports = {
    URL, DB_NAME
};