const knex = require('knex');

const knexfile = require('./knexFile');
const db = knex.knex(knexfile.development);

module.exports = db;