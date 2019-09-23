const HELLO_SERVICE_NAME = 'hello-service';
const WELCOME_SERVICE_NAME = 'welcome-service';
const NGINX_PORT = 80;

const HELLO_SERVICE = `http://${HELLO_SERVICE_NAME}:${NGINX_PORT}`;
const WELCOME_SERVICE = `http://${WELCOME_SERVICE_NAME}:${NGINX_PORT}`;

module.exports = {
    HELLO_SERVICE,
    WELCOME_SERVICE
};
