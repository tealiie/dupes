exports.up = function(knex, Promise) {
  return knex.schema.createTable('lipsticks', function (table) {
    table.increments('id').primary()
    table.string('brand')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lipsticks')
};
