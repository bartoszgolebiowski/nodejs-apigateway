const WELCOME_SERVICE_NAME = 'welcome-service';
const WELCOME_SERVICE_DB_NAME = 'welcome-mongo';
const WELCOME_SERVICE_DB_PORT = 27018;

const URL = `mongodb://${WELCOME_SERVICE_DB_NAME}:${WELCOME_SERVICE_DB_PORT}/`;
const DB_NAME = WELCOME_SERVICE_NAME;

module.exports = {
    URL, DB_NAME
};