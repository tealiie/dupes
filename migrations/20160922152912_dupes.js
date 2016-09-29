exports.up = function(knex, Promise) {
  return knex.schema.createTable('dupes', function (table) {
    table.increments('id').primary()
    table.string('product_id')
    table.string('brand')
    table.string('name')
    table.string('colour')
    table.integer('price')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dupes')
};
