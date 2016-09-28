exports.up = function(knex, Promise) {
  return knex.schema.createTable('ysl-dupes', function (table) {
    table.increments('id').primary()
    table.integer('dupe_id_of')
    table.string('brand')
    table.string('name')
    table.string('colour')
    table.string('url')
    table.integer('price')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ysl-dupes')
};
