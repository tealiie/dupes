exports.seed = function(knex, Promise) {
  return knex('ysl-dupes').del()
    .then(function () {
      return Promise.all([
        knex('ysl-dupes').insert({id: 1, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 2, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 3, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 4, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 5, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 6, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 7, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 8, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 9, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 10, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 11, brand: '', name: '', colour: '', url: '', price: ''}),
        knex('ysl-dupes').insert({id: 12, brand: '', name: '', colour: '', url: '', price: ''}),
      ]);
    });
};
