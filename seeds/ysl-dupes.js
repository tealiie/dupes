exports.seed = function(knex, Promise) {
  return knex('ysl-dupes').del()
    .then(function () {
      return Promise.all([
        knex('ysl-dupes').insert({id: 1, dupe_id_of: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', url: 'https://colourpop.com/collections/ultra-satin-lip/products/cozy#', price: 6}),
        knex('ysl-dupes').insert({id: 2, dupe_id_of: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', url: 'https://colourpop.com/collections/ultra-satin-lip/products/cozy#', price: 6}),
        knex('ysl-dupes').insert({id: 3, dupe_id_of: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', url: 'https://colourpop.com/collections/ultra-satin-lip/products/cozy#', price: 6}),
        knex('ysl-dupes').insert({id: 4, dupe_id_of: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', url: 'https://colourpop.com/collections/ultra-satin-lip/products/cozy#', price: 6}),
        knex('ysl-dupes').insert({id: 5, dupe_id_of: 3, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', url: 'https://colourpop.com/collections/ultra-satin-lip/products/cozy#', price: 6}),
        knex('ysl-dupes').insert({id: 6, dupe_id_of: 2, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', url: 'https://colourpop.com/collections/ultra-satin-lip/products/cozy#', price: 6}),
      ]);
    });
};
