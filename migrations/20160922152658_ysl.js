exports.up = function(knex, Promise) {
  return knex.schema.createTable('ysl', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('colour')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ysl')
};
