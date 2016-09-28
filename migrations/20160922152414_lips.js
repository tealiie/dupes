exports.up = function(knex, Promise) {
  return knex.schema.createTable('lips', function (table) {
    table.increments('id').primary()
    table.string('type')
    table.string('brand')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lips')
};
