//This page gives us the ability to retrieve items from our database, through the magic of
//functions!  The database we are pulling from is defined in the connection file in this same
//directory.  

const db = require('./connection')

module.exports = {
  getTexts: () => db('texts'),
  getTextByURL: (url) => db('texts').select().where('url',url).first()
}

