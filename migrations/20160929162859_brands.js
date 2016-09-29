exports.up = function(knex, Promise) {
  return knex.schema.createTable('brands', function (table) {
    table.increments('id').primary()
    table.string('brand')
    table.string('name')
    table.string('colour')
    table.integer('price')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brands')
};
