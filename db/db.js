
const pgp = require('pg-promise')({promiseLib: Promise});
const config = require('./pgconfig');

module.exports = pgp(config);