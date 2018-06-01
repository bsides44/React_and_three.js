var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var connection = require('knex')(config)

//require this module into db files to use as the db connection
  //const db = require('./connection')
  //db('table_name')

module.exports = connection
