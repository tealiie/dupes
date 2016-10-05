exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function (table) {
    table.increments('id').primary()
    table.integer('cate_id')
    table.integer('brand_id')
    table.string('name')
    table.string('colour')
    table.integer('price')
    table.string('image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
