
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('texts',
    table => {
      table.increments('id')
      table.string('name')
      table.string('url')
      table.text('short_title')
      table.text('title')
      table.text('paragraphs')
      table.string('author')
      table.string('translator')
    }
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('texts')
};
