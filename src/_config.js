var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/first-mean-app',
  test: 'mongodb://localhost/first-mean-app-testing',
  production: process.env.MONGODB_URI
};

config.SALT_WORK_FACTOR = 10;
config.TOKEN_SECRET = '\xe2\xb8M\xa2\xcc]A\x84y\xe0m\xac\xf2\xec\xdbS\r\xc7r\xafF\x1f\xc0-';

module.exports = config;
