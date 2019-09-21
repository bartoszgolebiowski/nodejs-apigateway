const HELLO_SERVICE_NAME = 'hello-service';
const HELLO_SERVICE_DB_NAME = 'hello-mongo';

const URL = `mongodb://${HELLO_SERVICE_DB_NAME}/`;
const DB_NAME = HELLO_SERVICE_NAME;

module.exports = {
    URL, DB_NAME
};